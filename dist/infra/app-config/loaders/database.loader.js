"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseLoader = void 0;
const config_1 = require("@nestjs/config");
const enums_1 = require("../../../shared/enums");
exports.databaseLoader = (0, config_1.registerAs)(enums_1.AppEnums.ConfigTypeEnum.DATABASE, () => ({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
}));
//# sourceMappingURL=database.loader.js.map