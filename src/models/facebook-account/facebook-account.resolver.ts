import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserToken } from './../auth/entities/user-token.entity';
import { BaseResolver } from './../base/base.resolver';
import { UpdateFacebookAccountInput } from './dto/update-facebook-account.input';
import { FacebookAccount } from './entities/facebook-account.entity';
import { FacebookAccountService } from './facebook-account.service';

@Resolver(() => FacebookAccount)
export class FacebookAccountResolver extends BaseResolver {
  constructor(private readonly facebookAccountService: FacebookAccountService) {
    super();
  }

  // @Mutation(() => FacebookAccount)
  // createFacebookAccount(@Args('createFacebookAccountInput') createFacebookAccountInput: CreateFacebookAccountInput) {
  //   return this.facebookAccountService.create(createFacebookAccountInput);
  // }

  // @Query(() => [FacebookAccount], { name: 'facebookAccount' })
  // findAll(@Args('getFacebookAccountArgs') getFacebookAccountArgs: GetFacebookAccountArgs) {
  //   return this.facebookAccountService.findAll(getFacebookAccountArgs);
  // }

  // @Query(() => FacebookAccount, { name: 'facebookAccount' })
  // findById(@Args('id', { type: () => String }) id: string) {
  //   return this.facebookAccountService.findById(id);
  // }

  @Mutation(() => FacebookAccount)
  @UseGuards(JwtAuthGuard)
  updateFacebookAccount(@Args('updateFacebookAccountInput') updateFacebookAccountInput: UpdateFacebookAccountInput, @CurrentUser() user: UserToken) {
    return this.facebookAccountService.update(updateFacebookAccountInput._id, updateFacebookAccountInput, user.id);
  }

  // @Mutation(() => FacebookAccount)
  // removeFacebookAccount(@Args('id', { type: () => String }) id: string) {
  //   return this.facebookAccountService.remove(id);
  // }
}
