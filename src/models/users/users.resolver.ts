import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';

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
        @Args('language') language: string,
        @Args('service') service: string
    ) {

    }
    @Query()
    async userInfo(
        @Context() id: string
    ) {

    }
    @Mutation()
    async addFriend(
        @Context() id: string,
        @Args('user') user: string
    ) {

    }
    @Mutation()
    async removeFriend(
        @Context() id: string,
        @Args('user') user: string
    ) {

    }
    @Mutation()
    async updateUser(
        @Context() id: string,
        @Args() { gender, interested_in_gender, languages, birthday, bio, image_link }: UsersDTO
    ) {

    }
    @Mutation()
    async deleteUser(
        @Context() id: string
    ) {

    }
    @Mutation()
    async restoreUser(
        @Context() id: string
    ) {

    }
}
