import { UsersRO } from './../users/users.dto';
import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CategoriesDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    description: string;
}
export interface CategoriesRO {
    id?: string;
    code?: number;
    name?: string;
    description?: string;
    users?: UsersRO[];
    createdAt?: Date;
    deletedAt?: Date;
}