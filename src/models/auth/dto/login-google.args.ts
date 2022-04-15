import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginGoogleArgs {
    @Field(type => String, { nullable: true })
    @IsMongoId()
    @IsNotEmpty()
    _id?: string;

    @Field(type => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    token_id?: string
}