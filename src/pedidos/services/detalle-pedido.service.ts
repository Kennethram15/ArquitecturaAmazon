import {
    Injectable,
    NotFoundException,
    BadRequestException
} from '@nestjs/common'
import { DetallePedidoRepository } from '../repositories/detalle-pedido.repository'
import { PedidosRepository } from '../repositories/pedidos.repository'
import { DetallePedido } from '../models/detalle-pedido.model'
import { UpdateDetallePedidoDto, CreateDetalleItemDto } from './pedido.dto'

@Injectable()
export class DetallePedidoService {
    constructor(
        private readonly detallePedidoRepository: DetallePedidoRepository,
        private readonly pedidosRepository: PedidosRepository
    ) {}

    // ─── Consultas ────────────────────────────────────────────────────────────

    async findAll(): Promise<DetallePedido[]> {
        return await this.detallePedidoRepository.findAll()
    }

    async findById(id: number): Promise<DetallePedido> {
        const detalle = await this.detallePedidoRepository.findById(id)

        if (!detalle) {
            throw new NotFoundException(`Detalle con id ${id} no encontrado`)
        }

        return detalle
    }

    async findByPedidoId(pedido_id: number): Promise<DetallePedido[]> {
        await this.validarPedidoExiste(pedido_id)
        return await this.detallePedidoRepository.findByPedidoId(pedido_id)
    }

    async findByProductoId(producto_id: number): Promise<DetallePedido[]> {
        const detalles = await this.detallePedidoRepository.findByProductoId(producto_id)

        if (detalles.length === 0) {
            throw new NotFoundException(
                `No se encontraron detalles para el producto con id ${producto_id}`
            )
        }

        return detalles
    }

    // ─── Creación ─────────────────────────────────────────────────────────────

    async addItemToPedido(
        pedido_id: number,
        dto: CreateDetalleItemDto
    ): Promise<DetallePedido> {
        await this.validarPedidoExiste(pedido_id)

        // Verificar si el producto ya existe en el pedido
        const itemExistente = await this.detallePedidoRepository.findByPedidoAndProducto(
            pedido_id,
            dto.producto_id
        )

        if (itemExistente) {
            throw new BadRequestException(
                `El producto ${dto.producto_id} ya existe en el pedido ${pedido_id}. Use el endpoint de actualización para modificar la cantidad`
            )
        }

        if (dto.cantidad <= 0) {
            throw new BadRequestException('La cantidad debe ser mayor a 0')
        }

        if (dto.precio <= 0) {
            throw new BadRequestException('El precio debe ser mayor a 0')
        }

        // Crear el detalle con el subtotal calculado
        const nuevoDetalle = await this.detallePedidoRepository.create({
            pedido_id,
            producto_id: dto.producto_id,
            cantidad: dto.cantidad,
            description: dto.descripcion,
            precio: dto.precio,
            subtotal: dto.cantidad * dto.precio
        })

        // Recalcular el total del pedido
        await this.recalcularTotalPedido(pedido_id)

        return nuevoDetalle
    }

    // ─── Actualización ────────────────────────────────────────────────────────

    async update(
        id: number,
        dto: UpdateDetallePedidoDto
    ): Promise<DetallePedido> {
        const detalleActual = await this.findById(id)

        if (dto.cantidad !== undefined && dto.cantidad <= 0) {
            throw new BadRequestException('La cantidad debe ser mayor a 0')
        }

        if (dto.precio !== undefined && dto.precio <= 0) {
            throw new BadRequestException('El precio debe ser mayor a 0')
        }

        // Calcular nuevo subtotal si cambia cantidad o precio
        const nuevaCantidad = dto.cantidad ?? detalleActual.cantidad
        const nuevoPrecio = dto.precio ?? detalleActual.precio
        const nuevoSubtotal = nuevaCantidad * nuevoPrecio

        const detalleActualizado = await this.detallePedidoRepository.update(id, {
            ...dto,
            subtotal: nuevoSubtotal
        })

        // Recalcular el total del pedido padre
        await this.recalcularTotalPedido(detalleActual.pedido_id)

        return detalleActualizado!
    }

    // ─── Eliminación ──────────────────────────────────────────────────────────

    async delete(id: number): Promise<{ message: string }> {
        const detalle = await this.findById(id)
        const pedido_id = detalle.pedido_id

        const eliminado = await this.detallePedidoRepository.delete(id)

        if (!eliminado) {
            throw new BadRequestException(`No se pudo eliminar el detalle con id ${id}`)
        }

        // Recalcular el total del pedido después de eliminar el item
        await this.recalcularTotalPedido(pedido_id)

        return { message: `Detalle ${id} eliminado correctamente` }
    }

    async deleteByPedidoId(pedido_id: number): Promise<{ message: string }> {
        await this.validarPedidoExiste(pedido_id)
        await this.detallePedidoRepository.deleteByPedidoId(pedido_id)
        await this.pedidosRepository.updateTotal(pedido_id, 0)

        return { message: `Todos los items del pedido ${pedido_id} fueron eliminados` }
    }

    // ─── Helpers privados ─────────────────────────────────────────────────────

    private async validarPedidoExiste(pedido_id: number): Promise<void> {
        const pedido = await this.pedidosRepository.findById(pedido_id)

        if (!pedido) {
            throw new NotFoundException(`Pedido con id ${pedido_id} no encontrado`)
        }
    }

    private async recalcularTotalPedido(pedido_id: number): Promise<void> {
        const nuevoTotal = await this.detallePedidoRepository.sumSubtotalByPedidoId(pedido_id)
        await this.pedidosRepository.updateTotal(pedido_id, nuevoTotal)
    }
}
