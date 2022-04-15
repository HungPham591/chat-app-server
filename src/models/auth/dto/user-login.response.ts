import { User } from './../../user/entities/user.entity';
import { Float } from '@nestjs/graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserLoginResponse {
    @Field(type => User)
    user?: User;

    @Field(type => String)
    access_token?: string;

    @Field(type => String)
    token_type?: string;

    @Field(type => Float)
    expires_in?: number;
}