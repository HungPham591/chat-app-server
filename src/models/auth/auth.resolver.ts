import { RolesGuard } from './guards/roles.guard';
import { Role } from './../../utils/Interface';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/models/user/entities/user.entity';
import { Admin } from './../admin/entities/admin.entity';
import { BaseResolver } from './../base/base.resolver';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { Roles } from './decorators/roles.decorator';
import { AdminLoginResponse } from './dto/admin-login.response';
import { LoginAdminArgs } from './dto/login-admin.args';
import { LoginFacebookArgs } from './dto/login-facebook.args';
import { LoginGoogleArgs } from './dto/login-google.args';
import { UserLoginResponse } from './dto/user-login.response';
import { UserToken } from './entities/user-token.entity';
import { AdminLocalAuthGuard } from './guards/admin-local-auth.guard';
import { FacebookLocalAuthGuard } from './guards/facebook-local-auth.guard';
import { GoogleLocalAuthGuard } from './guards/google-local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Resolver()
export class AuthResolver extends BaseResolver {
    constructor(
        private readonly authService: AuthService
    ) {
        super();
    }
    @Query(() => UserLoginResponse)
    @UseGuards(GoogleLocalAuthGuard)
    async loginGoogleAccount(@Args('loginGoogleArgs') loginGoogleArgs: LoginGoogleArgs, @CurrentUser() user: User) {
        return await this.authService.loginGoogleAccount(user);
    }
    @Query(() => UserLoginResponse)
    @UseGuards(FacebookLocalAuthGuard)
    async loginFacebookAccount(@Args('loginFacebookArgs') loginFacebookArgs: LoginFacebookArgs, @CurrentUser() user: User) {
        return await this.authService.loginFacebookAccount(user);
    }
    @Query(() => AdminLoginResponse)
    @UseGuards(AdminLocalAuthGuard)
    async loginAdmin(@Args('loginAdminArgs') loginAdminArgs: LoginAdminArgs, @CurrentUser() admin: Admin) {
        return await this.authService.loginAdmin(admin);
    }
    @Query(() => User)
    @UseGuards(JwtAuthGuard)
    async removeAccount(@CurrentUser() user: UserToken) {
        return await this.authService.removeAccount(user);
    }
    @Query(() => User)
    @UseGuards(JwtAuthGuard)
    async whoAmI(@CurrentUser() user: UserToken) {
        return await this.authService.whoAmI(user);
    }
}
