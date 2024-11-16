import { UserService } from 'src/core/user/services/user.service';
import { JwtHelper } from '../helpers/jwt.helpers';
import { LogInAuthDto, SingUpAuthDto, TokenResponseDto } from '../dtos';
import { Mapper } from '@automapper/core';
export declare class AuthUseCase {
    private readonly mapper;
    private readonly userService;
    private readonly jwtHelper;
    constructor(mapper: Mapper, userService: UserService, jwtHelper: JwtHelper);
    createUser(payload: SingUpAuthDto): Promise<TokenResponseDto>;
    loginUser(payload: LogInAuthDto): Promise<TokenResponseDto>;
}
