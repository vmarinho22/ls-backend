import { Test, TestingModule } from '@nestjs/testing';
import { FrontPermissionsController } from './front-permissions.controller';
import { FrontPermissionsService } from './front-permissions.service';

describe('FrontPermissionsController', () => {
  let controller: FrontPermissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrontPermissionsController],
      providers: [FrontPermissionsService],
    }).compile();

    controller = module.get<FrontPermissionsController>(FrontPermissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
