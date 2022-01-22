import { Module } from '@nestjs/common';
import { SuperAdminsService } from './super-admins.service';
import { SuperAdminsResolver } from './super-admins.resolver';

@Module({
  providers: [SuperAdminsService, SuperAdminsResolver]
})
export class SuperAdminsModule {}
