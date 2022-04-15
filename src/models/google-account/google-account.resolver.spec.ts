import { Test, TestingModule } from '@nestjs/testing';
import { GoogleAccountResolver } from './google-account.resolver';
import { GoogleAccountService } from './google-account.service';

describe('GoogleAccountResolver', () => {
  let resolver: GoogleAccountResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleAccountResolver, GoogleAccountService],
    }).compile();

    resolver = module.get<GoogleAccountResolver>(GoogleAccountResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
