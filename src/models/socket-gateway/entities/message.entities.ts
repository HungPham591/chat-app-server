import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class Message {
    @IsString()
    @IsNotEmpty()
    to: string;
    @IsString()
    @IsNotEmpty()
    from: string;
    @IsString()
    @IsNotEmpty()
    content: string;
    @IsInt()
    @IsNotEmpty()
    create_at: number;
}