import { AdminLoginResponse } from './dto/admin-login.response';
import { UserLoginResponse } from './dto/user-login.response';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { OAuth2Client } from 'google-auth-library';
import { User } from 'src/models/user/entities/user.entity';
import { Constants } from './../../constants/Constants';
import { AccountType, Role } from './../../utils/Interface';
import { AdminService } from './../admin/admin.service';
import { BaseService } from './../base/base.service';
import { FacebookAccountService } from './../facebook-account/facebook-account.service';
import { GoogleAccountService } from './../google-account/google-account.service';
import { UserService } from './../user/user.service';
import { UserToken } from './entities/user-token.entity';

@Injectable()
export class AuthService extends BaseService {
    constructor(
        private readonly adminService: AdminService,
        private readonly facebookAccountService: FacebookAccountService,
        private readonly googleAccountService: GoogleAccountService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {
        super();
    }
    private async generateResponseObject(payload: any) {
        const access_token = await this.generateJwt(payload);
        return {
            access_token: access_token,
            token_type: Constants.TOKEN_TYPE,
            expires_in: Constants.TOKEN_EXPIRES_IN,
        }
    }
    async generateJwt(payload: any) {
        return await this.jwtService.signAsync(payload);
    }
    async verifyJwt(jwt: string) {
        return await this.jwtService.verifyAsync(jwt);
    }
    async hashId(id: string) {
        return await bcrypt.hash(id, 12);
    }
    async validateAdminAccount(name: string, password: string): Promise<any> {
        const adminAccount = await this.adminService.findOne({ name });
        if (adminAccount && adminAccount.password === password) {
            return adminAccount;
        }
        return null;
    }
    async validateFacebookAccount(id: string, idToken: string): Promise<any> {
        const facebookAccount = await this.facebookAccountService.findById(id);
        if (facebookAccount && facebookAccount.facebook_id === idToken) {
            return facebookAccount?.user;
        }
        return null;
    }
    async validateGoogleAccount(id: string, idToken: string): Promise<any> {
        const googleAccount = await this.googleAccountService.findById(id);
        if (googleAccount && googleAccount.google_id === idToken) {
            return googleAccount?.user;
        }
        return null;
    }
    async compareId(id: string, storedIdHash: string) {//kiem tra 
        return await bcrypt.compare(id, storedIdHash);
    }
    async verifyGoogleIdToken(token: string) {
        const CLIENT_ID = process.env.CLIENT_ID;
        const client = new OAuth2Client(CLIENT_ID);

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        // const payload = ticket.getPayload();
        // const userid = payload['sub'];
    }
    async verifyFacebookIdToken(token: string) {

    }
    async loginFacebookAccount(user: User): Promise<UserLoginResponse> {
        const payload: UserToken = { id: user?._id, type: AccountType.FACEBOOK, roles: Role.USER };
        let responseObject = await this.generateResponseObject(payload);
        return { ...responseObject, user };
    }
    async loginGoogleAccount(user: User): Promise<UserLoginResponse> {
        const payload: UserToken = { id: user?._id, type: AccountType.GOOGLE, roles: Role.USER };
        let responseObject = await this.generateResponseObject(payload);
        return { ...responseObject, user };
    }
    async loginAdmin(admin: User): Promise<AdminLoginResponse> {
        const payload: UserToken = { id: admin?._id, type: AccountType.ADMIN, roles: Role.ADMIN };
        let responseObject = await this.generateResponseObject(payload);
        return { ...responseObject, admin };
    }
    async whoAmI(user: UserToken): Promise<User> {
        return await this.userService.findById(user.id);
    }
    async removeAccount(userToken: UserToken): Promise<User> {
        return await this.userService.softRemove(userToken?.id);
    }
}
