import { Module } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { UserTypesResolver } from './user-types.resolver';

@Module({
  providers: [UserTypesService, UserTypesResolver]
})
export class UserTypesModule {}
