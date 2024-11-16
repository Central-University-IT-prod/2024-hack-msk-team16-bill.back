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
exports.GroupBillTransactionalEntity = void 0;
const entities_1 = require("../../user/entities");
const typeorm_1 = require("typeorm");
let GroupBillTransactionalEntity = class GroupBillTransactionalEntity {
};
exports.GroupBillTransactionalEntity = GroupBillTransactionalEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
    }),
    __metadata("design:type", Number)
], GroupBillTransactionalEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'rate',
        type: 'float',
    }),
    __metadata("design:type", Number)
], GroupBillTransactionalEntity.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.UserGroupEntity, (group) => group.id, {
        nullable: false,
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'group_id',
    }),
    __metadata("design:type", entities_1.UserGroupEntity)
], GroupBillTransactionalEntity.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity, (user) => user.id, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'from_user_id',
    }),
    __metadata("design:type", entities_1.UserEntity)
], GroupBillTransactionalEntity.prototype, "fromUserId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity, (user) => user.id, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'to_user_id',
    }),
    __metadata("design:type", entities_1.UserEntity)
], GroupBillTransactionalEntity.prototype, "toUserId", void 0);
exports.GroupBillTransactionalEntity = GroupBillTransactionalEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'group_bill_transactional' })
], GroupBillTransactionalEntity);
//# sourceMappingURL=group-bill-transactional.entity.js.map