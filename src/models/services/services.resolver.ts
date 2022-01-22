import { ServicesDTO } from './services.dto';
import { ServicesService } from './services.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class ServicesResolver {
    constructor(
        private readonly servicesService: ServicesService
    ) { }
    @Query()
    async service(
        @Args('id') id: string
    ) {

    }
    @Query()
    async services() {

    }
    @Mutation()
    async createService(
        @Args() { title, description, price }: ServicesDTO
    ) {

    }
    @Mutation()
    async updateService(
        @Args('id') id: string,
        @Args() { title, description, price }: ServicesDTO
    ) {

    }
    @Mutation()
    async deleteService(
        @Args('id') id: string
    ) {

    }
    @Mutation()
    async restoreService(
        @Args('id') id: string
    ) {

    }
}
