import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { BaseEntity } from 'src/models/base/base.entity';

export type AdminDocument = Admin & Document;

@Schema()
@ObjectType()//de tao type trong
export class Admin extends BaseEntity {
	@Field(type => ID, { nullable: true })
	_id: string;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	name?: string;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	nick_name?: string;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	password?: string;
}
export const AdminSchema = SchemaFactory.createForClass(Admin);