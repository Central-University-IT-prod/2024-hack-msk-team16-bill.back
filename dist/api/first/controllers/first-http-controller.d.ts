import { FirstUseCase } from '../use-cases';
export declare class FirstHttpController {
    private readonly firstUseCase;
    constructor(firstUseCase: FirstUseCase);
    test(): {
        message: string;
    };
}
