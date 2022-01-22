import { Test, TestingModule } from '@nestjs/testing';
import { GoogleAccountsResolver } from './google-accounts.resolver';

describe('GoogleAccountsResolver', () => {
  let resolver: GoogleAccountsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleAccountsResolver],
    }).compile();

    resolver = module.get<GoogleAccountsResolver>(GoogleAccountsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
