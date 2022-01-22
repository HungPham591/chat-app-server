import { Test, TestingModule } from '@nestjs/testing';
import { SuperAdminsResolver } from './super-admins.resolver';

describe('SuperAdminsResolver', () => {
  let resolver: SuperAdminsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperAdminsResolver],
    }).compile();

    resolver = module.get<SuperAdminsResolver>(SuperAdminsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
