import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document } from "mongoose";
import { BaseEntity } from "src/models/base/base.entity";
import { User } from "src/models/user/entities/user.entity";

export type ReportDocument = Report & Document;

@Schema()
@ObjectType()
export class Report extends BaseEntity {
	@Field(type => ID, { nullable: true })
	_id: string;

	@Field(type => User, { nullable: true })
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	user_send?: string;

	@Field(type => User, { nullable: true })
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	user_receive?: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);