import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document } from "mongoose";
import { BaseEntity } from 'src/models/base/base.entity';
import { User } from 'src/models/user/entities/user.entity';

export type FacebookAccountDocument = FacebookAccount & Document;

@Schema()
@ObjectType()
export class FacebookAccount extends BaseEntity {
	@Field(type => ID, { nullable: true })
	_id: string;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	facebook_id?: string;

	@Field(type => User, { nullable: true })
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	user?: string;
}
export const FacebookAccountSchema = SchemaFactory.createForClass(FacebookAccount);