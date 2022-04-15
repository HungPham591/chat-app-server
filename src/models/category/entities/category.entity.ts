import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from 'src/models/base/base.entity';

export type CategoryDocument = Category & Document;

@Schema()
@ObjectType()
export class Category extends BaseEntity {
	@Field(type => ID, { nullable: true })
	_id: string;

	@Field(type => String, { nullable: true })
	@Prop({ required: true, type: String })
	name?: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
