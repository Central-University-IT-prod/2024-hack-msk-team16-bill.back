import { FirstCoreModule } from 'src/infra/loCC/core/first.core.module';
import { FirstHttpController } from './controllers';
import { FirstUseCase } from './use-cases';
export declare const FirstControllers: (typeof FirstHttpController)[];
export declare const FirstProviders: (typeof FirstUseCase)[];
export declare const firstImports: (typeof FirstCoreModule)[];
