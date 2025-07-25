import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './item.controller';

describe('ItemController', () => {
  let controller: ItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
    }).compile();
    controller = module.get<ItemsController>(ItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
