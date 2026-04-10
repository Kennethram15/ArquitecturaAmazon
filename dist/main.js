"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'warn', 'error', 'debug', 'verbose'],
    });
    const PORT = 3000;
    await app.listen(PORT);
    logger.log(`Microservicio de pedidos corriendo en http://localhost:${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map