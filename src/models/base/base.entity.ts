import { Field, Float, ObjectType } from "@nestjs/graphql";
import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
@ObjectType()
export class BaseEntity {
    @Field(type => Float, { nullable: true })
    @Prop({ type: Number, default: Date.now() })
    created_at?: number;
}