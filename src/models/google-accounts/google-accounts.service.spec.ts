import { Test, TestingModule } from '@nestjs/testing';
import { GoogleAccountsService } from './google-accounts.service';

describe('GoogleAccountsService', () => {
  let service: GoogleAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleAccountsService],
    }).compile();

    service = module.get<GoogleAccountsService>(GoogleAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
