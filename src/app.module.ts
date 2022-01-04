import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockUsersModule } from './models/block-users/block-users.module';
import { AdminsModule } from './models/admins/admins.module';
import { CategoriesModule } from './models/categories/categories.module';
import { GendersModule } from './models/genders/genders.module';
import { LanguagesModule } from './models/languages/languages.module';
import { ReportTypesModule } from './models/report-types/report-types.module';
import { ReportsModule } from './models/reports/reports.module';
import { ServicesModule } from './models/services/services.module';
import { UsersModule } from './models/users/users.module';
import { GraphQLModule } from '@nestjs/graphql'
import { UserTypesModule } from './models/user-types/user-types.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/**/*.graphql'],
    }),
    BlockUsersModule, AdminsModule, CategoriesModule, GendersModule, LanguagesModule, ReportTypesModule, ReportsModule, ServicesModule, UsersModule, UserTypesModule
  ],
})
export class AppModule { }
