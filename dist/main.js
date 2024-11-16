"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./infra/loCC/app.module");
const app_factory_1 = require("./app-factory");
const typeorm_transactional_1 = require("typeorm-transactional");
const path_1 = require("path");
async function bootstrap() {
    const logger = app_factory_1.AppFactory.logger;
    (0, typeorm_transactional_1.initializeTransactionalContext)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger,
    });
    console.log(__dirname, '..', 'views');
    app.setViewEngine('pug');
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    await new app_factory_1.AppFactory(app).useGlobalPipes().useCors().listen();
}
bootstrap();
//# sourceMappingURL=main.js.map