import { BlockUsersService } from './block-users.service';
import { Resolver, Query, Mutation } from '@nestjs/graphql';

@Resolver()
export class BlockUsersResolver {
    constructor(
        private blockUserService: BlockUsersService
    ) { }
    @Query()
    async blockUser() {

    }
    @Query()
    async blockUsers() {

    }
}
