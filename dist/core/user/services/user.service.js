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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
const typeorm_2 = require("@nestjs/typeorm");
const enums_1 = require("../../../shared/enums");
const argon2_1 = require("argon2");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(payload) {
        try {
            const password = await (0, argon2_1.hash)(payload.password);
            const newUser = await this.userRepository.create({
                ...payload,
                password,
                role: enums_1.UserEnums.RoleEnum.USER,
            });
            await this.userRepository.insert(newUser);
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException('Ошибка при создании пользователя - повторите позже');
        }
    }
    async findById(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async findByPhone(phone) {
        return await this.userRepository.findOne({ where: { phone } });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map