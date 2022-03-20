import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsModule } from './models/admins/admins.module';
import { CategoriesModule } from './models/categories/categories.module';
import { FacebookAccountsModule } from './models/facebook-accounts/facebook-accounts.module';
import { FeedbackTypesModule } from './models/feedback-types/feedback-types.module';
import { FeedbackModule } from './models/feedbacks/feedbacks.module';
import { GendersModule } from './models/genders/genders.module';
import { GoogleAccountsModule } from './models/google-accounts/google-accounts.module';
import { LanguagesModule } from './models/languages/languages.module';
import { ReportTypesModule } from './models/report-types/report-types.module';
import { ReportsModule } from './models/reports/reports.module';
import { ServicesModule } from './models/services/services.module';
import { SuperAdminsModule } from './models/super-admins/super-admins.module';
import { UsersModule } from './models/users/users.module';
import { HttpErrorFilter } from './modules/http-error.module';
import { LoggingInterceptor } from './modules/logging.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRoot(),
		GraphQLModule.forRoot({
			typePaths: ['./**/**/*.graphql'],
		}),
		AdminsModule,
		CategoriesModule,
		GendersModule,
		LanguagesModule,
		ReportTypesModule,
		ReportsModule,
		ServicesModule,
		UsersModule,
		SuperAdminsModule,
		FacebookAccountsModule,
		GoogleAccountsModule,
		FeedbackModule,
		FeedbackTypesModule,
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
