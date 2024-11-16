"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authImports = exports.authProviders = exports.authControllers = void 0;
const auth_http_controller_1 = require("./controllers/auth.http.controller");
const use_cases_1 = require("./use-cases");
const jwt_helpers_1 = require("./helpers/jwt.helpers");
const guards_1 = require("./guards");
const strategy_jwt_1 = require("./strategies/strategy.jwt");
const user_core_module_1 = require("../../infra/loCC/core/user.core.module");
const profiles_1 = require("./profiles");
exports.authControllers = [auth_http_controller_1.CreateUserHttpController];
exports.authProviders = [
    use_cases_1.AuthUseCase,
    jwt_helpers_1.JwtHelper,
    guards_1.JwtGuard,
    strategy_jwt_1.JwtStrategy,
    profiles_1.TokenProfile,
];
exports.authImports = [user_core_module_1.UserCoreModule];
//# sourceMappingURL=index.js.map