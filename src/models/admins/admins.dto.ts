import { IsNotEmpty, IsString, IsBoolean } from 'class-validator'

export class AdminsDTO {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsBoolean()
    role: boolean;
}
export interface AdminsRO {
    id?: string;
    name?: string;
    password?: string;
    role?: boolean;
    created?: Date;
}