import { RolesGuard } from './../auth/guards/roles.guard';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { Role } from './../../utils/Interface';
import { BaseResolver } from './../base/base.resolver';
import { GetCategoryArgs } from './dto/get-category.args';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Constants } from 'src/constants/Constants';
import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Category)//tao ra type trong graphql
export class CategoryResolver extends BaseResolver {
  constructor(private readonly categoryService: CategoryService) {
    super();
  }

  @Mutation(() => Category)
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [Category])
  findAllCategory(@Args('getCategoryArgs') getCategoryArgs: GetCategoryArgs) {
    return this.categoryService.findAll(getCategoryArgs);
  }

  @Query(() => Category)
  findCategoryById(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.findById(id);
  }

  @Mutation(() => Category)
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
    return this.categoryService.update(updateCategoryInput._id, updateCategoryInput);
  }

  @Mutation(() => Category)
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  softRemoveCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.softRemove(id);
  }
}
