import { AuthUseCase } from '../use-cases';
import { LogInAuthDto, SingUpAuthDto, TokenResponseDto } from '../dtos';
export declare class CreateUserHttpController {
    private readonly authUseCase;
    constructor(authUseCase: AuthUseCase);
    singUpUser(body: SingUpAuthDto): Promise<TokenResponseDto>;
    login(body: LogInAuthDto): Promise<TokenResponseDto>;
}
