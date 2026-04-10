import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DetallePedido } from '../models/detalle-pedido.model'

@Injectable()
export class DetallePedidoRepository {
    constructor(
        @InjectRepository(DetallePedido)
        private readonly detalleRepo: Repository<DetallePedido>
    ) {}

    async findAll(): Promise<DetallePedido[]> {
        return await this.detalleRepo.find()
    }

    async findById(id: number): Promise<DetallePedido | null> {
        return await this.detalleRepo.findOne({
            where: { id }
        })
    }

    async findByPedidoId(pedido_id: number): Promise<DetallePedido[]> {
        return await this.detalleRepo.find({
            where: { pedido_id }
        })
    }

    async findByProductoId(producto_id: number): Promise<DetallePedido[]> {
        return await this.detalleRepo.find({
            where: { producto_id }
        })
    }

    async findByPedidoAndProducto(
        pedido_id: number,
        producto_id: number
    ): Promise<DetallePedido | null> {
        return await this.detalleRepo.findOne({
            where: { pedido_id, producto_id }
        })
    }

    async create(detalle: Partial<DetallePedido>): Promise<DetallePedido> {
        const nuevoDetalle = this.detalleRepo.create(detalle)
        return await this.detalleRepo.save(nuevoDetalle)
    }

    async createMany(detalles: Partial<DetallePedido>[]): Promise<DetallePedido[]> {
        const nuevosDetalles = this.detalleRepo.create(detalles)
        return await this.detalleRepo.save(nuevosDetalles)
    }

    async update(id: number, detalle: Partial<DetallePedido>): Promise<DetallePedido | null> {
        await this.detalleRepo.update(id, detalle)
        return await this.findById(id)
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.detalleRepo.delete(id)
        return (result.affected ?? 0) > 0
    }

    async deleteByPedidoId(pedido_id: number): Promise<boolean> {
        const result = await this.detalleRepo.delete({ pedido_id })
        return (result.affected ?? 0) > 0
    }

    async sumSubtotalByPedidoId(pedido_id: number): Promise<number> {
        const result = await this.detalleRepo
            .createQueryBuilder('detalle')
            .select('SUM(detalle.subtotal)', 'total')
            .where('detalle.pedido_id = :pedido_id', { pedido_id })
            .getRawOne()

        return parseFloat(result?.total ?? '0')
    }
}