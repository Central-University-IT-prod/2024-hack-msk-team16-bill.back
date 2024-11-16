import { UserEntity, UserGroupEntity } from './entities';
import { UserService } from './services';
export declare const userEntities: (typeof UserGroupEntity | typeof UserEntity)[];
export declare const userProviders: (typeof UserService)[];
export declare const userExports: (typeof UserService)[];
