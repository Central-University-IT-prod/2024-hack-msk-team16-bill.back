import { INestApplication } from '@nestjs/common';
export declare class AppFactory {
    private readonly _app;
    private readonly configService;
    private readonly bootstrapMessage;
    static logger: Console;
    constructor(_app: INestApplication);
    get app(): INestApplication<any>;
    useCors(): this;
    useGlobalPipes(): this;
    listen(): Promise<void>;
}
