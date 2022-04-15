import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Admin } from './../../admin/entities/admin.entity';

@ObjectType()
export class AdminLoginResponse {
    @Field(type => Admin)
    admin?: Admin;

    @Field(type => String)
    access_token?: string;

    @Field(type => String)
    token_type?: string;

    @Field(type => Float)
    expires_in?: number;
}