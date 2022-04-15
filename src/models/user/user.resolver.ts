import { UserToken } from './../auth/entities/user-token.entity';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { BaseResolver } from './../base/base.resolver';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { GetUserArgs } from './dto/get-user.args';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from 'src/utils/Interface';
import { RolesGuard } from '../auth/guards/roles.guard';

@Resolver(() => User)
export class UserResolver extends BaseResolver {
  constructor(private readonly userService: UserService) {
    super();
  }

  // @Mutation(() => User)
  // createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
  //   return this.userService.create(createUserInput);
  // }

  @Query(() => [User])
  async findAllUser(@Args('getUserArgs') getUserArgs: GetUserArgs) {
    return this.userService.findAll(getUserArgs);
  }

  @Query(() => User)
  async findUserById(@Args('id', { type: () => String }) id: string) {
    return this.userService.findById(id);
  }

  @Query(() => User)
  async findOneUserWithPostAndQuestion(@Args('id', { type: () => String }) id: string) {
    return this.userService.findById(id);
  }

  @Query(() => User)
  async findOneUserWithAll(@Args('id', { type: () => String }) id: string) {
    return this.userService.findById(id);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput, @CurrentUser() user: UserToken) {
    return this.userService.update(user.id, updateUserInput);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async sendFriendRequest(@CurrentUser() idUserSend: string, @Args('idUserReceive') idUserReceive: string) {
    const [userSend, userReceive] = await Promise.all([
      this.userService.addFriendRequestSend(idUserSend, idUserReceive),
      this.userService.addFriendRequestReceive(idUserSend, idUserReceive)
    ]);
    this.userService.sendFriendRequestNotification(idUserSend, idUserReceive);
    return userSend;
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async friendRequestAccept(@CurrentUser() idUserSend: string, @Args('idUserReceive') idUserReceive: string) {
    const [userSend, userReceive] = await Promise.all([
      this.userService.addFriend(idUserSend, idUserReceive),
      this.userService.addFriend(idUserReceive, idUserSend)
    ]);
    this.userService.sendFriendRequestAcceptNotification(idUserSend, idUserReceive);
    return userSend;
  }

  @Mutation(() => User)
  async removeFriend(@CurrentUser() idUserSend: string, @Args('idUserReceive') idUserReceive: string) {
    const [userSend, userReceive] = await Promise.all([
      this.userService.removeFriend(idUserSend, idUserReceive),
      this.userService.removeFriend(idUserReceive, idUserSend)
    ]);
    return userSend;
  }

  @Mutation(() => User)
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @UseGuards(RolesGuard)
  async softRemoveUser(@Args('id', { type: () => Int }) id: string) {
    return this.userService.softRemove(id);
  }
}
