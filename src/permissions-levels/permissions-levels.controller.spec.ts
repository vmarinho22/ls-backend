import { Test, TestingModule } from '@nestjs/testing';
import { PermissionsLevelsController } from './permissions-levels.controller';
import { PermissionsLevelsService } from './permissions-levels.service';

describe('PermissionsLevelsController', () => {
  let controller: PermissionsLevelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissionsLevelsController],
      providers: [PermissionsLevelsService],
    }).compile();

    controller = module.get<PermissionsLevelsController>(PermissionsLevelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
