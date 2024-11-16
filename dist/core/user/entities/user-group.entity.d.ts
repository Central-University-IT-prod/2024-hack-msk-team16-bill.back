import { UserEntity } from './user.entity';
import { GroupBillEntity } from 'src/core/bank/entities';
export declare class UserGroupEntity {
    id: number;
    userId: UserEntity;
    groupBillId: GroupBillEntity;
}
