"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = void 0;
const dotenv_1 = require("dotenv");
const app_config_1 = require("../../app-config");
const typeorm_1 = require("typeorm");
const path_1 = require("path");
const user_1 = require("../../../core/user");
const bank_1 = require("../../../core/bank");
const ormConfig = (dbConfig) => {
    const migrationsDir = (0, path_1.join)(__dirname, 'migrations', '**/*.js');
    return {
        ...dbConfig,
        type: 'postgres',
        logging: true,
        synchronize: false,
        migrations: [migrationsDir],
        entities: [...user_1.userEntities, ...bank_1.bankEntities],
        autoLoadEntities: true,
        migrationsRun: true,
    };
};
exports.ormConfig = ormConfig;
(0, dotenv_1.config)();
exports.default = new typeorm_1.DataSource((0, exports.ormConfig)(app_config_1.ConfigLoaders.databaseLoader()));
//# sourceMappingURL=orm.config.js.map