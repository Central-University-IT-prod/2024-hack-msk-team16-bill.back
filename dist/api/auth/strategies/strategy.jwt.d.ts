import { TokenPayloadDto } from 'src/shared/dtos';
import { UserService } from 'src/core/user/services/user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: TokenPayloadDto & {
        iat: string;
        exp: string;
    }): Promise<TokenPayloadDto>;
}
export {};
