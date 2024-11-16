import { Repository } from 'typeorm';
import { UserEntity } from '../entities';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(payload: any): Promise<boolean>;
    findById(id: number): Promise<UserEntity> | null;
    findByPhone(phone: string): Promise<UserEntity> | null;
}
