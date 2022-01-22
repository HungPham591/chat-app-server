import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackTypesResolver } from './feedback-types.resolver';

describe('FeedbackTypesResolver', () => {
  let resolver: FeedbackTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedbackTypesResolver],
    }).compile();

    resolver = module.get<FeedbackTypesResolver>(FeedbackTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
