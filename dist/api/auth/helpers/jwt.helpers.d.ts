import { JwtService } from '@nestjs/jwt';
import { TokenPayloadDto } from 'src/shared/dtos';
export declare class JwtHelper {
    private jwtService;
    constructor(jwtService: JwtService);
    create(payload: TokenPayloadDto): Promise<string>;
    verify(token: string): Promise<TokenPayloadDto>;
}
