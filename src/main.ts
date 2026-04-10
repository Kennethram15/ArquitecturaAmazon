import { NestFactory, HttpAdapterHost } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
    const logger = new Logger('Bootstrap')

    const app = await NestFactory.create(AppModule, {
        logger: ['log', 'warn', 'error', 'debug', 'verbose'],
    })

    const PORT = 3000

    await app.listen(PORT)

    logger.log(`Microservicio de pedidos corriendo en http://localhost:${PORT}`)
}

bootstrap()