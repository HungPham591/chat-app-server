import { Admin, AdminSchema } from './entities/admin.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }])],
  providers: [AdminResolver, AdminService],
  exports: [AdminService],
})
export class AdminModule { }
