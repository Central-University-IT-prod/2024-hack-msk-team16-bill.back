"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserHttpController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../../shared/decorators");
const app_1 = require("../../../shared/enums/app");
const use_cases_1 = require("../use-cases");
const dtos_1 = require("../dtos");
let CreateUserHttpController = class CreateUserHttpController {
    constructor(authUseCase) {
        this.authUseCase = authUseCase;
    }
    async singUpUser(body) {
        return this.authUseCase.createUser(body);
    }
    async login(body) {
        return this.authUseCase.loginUser(body);
    }
};
exports.CreateUserHttpController = CreateUserHttpController;
__decorate([
    (0, decorators_1.Route)({
        title: 'Crete new user',
        description: 'Sing up for simple users',
        method: app_1.HttpMethodEnum.POST,
        path: 'sing-up',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.SingUpAuthDto]),
    __metadata("design:returntype", Promise)
], CreateUserHttpController.prototype, "singUpUser", null);
__decorate([
    (0, decorators_1.Route)({
        title: 'Login',
        description: 'Login by email and password',
        method: app_1.HttpMethodEnum.POST,
        path: 'login',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.LogInAuthDto]),
    __metadata("design:returntype", Promise)
], CreateUserHttpController.prototype, "login", null);
exports.CreateUserHttpController = CreateUserHttpController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [use_cases_1.AuthUseCase])
], CreateUserHttpController);
//# sourceMappingURL=auth.http.controller.js.map