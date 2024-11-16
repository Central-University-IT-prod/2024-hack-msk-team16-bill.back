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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const user_group_entity_1 = require("./user-group.entity");
const entities_1 = require("../../bank/entities");
const enums_1 = require("../../../shared/enums");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'first_name',
        type: 'varchar',
        length: 24,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'last_name',
        type: 'varchar',
        length: 24,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'phone',
        type: 'varchar',
        length: 15,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bool',
        name: 'is_blocked',
        default: false,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isBlocked", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.UserEnums.RoleEnum }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_group_entity_1.UserGroupEntity, (group) => group.userId, {
        nullable: true,
        cascade: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'group_id',
    }),
    __metadata("design:type", user_group_entity_1.UserGroupEntity)
], UserEntity.prototype, "userGroup", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.GroupBillEntity, (groupBill) => groupBill.id, {
        nullable: true,
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "groupBillId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.GroupBillTransactionalEntity, (groupBill) => groupBill.fromUserId, {
        nullable: true,
    }),
    __metadata("design:type", entities_1.GroupBillTransactionalEntity)
], UserEntity.prototype, "toUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserEntity, (user) => user.toUser, {
        nullable: true,
    }),
    __metadata("design:type", UserEntity)
], UserEntity.prototype, "fromUserId", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'user' })
], UserEntity);
//# sourceMappingURL=user.entity.js.map