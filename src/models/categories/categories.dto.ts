import { IsNotEmpty, IsString } from 'class-validator';
import { UsersRO } from './../users/users.dto';

export class CategoriesDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    description: string;
}
export class CategoriesRO {
    id?: string;
    code?: number;
    name?: string;
    description?: string;
    users?: UsersRO[];
    createdAt?: Date;
    deletedAt?: Date;
}