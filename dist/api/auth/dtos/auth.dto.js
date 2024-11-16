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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInAuthDto = exports.SingUpAuthDto = void 0;
const classes_1 = require("@automapper/classes");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../shared/enums");
class SingUpAuthDto {
    constructor() {
        this.role = enums_1.UserEnums.RoleEnum.USER;
    }
}
exports.SingUpAuthDto = SingUpAuthDto;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SingUpAuthDto.prototype, "phone", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SingUpAuthDto.prototype, "password", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SingUpAuthDto.prototype, "firstName", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SingUpAuthDto.prototype, "lastName", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsEnum)(enums_1.UserEnums.RoleEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SingUpAuthDto.prototype, "role", void 0);
class LogInAuthDto {
}
exports.LogInAuthDto = LogInAuthDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogInAuthDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogInAuthDto.prototype, "password", void 0);
//# sourceMappingURL=auth.dto.js.map