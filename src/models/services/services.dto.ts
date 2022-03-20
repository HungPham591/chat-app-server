import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UsersRO } from './../users/users.dto';

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