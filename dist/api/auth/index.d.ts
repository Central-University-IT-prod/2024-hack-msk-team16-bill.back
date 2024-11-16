import { CreateUserHttpController } from './controllers/auth.http.controller';
import { AuthUseCase } from './use-cases';
import { JwtHelper } from './helpers/jwt.helpers';
import { JwtGuard } from './guards';
import { JwtStrategy } from './strategies/strategy.jwt';
import { UserCoreModule } from 'src/infra/loCC/core/user.core.module';
import { TokenProfile } from './profiles';
export declare const authControllers: (typeof CreateUserHttpController)[];
export declare const authProviders: (typeof JwtGuard | typeof JwtHelper | typeof AuthUseCase | typeof JwtStrategy | typeof TokenProfile)[];
export declare const authImports: (typeof UserCoreModule)[];