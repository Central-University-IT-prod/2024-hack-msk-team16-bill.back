export * from './app.loader';
export * from './database.loader';
export declare const loaders: (((() => import("../types").AppConfigType) & import("@nestjs/config").ConfigFactoryKeyHost<import("../types").AppConfigType>) | ((() => import("../types").DatabaseConfigType) & import("@nestjs/config").ConfigFactoryKeyHost<import("../types").DatabaseConfigType>))[];
