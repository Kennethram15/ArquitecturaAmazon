import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    ParseIntPipe,
    HttpCode,
    HttpStatus
} from '@nestjs/common'
import { PedidosService } from '../services/pedidos.service'
import { CreatePedidoDto, UpdatePedidoDto } from '../services/pedido.dto'
import { Pedido } from '../models/pedidos.model'
import { Status } from '../../common/enums/status.enum'

@Controller('pedidos')
export class PedidosController {
    constructor(private readonly pedidosService: PedidosService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<Pedido[]> {
        return await this.pedidosService.findAll()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<Pedido> {
        return await this.pedidosService.findById(id)
    }

    @Get('status/:status')
    @HttpCode(HttpStatus.OK)
    async findByStatus(
        @Param('status', ParseIntPipe) status: Status
    ): Promise<Pedido[]> {
        return await this.pedidosService.findByStatus(status)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(
        @Body() dto: CreatePedidoDto
    ): Promise<Pedido> {
        return await this.pedidosService.create(dto)
    }

    @Patch(':id/status')
    @HttpCode(HttpStatus.OK)
    async updateStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdatePedidoDto
    ): Promise<Pedido> {
        return await this.pedidosService.updateStatus(id, dto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(
        @Param('id', ParseIntPipe) id: number
    ): Promise<{ message: string }> {
        return await this.pedidosService.delete(id)
    }
}