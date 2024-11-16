import { UserEnums } from '../enums';
export declare class TokenPayloadDto {
    id: number;
    phone: string;
    firstName: string;
    lastName: string;
    role?: UserEnums.RoleEnum;
}
