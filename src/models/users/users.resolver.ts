import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService
    ) { }
    @Query()
    async user(
        @Args('id') id: string
    ) {

    }
    @Query()
    async users(
        @Args('page') page: number,
        @Args('gender') gender: string,
        @Args('interested_in_gender') interested_in_gender: string,
        @Args('category') category: string,
        @Args('language') language: string,
        @Args('service') service: string
    ) {

    }
    @Query()
    async userInfo() {

    }
    @Mutation()
    async register(
        @Args() { interested_in_gender, gender, categories, languages, social_code, birthday, status, image_link }: UsersDTO
    ) {

    }
    @Mutation()
    async login(
        @Args('social_code') social_code: string
    ) {

    }
    @Mutation()
    async logout() {

    }
    @Mutation()
    async updateUser(
        @Args('id') id: string,
        @Args() { gender, interested_in_gender, categories, languages, birthday, status, image_link }: UsersDTO
    ) {

    }
    @Mutation()
    async deleteUser() {

    }
    @Mutation()
    async restoreUser() {

    }
}
