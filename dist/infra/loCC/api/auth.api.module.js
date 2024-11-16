"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApiModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_1 = require("../../../api/auth");
const enums_1 = require("../../../shared/enums");
let AuthApiModule = class AuthApiModule {
};
exports.AuthApiModule = AuthApiModule;
exports.AuthApiModule = AuthApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                useFactory: (configService) => {
                    const { jwtSecret: secret } = configService.getOrThrow(enums_1.AppEnums.ConfigTypeEnum.APP);
                    return {
                        secret,
                        signOptions: { expiresIn: '30d' },
                    };
                },
                inject: [config_1.ConfigService],
                global: true,
            }),
            ...auth_1.authImports,
        ],
        controllers: auth_1.authControllers,
        providers: auth_1.authProviders,
    })
], AuthApiModule);
//# sourceMappingURL=auth.api.module.js.map