import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserToken } from './../auth/entities/user-token.entity';
import { BaseResolver } from './../base/base.resolver';
import { UpdateGoogleAccountInput } from './dto/update-google-account.input';
import { GoogleAccount } from './entities/google-account.entity';
import { GoogleAccountService } from './google-account.service';

@Resolver(() => GoogleAccount)
export class GoogleAccountResolver extends BaseResolver {
  constructor(private readonly googleAccountService: GoogleAccountService) {
    super();
  }

  // @Mutation(() => GoogleAccount)
  // createGoogleAccount(@Args('createGoogleAccountInput') createGoogleAccountInput: CreateGoogleAccountInput) {
  //   return this.googleAccountService.create(createGoogleAccountInput);
  // }

  // @Query(() => [GoogleAccount], { name: 'googleAccount' })
  // findAll(@Args('getGoogleAccountArgs') getGoogleAccountArgs: GetGoogleAccountArgs) {
  //   return this.googleAccountService.findAll(getGoogleAccountArgs);
  // }

  // @Query(() => GoogleAccount, { name: 'googleAccount' })
  // findById(@Args('id', { type: () => String }) id: string) {
  //   return this.googleAccountService.findById(id);
  // }

  @Mutation(() => GoogleAccount)
  @UseGuards(JwtAuthGuard)
  updateGoogleAccount(@Args('updateGoogleAccountInput') updateGoogleAccountInput: UpdateGoogleAccountInput, @CurrentUser() user: UserToken) {
    return this.googleAccountService.update(updateGoogleAccountInput._id, updateGoogleAccountInput, user.id);
  }

  // @Mutation(() => GoogleAccount)
  // removeGoogleAccount(@Args('id', { type: () => String }) id: string) {
  //   return this.googleAccountService.remove(id);
  // }
}
