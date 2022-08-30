import { Test, TestingModule } from '@nestjs/testing';
import { PermissionsLevelsService } from './permissions-levels.service';

describe('PermissionsLevelsService', () => {
  let service: PermissionsLevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionsLevelsService],
    }).compile();

    service = module.get<PermissionsLevelsService>(PermissionsLevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
