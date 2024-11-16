import { UserEnums } from 'src/shared/enums';
export declare class SingUpAuthDto {
    phone: string;
    password: string;
    firstName: string;
    lastName: string;
    role?: UserEnums.RoleEnum;
}
export declare class LogInAuthDto {
    phone: string;
    password: string;
}
