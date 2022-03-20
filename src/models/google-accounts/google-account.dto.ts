import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UsersRO } from './../users/users.dto';

export class GoogleAccountsDTO {
    @IsString()
    @IsNotEmpty()
    google_id: string;
    @IsUUID()
    user: string;
}
export class GoogleAccountsRO {
    id?: string;
    google_id?: string;
    user?: UsersRO;
    createdAt?: Date;
    deletedAt?: Date;
}