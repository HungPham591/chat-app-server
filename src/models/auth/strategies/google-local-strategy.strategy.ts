import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleLocalStrategy extends PassportStrategy(Strategy, 'GoogleLocalStrategy') {
  constructor(private authService: AuthService) {
    super({ usernameField: 'id', passwordField: 'idToken' });
  }
  async validate(id: string, idToken: string): Promise<any> {
    let user = await this.authService.validateFacebookAccount(id, idToken);

    if (!user)
      throw new UnauthorizedException();

    return user;
  }
}