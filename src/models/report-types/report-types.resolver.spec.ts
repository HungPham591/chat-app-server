import { Test, TestingModule } from '@nestjs/testing';
import { ReportTypesResolver } from './report-types.resolver';

describe('ReportTypesResolver', () => {
  let resolver: ReportTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportTypesResolver],
    }).compile();

    resolver = module.get<ReportTypesResolver>(ReportTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
