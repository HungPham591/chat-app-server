import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AdminModule } from './models/admin/admin.module';
import { AuthModule } from './models/auth/auth.module';
import { CategoryModule } from './models/category/category.module';
import { FacebookAccountModule } from './models/facebook-account/facebook-account.module';
import { GoogleAccountModule } from './models/google-account/google-account.module';
import { PostModule } from './models/post/post.module';
import { QuestionModule } from './models/question/question.module';
import { ReportModule } from './models/report/report.module';
import { SocketGatewayModule } from './models/socket-gateway/socket-gateway.module';
import { UserModule } from './models/user/user.module';
import { HttpErrorFilter } from './modules/http-error.module';
import { LoggingInterceptor } from './modules/logging.module';


@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		MongooseModule.forRoot(process.env.MONGODB_URI),
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			driver: ApolloDriver,
			// context: ({ req }) => ({ headers: req.headers })
		}),
		AuthModule,
		AdminModule,
		FacebookAccountModule,
		GoogleAccountModule,
		PostModule,
		ReportModule,
		UserModule,
		CategoryModule,
		QuestionModule,
		SocketGatewayModule,
	],
	providers: [
		{
			provide: APP_FILTER,//dang ky bat loi va tra ve loi cho client
			useClass: HttpErrorFilter,
		},
		{
			provide: APP_INTERCEPTOR,//dang ky log ra loi cho toan bo
			useClass: LoggingInterceptor,
		},
	],
})
export class AppModule { }
