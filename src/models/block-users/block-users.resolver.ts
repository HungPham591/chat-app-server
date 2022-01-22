import { BlockUsersDTO } from './block_users.dto';
import { BlockUsersService } from './block-users.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class BlockUsersResolver {
    constructor(
        private readonly blockUserService: BlockUsersService
    ) { }
    @Query()
    async blockUser(
        @Args('id') id: string
    ) {

    }
    @Query()
    async blockUsers() {

    }
    @Mutation()
    async createBlockUser(
        @Args() { user, report_type }: BlockUsersDTO
    ) {

    }
    @Mutation()
    async deleteBlockUser(
        @Args('id') id: string
    ) {

    }
}
