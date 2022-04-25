import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document } from "mongoose";
import { BaseEntity } from 'src/models/base/base.entity';
import { Report } from 'src/models/report/entities/report.entity';
import { Gender } from './../../../utils/Interface';
import { Post } from './../../post/entities/post.entity';
import { Question } from './../../question/entities/question.entity';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User extends BaseEntity {
	@Field(type => ID, { nullable: true })
	_id: string;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	name?: string;

	@Field(type => Int, { nullable: true })
	@Prop({ required: true, type: Number, enum: Gender })
	interested_in_gender?: Gender;

	@Field(type => Int, { nullable: true })
	@Prop({ required: true, type: Number, enum: Gender })
	gender?: Gender;

	@Field(type => [Report], { nullable: true })
	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }], required: true })
	reports_send?: string[];

	@Field(type => [Report], { nullable: true })
	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }], required: true })
	reports_receive?: string[];

	@Field(type => [User], { nullable: true })
	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], required: true })
	friends?: string[];

	@Field(type => [User], { nullable: true })
	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], required: true })
	friend_request_send?: string[];

	@Field(type => [User], { nullable: true })
	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], required: true })
	friend_request_receive?: string[];

	@Field(type => [User], { nullable: true })
	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], required: true })
	user_seen?: string[];

	@Field(type => [Post], { nullable: true })
	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
	posts?: string[];

	@Field(type => [Question], { nullable: true })
	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }] })
	questions?: string[];

	@Field(type => Int, { nullable: true })
	@Prop({ required: true, type: Number })
	birthday?: number;

	@Field(type => Boolean, { nullable: true })
	@Prop({ required: true, default: true, type: Boolean })
	active?: boolean;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	avatar?: string;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	locale?: string;

	@Field(type => Int, { nullable: true })
	@Prop({ required: true, default: 0, type: Number })
	golds?: number;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	bio?: string;

	@Field(type => [Float], { nullable: true })
	@Prop({ required: true, type: [Number] })
	coordinate?: number[];
}
export const UserSchema = SchemaFactory.createForClass(User);