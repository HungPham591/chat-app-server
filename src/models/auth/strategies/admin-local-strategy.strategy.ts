import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class AdminLocalStrategy extends PassportStrategy(Strategy, 'AdminLocalStrategy') {
    constructor(private authService: AuthService) {
        super({ usernameField: 'name', passwordField: 'password' });
    }
    async validate(name: string, password: string): Promise<any> {
        let user = await this.authService.validateAdminAccount(name, password);

        if (!user)
            throw new UnauthorizedException();

        return user;
    }
}