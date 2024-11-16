import { UserGroupEntity } from './user-group.entity';
import { GroupBillTransactionalEntity } from 'src/core/bank/entities';
import { UserEnums } from 'src/shared/enums';
export declare class UserEntity {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    isBlocked?: boolean;
    role: UserEnums.RoleEnum;
    userGroup: UserGroupEntity;
    groupBillId: number;
    toUser: GroupBillTransactionalEntity;
    fromUserId: UserEntity;
}
