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
exports.AuthUseCase = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../../core/user/services/user.service");
const typeorm_transactional_1 = require("typeorm-transactional");
const jwt_helpers_1 = require("../helpers/jwt.helpers");
const dtos_1 = require("../dtos");
const argon2_1 = require("argon2");
const nestjs_1 = require("@automapper/nestjs");
const entities_1 = require("../../../core/user/entities");
const dtos_2 = require("../../../shared/dtos");
let AuthUseCase = class AuthUseCase {
    constructor(mapper, userService, jwtHelper) {
        this.mapper = mapper;
        this.userService = userService;
        this.jwtHelper = jwtHelper;
    }
    async createUser(payload) {
        const { phone } = payload;
        const userIsActivated = await this.userService.findByPhone(phone);
        if (userIsActivated) {
            throw new common_1.BadRequestException('Пользователь уже существует');
        }
        await this.userService.createUser(payload);
        const user = await this.userService.findByPhone(phone);
        const tokenPayload = this.mapper.map(user, entities_1.UserEntity, dtos_2.TokenPayloadDto);
        const token = await this.jwtHelper.create(tokenPayload);
        return { token };
    }
    async loginUser(payload) {
        const { phone, password } = payload;
        const userIsActive = await this.userService.findByPhone(phone);
        if (!userIsActive) {
            throw new common_1.BadRequestException('Неверный логин или пароль');
        }
        if (await (0, argon2_1.verify)(userIsActive.password, password)) {
            const tokenPayload = this.mapper.map(userIsActive, entities_1.UserEntity, dtos_2.TokenPayloadDto);
            const token = await this.jwtHelper.create(tokenPayload);
            return { token };
        }
        else {
            throw new common_1.BadRequestException('Неверный логин или пароль');
        }
    }
};
exports.AuthUseCase = AuthUseCase;
__decorate([
    (0, typeorm_transactional_1.Transactional)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.SingUpAuthDto]),
    __metadata("design:returntype", Promise)
], AuthUseCase.prototype, "createUser", null);
__decorate([
    (0, typeorm_transactional_1.Transactional)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.LogInAuthDto]),
    __metadata("design:returntype", Promise)
], AuthUseCase.prototype, "loginUser", null);
exports.AuthUseCase = AuthUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object, user_service_1.UserService,
        jwt_helpers_1.JwtHelper])
], AuthUseCase);
//# sourceMappingURL=auth.use-case.js.map