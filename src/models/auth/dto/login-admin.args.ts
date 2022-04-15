import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginAdminArgs {
    @Field(type => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    name?: string;

    @Field(type => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    password?: string
}