import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ItemsService } from './item.service';
import { Item } from './item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Item {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() body: { name: string; description?: string }): Item {
    return this.itemsService.create(body.name, body.description);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name: string; description?: string },
  ): Item {
    return this.itemsService.update(id, body.name, body.description);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): void {
    this.itemsService.remove(id);
  }
}
