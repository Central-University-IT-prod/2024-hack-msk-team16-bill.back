import { UserEntity, UserGroupEntity } from 'src/core/user/entities';
export declare class GroupBillTransactionalEntity {
    id: number;
    rate: number;
    groupId: UserGroupEntity;
    fromUserId: UserEntity;
    toUserId: UserEntity;
}
