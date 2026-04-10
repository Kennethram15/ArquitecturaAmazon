import { Module, Logger } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { PedidosModule } from './pedidos/pedidos.module'

import { Pedido } from './pedidos/models/pedidos.model'
import { DetallePedido } from './pedidos/models/detalle-pedido.model'

import { Cancelacion } from './pedidos/models/cancelacion.model'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'amazon_pedidos', 
            entities: [Pedido, DetallePedido, Cancelacion],
            synchronize: true,
            logging: true,
        }),

        PedidosModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,

        Logger,
    ],
})
export class AppModule {}