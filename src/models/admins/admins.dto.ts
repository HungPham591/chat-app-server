import { IsNotEmpty, IsString, IsBoolean } from 'class-validator'

export class AdminsDTO {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    password: string;
}
export class AdminsRO {
    id?: string;
    name?: string;
    createdAt?: Date;
    deletedAt?: Date;
}