import { GroupBillTransactionalEntity } from './group-bill-transactional.entity';
import { UserGroupEntity } from 'src/core/user/entities';
export declare class GroupBillEntity {
    id: number;
    title: string;
    transactionalId: GroupBillTransactionalEntity;
    userGroupId: UserGroupEntity;
    owner_id: any;
}
