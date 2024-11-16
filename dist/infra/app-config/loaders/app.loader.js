"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appLoader = void 0;
const config_1 = require("@nestjs/config");
const enums_1 = require("../../../shared/enums");
exports.appLoader = (0, config_1.registerAs)(enums_1.AppEnums.ConfigTypeEnum.APP, () => ({
    version: process.env.npm_package_version,
    port: Number(process.env.APP_PORT),
    enviroment: process.env.NODE_ENV,
    baseUrl: process.env.BASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    cryptoSecret: process.env.CRYPTO_SECRET,
    geoBaseUrl: process.env.GEO_BASE_URL,
    notifyManagerEmail: process.env.NOTIFY_MANAGER_EMAIL,
}));
//# sourceMappingURL=app.loader.js.map