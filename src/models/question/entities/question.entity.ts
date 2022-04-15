import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { BaseEntity } from 'src/models/base/base.entity';
import { Category } from 'src/models/category/entities/category.entity';
import { User } from './../../user/entities/user.entity';

export type QuestionDocument = Question & Document;

@Schema()
@ObjectType()
export class Question extends BaseEntity {
  @Field(type => ID, { nullable: true })
  _id: string;

  @Field(type => User, { nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user?: string;

  @Field(type => Category, { nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true })
  category?: string;

  @Field(type => String, { nullable: true })
  @Prop({ required: true, type: String })
  content?: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);