import { GendersDTO } from './genders.dto';
import { GendersService } from './genders.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class GendersResolver {
    constructor(
        private readonly gendersService: GendersService
    ) { }
    @Query()
    async gender(
        @Args('id') id: string
    ) {

    }
    @Query()
    async genders() {

    }
    @Mutation()
    async createGender(
        @Args() { name }: GendersDTO
    ) {

    }
    @Mutation()
    async updateGender(
        @Args('id') id: string,
        @Args() { name }: GendersDTO
    ) {

    }
    @Mutation()
    async deleteGender(
        @Args('id') id: string
    ) {

    }
    @Mutation()
    async restoreGender(
        @Args('id') id: string
    ) {

    }
}
