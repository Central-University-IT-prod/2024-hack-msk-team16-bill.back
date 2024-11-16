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
exports.GroupBillEntity = void 0;
const typeorm_1 = require("typeorm");
const group_bill_transactional_entity_1 = require("./group-bill-transactional.entity");
const entities_1 = require("../../user/entities");
let GroupBillEntity = class GroupBillEntity {
};
exports.GroupBillEntity = GroupBillEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
    }),
    __metadata("design:type", Number)
], GroupBillEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'title',
        type: 'varchar',
        length: 63,
    }),
    __metadata("design:type", String)
], GroupBillEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_bill_transactional_entity_1.GroupBillTransactionalEntity, (transactional) => transactional.id, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'transactional_id',
    }),
    __metadata("design:type", group_bill_transactional_entity_1.GroupBillTransactionalEntity)
], GroupBillEntity.prototype, "transactionalId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_1.UserGroupEntity, (group) => group.id, {
        nullable: true,
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_group_id',
    }),
    __metadata("design:type", entities_1.UserGroupEntity)
], GroupBillEntity.prototype, "userGroupId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity, (user) => user.id, {
        nullable: true,
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'owner_id',
    }),
    __metadata("design:type", Object)
], GroupBillEntity.prototype, "owner_id", void 0);
exports.GroupBillEntity = GroupBillEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'group_bill' })
], GroupBillEntity);
//# sourceMappingURL=group-bill.entity.js.map