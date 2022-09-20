import { Test, TestingModule } from '@nestjs/testing';
import { FrontPermissionsService } from './front-permissions.service';

describe('FrontPermissionsService', () => {
  let service: FrontPermissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrontPermissionsService],
    }).compile();

    service = module.get<FrontPermissionsService>(FrontPermissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
