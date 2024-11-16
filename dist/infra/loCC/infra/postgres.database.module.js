"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const orm_config_1 = require("../../database/postgres/orm.config");
const enums_1 = require("../../../shared/enums");
const typeorm_transactional_1 = require("typeorm-transactional");
const typeorm_2 = require("typeorm");
let PostgresDatabaseModule = class PostgresDatabaseModule {
};
exports.PostgresDatabaseModule = PostgresDatabaseModule;
exports.PostgresDatabaseModule = PostgresDatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => (0, orm_config_1.ormConfig)(configService.get(enums_1.AppEnums.ConfigTypeEnum.DATABASE)),
                async dataSourceFactory(options) {
                    if (!options) {
                        throw new Error('Invalid options passed');
                    }
                    return (0, typeorm_transactional_1.addTransactionalDataSource)(new typeorm_2.DataSource(options));
                },
                inject: [config_1.ConfigService],
            }),
        ],
    })
], PostgresDatabaseModule);
//# sourceMappingURL=postgres.database.module.js.map