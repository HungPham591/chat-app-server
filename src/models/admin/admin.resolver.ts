import { BaseService } from './../base/base.service';
import { GetAdminArgs } from './dto/get-admin.args';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { Constants } from 'src/constants/Constants';

@Resolver(() => Admin)
export class AdminResolver extends BaseService {
  constructor(private readonly adminService: AdminService) {
    super();
  }

  // @Mutation(() => Admin)
  // createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
  //   return this.adminService.create(createAdminInput);
  // }

  // @Query(() => [Admin], { name: 'admin' })
  // findAll(@Args('getAdminArgs') getAdminArgs: GetAdminArgs) {
  //   return this.adminService.findAll(getAdminArgs);
  // }

  // @Query(() => Admin, { name: 'admin' })
  // findById(@Args('id', { type: () => String }) id: string) {
  //   return this.adminService.findById(id);
  // }

  // @Mutation(() => Admin)
  // updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
  //   return this.adminService.update(updateAdminInput._id, updateAdminInput);
  // }

  // @Mutation(() => Admin)
  // removeAdmin(@Args('id', { type: () => String }) id: string) {
  //   return this.adminService.remove(id);
  // }
}
