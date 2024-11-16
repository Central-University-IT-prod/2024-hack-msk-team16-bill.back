"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppFactory = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const enums_1 = require("./shared/enums");
class AppFactory {
    constructor(_app) {
        this._app = _app;
        this.bootstrapMessage = ({ port, enviroment, version }) => `👨🏿‍💻 PROD app started on ${port} port. Version - ${version}. Environment - ${enviroment}`;
        this.configService = this._app.get(config_1.ConfigService);
        this._app.setGlobalPrefix('api');
    }
    get app() {
        return this._app;
    }
    useCors() {
        this.app.enableCors();
        return this;
    }
    useGlobalPipes() {
        this.app.useGlobalPipes(new common_1.ValidationPipe({
            transform: true,
            whitelist: true,
        }));
        return this;
    }
    async listen() {
        const appConfigs = this.configService.getOrThrow(enums_1.AppEnums.ConfigTypeEnum.APP);
        await this._app.listen(appConfigs.port, () => AppFactory.logger.log(this.bootstrapMessage(appConfigs)));
    }
}
exports.AppFactory = AppFactory;
AppFactory.logger = console;
//# sourceMappingURL=app-factory.js.map