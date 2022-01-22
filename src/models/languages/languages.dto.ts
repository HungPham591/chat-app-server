import { UsersRO } from './../users/users.dto';
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class LanguagesDTO {
    @IsNotEmpty()
    @IsString()
    name: string;
}
export interface LanguagesRO {
    id?: string;
    users?: UsersRO[];
    code?: number;
    name?: string;
    createdAt?: Date;
    deletedAt?: Date;
}