import { BaseService } from './../base/base.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryInput } from './dto/create-category.input';
import { GetCategoryArgs } from './dto/get-category.args';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category, CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoryService extends BaseService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>
  ) {
    super();
  }
  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    return await new this.categoryModel(createCategoryInput).save();
  }

  async findAll(getCategoryArgs: GetCategoryArgs): Promise<Category[]> {
    const condition = this.argsToCondition(getCategoryArgs);
    return await this.categoryModel.find(condition).lean().exec();
  }

  async findById(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id).lean().exec();
    if (!category) throw new HttpException(category, HttpStatus.NOT_FOUND);
    return category;
  }

  async update(id: string, updateCategoryInput: UpdateCategoryInput): Promise<Category> {
    return await this.categoryModel.findByIdAndUpdate(id, updateCategoryInput).exec();
  }

  async softRemove(id: string): Promise<Category> {
    return await this.categoryModel.findByIdAndDelete(id).exec();
  }
}
