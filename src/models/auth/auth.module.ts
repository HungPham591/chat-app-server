import { AdminLocalStrategy } from './strategies/admin-local-strategy.strategy';
import { AdminModule } from './../admin/admin.module';
import { FacebookLocalStrategy } from './strategies/facebook-local-strategy.strategy';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Constants } from './../../constants/Constants';
import { FacebookAccountModule } from './../facebook-account/facebook-account.module';
import { GoogleAccountModule } from './../google-account/google-account.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt-strategy.strategy';
import { GoogleLocalStrategy } from './strategies/google-local-strategy.strategy';

@Module({
  imports: [FacebookAccountModule, GoogleAccountModule, PassportModule, UserModule, AdminModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: `${Constants.TOKEN_EXPIRES_IN}s` },
    }),
  ],
  providers: [AuthService, GoogleLocalStrategy, FacebookLocalStrategy, AdminLocalStrategy, JwtStrategy, AuthResolver],
  exports: [AuthService],
})
export class AuthModule { }
