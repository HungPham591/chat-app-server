import { Module } from '@nestjs/common';
import { FeedbackTypesService } from './feedback-types.service';
import { FeedbackTypesResolver } from './feedback-types.resolver';

@Module({
  providers: [FeedbackTypesService, FeedbackTypesResolver]
})
export class FeedbackTypesModule {}
