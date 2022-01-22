import { UsersRO } from './../users/users.dto';
import { IsNotEmpty, IsInt, IsString, IsNumber } from 'class-validator';

export class ServicesDTO {
    @IsNotEmpty()
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsString()
    description: string;
    @IsNumber()
    price: number;
}
export interface ServicesRO {
    id?: string;
    users?: UsersRO[];
    code?: number;
    title?: string;
    description?: string;
    price?: number;
    createdAt?: Date;
    deletedAt?: Date;
}