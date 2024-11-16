import { HttpStatus } from '@nestjs/common';
import { AppEnums, UserEnums } from '../enums';
export type RoutOptions = {
    method: AppEnums.HttpMethodEnum;
    title: string;
    description?: string;
    path?: string;
    code?: HttpStatus;
    roles?: UserEnums.RoleEnum[];
};
export declare const Route: (options: RoutOptions) => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
