import { LanguagesDTO } from './languages.dto';
import { LanguagesService } from './languages.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class LanguagesResolver {
    constructor(
        private readonly languagesService: LanguagesService
    ) { }
    @Query()
    language(
        @Args('id') id: string
    ) {

    }
    @Query()
    languages() {

    }
    @Mutation()
    createLanguage(
        @Args() { name }: LanguagesDTO
    ) {

    }
    @Mutation()
    updateLanguage(
        @Args('id') id: string,
        @Args() { name }: LanguagesDTO
    ) {

    }
    @Mutation()
    deleteLanguage(
        @Args('id') id: string
    ) {

    }
    @Mutation()
    restoreLanguage(
        @Args('id') id: string
    ) {

    }
}
