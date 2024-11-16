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
exports.TokenPayloadDto = void 0;
const classes_1 = require("@automapper/classes");
const enums_1 = require("../enums");
const class_validator_1 = require("class-validator");
class TokenPayloadDto {
}
exports.TokenPayloadDto = TokenPayloadDto;
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TokenPayloadDto.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], TokenPayloadDto.prototype, "phone", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TokenPayloadDto.prototype, "firstName", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TokenPayloadDto.prototype, "lastName", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, class_validator_1.IsEnum)(enums_1.UserEnums.RoleEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TokenPayloadDto.prototype, "role", void 0);
//# sourceMappingURL=token-payload.dto.js.map