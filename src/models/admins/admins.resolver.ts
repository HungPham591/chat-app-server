import { AdminsDTO } from './admins.dto';
import { AdminsService } from './admins.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class AdminsResolver {
    constructor(
        private readonly adminsService: AdminsService
    ) { }
    @Query()
    async admin(
        @Args('id') id: string
    ) {

    }
    @Query()
    async admins() {

    }
    @Query()
    async adminInfo() {

    }
    @Mutation()
    async login(@Args() { name, password }: AdminsDTO) {

    }
    @Mutation()
    async createAdmin(@Args() { name, password }: AdminsDTO) {

    }
    @Mutation()
    async updateAdmin(
        @Args('id') id: string,
        @Args('password') password: string
    ) {

    }
    @Mutation()
    async deleteAdmin(
        @Args('id') id: string
    ) {

    }
    @Mutation()
    async restoreAdmin(
        @Args('id') id: string
    ) {

    }
}
