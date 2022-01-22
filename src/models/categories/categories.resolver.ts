import { CategoriesDTO } from './categories.dto';
import { CategoriesService } from './categories.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class CategoriesResolver {
    constructor(
        private readonly categoriesService: CategoriesService
    ) { }
    @Query()
    async category(
        @Args('id') id: string
    ) {

    }
    @Query()
    async categories() {

    }
    @Mutation()
    async createCategory(
        @Args() { name, description }: CategoriesDTO
    ) {

    }
    @Mutation()
    async updateCategory(
        @Args('id') id: string,
        @Args() { name, description }: CategoriesDTO
    ) {

    }
    @Mutation()
    async deleteCategory(
        @Args('id') id: string
    ) {

    }
    @Mutation()
    async restoreCategory(
        @Args('id') id: string
    ) {

    }
}
