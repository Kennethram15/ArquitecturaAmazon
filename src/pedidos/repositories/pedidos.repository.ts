import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Pedido } from '../models/pedidos.model'

@Injectable()
export class PedidosRepository {
    constructor(
        @InjectRepository(Pedido)
        private readonly pedidoRepo: Repository<Pedido>
    ) {}

    async findAll(): Promise<Pedido[]> {
        return await this.pedidoRepo.find()
    }

    async findById(id: number): Promise<Pedido | null> {
        return await this.pedidoRepo.findOne({
            where: { id }
        })
    }

    async findByStatus(status: number): Promise<Pedido[]> {
        return await this.pedidoRepo.find({
            where: { pedido_status: status }
        })
    }

    async create(pedido: Partial<Pedido>): Promise<Pedido> {
        const nuevoPedido = this.pedidoRepo.create(pedido)
        return await this.pedidoRepo.save(nuevoPedido)
    }

    async update(id: number, pedido: Partial<Pedido>): Promise<Pedido | null> {
        await this.pedidoRepo.update(id, pedido)
        return await this.findById(id)
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.pedidoRepo.delete(id)
        return (result.affected ?? 0) > 0
    }

    async updateTotal(id: number, total: number): Promise<Pedido | null> {
        await this.pedidoRepo.update(id, { pedido_total: total })
        return await this.findById(id)
    }

    async updateStatus(id: number, status: number): Promise<Pedido | null> {
        await this.pedidoRepo.update(id, { pedido_status: status })
        return await this.findById(id)
    }
}