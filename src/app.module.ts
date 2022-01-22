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
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpErrorFilter } from './modules/http-error.module';
import { LoggingInterceptor } from './modules/logging.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './models/posts/posts.module';
import { SuperAdminsModule } from './models/super-admins/super-admins.module';
import { FacebookAccountsModule } from './models/facebook-accounts/facebook-accounts.module';
import { GoogleAccountsModule } from './models/google-accounts/google-accounts.module';
import { FeedbackModule } from './models/feedback/feedback.module';
import { FeedbackTypesModule } from './models/feedback-types/feedback-types.module';
import { ProfilePicturesModule } from './models/profile-pictures/profile-pictures.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRoot(),
		MongooseModule.forRoot(process.env.MONGODB_URI),
		GraphQLModule.forRoot({
			typePaths: ['./**/**/*.graphql'],
		}),
		BlockUsersModule, AdminsModule, CategoriesModule, GendersModule, LanguagesModule, ReportTypesModule, ReportsModule, ServicesModule, UsersModule, UserTypesModule, PostsModule, SuperAdminsModule, FacebookAccountsModule, GoogleAccountsModule, FeedbackModule, FeedbackTypesModule, ProfilePicturesModule
	],
	providers: [
		{
			provide: APP_FILTER,
			useClass: HttpErrorFilter,
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: LoggingInterceptor,
		},
	],
})
export class AppModule { }
