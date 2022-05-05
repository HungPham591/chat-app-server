import { Test, TestingModule } from '@nestjs/testing';
import { ReportTypeResolver } from './report-type.resolver';
import { ReportTypeService } from './report-type.service';

describe('ReportTypeResolver', () => {
  let resolver: ReportTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportTypeResolver, ReportTypeService],
    }).compile();

    resolver = module.get<ReportTypeResolver>(ReportTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
