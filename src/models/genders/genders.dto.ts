import { UsersRO } from './../users/users.dto';
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class GendersDTO {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsInt()
    code: number;
}
export interface GendersRO {
    id?: string;
    name?: string;
    code?: number;
    users_gender?: UsersRO[];
    users_interested_in_gender?: UsersRO[];
    created?: Date;
    deleteAt?: Date;
}