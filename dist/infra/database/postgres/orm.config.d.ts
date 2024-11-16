import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigTypes } from 'src/infra/app-config';
import { DataSource } from 'typeorm';
export declare const ormConfig: (dbConfig: ConfigTypes.DatabaseConfigType | object) => TypeOrmModuleOptions;
declare const _default: DataSource;
export default _default;
