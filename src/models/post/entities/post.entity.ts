import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document } from "mongoose";
import { BaseEntity } from 'src/models/base/base.entity';
import { User } from 'src/models/user/entities/user.entity';
import { Question } from './../../question/entities/question.entity';

export type PostDocument = Post & Document;

@Schema()
@ObjectType()
export class Post extends BaseEntity {
	@Field(type => ID, { nullable: true })
	_id: string;

	@Field(type => User, { nullable: true })
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	user?: string;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	content?: string;

	@Field(type => Question, { nullable: true })
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true })
	question?: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);