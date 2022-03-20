import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UsersRO } from './../users/users.dto';

export class FacebookAccountsDTO {
    @IsString()
    @IsNotEmpty()
    facebook_id: string;
    @IsUUID()
    user: string;
}
export class FacebookAccountsRO {
    id?: string;
    facebook_id?: string;
    user?: UsersRO;
    createdAt?: Date;
    deletedAt?: Date;
}