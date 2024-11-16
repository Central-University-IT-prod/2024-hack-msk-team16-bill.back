import { UserEnums } from 'src/shared/enums';
export declare const RolesSetMetadata: (...roles: UserEnums.RoleEnum[]) => import("@nestjs/common").CustomDecorator<string>;
export declare const Roles: (...roles: UserEnums.RoleEnum[]) => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
