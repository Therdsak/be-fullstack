/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.interface';

@Injectable()
export class ItemsService {
  private items: Item[] = [
    {
      id: 1,
      name: 'Dummy Item 1',
      description: 'This is the first dummy item',
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Dummy Item 2',
      description: 'This is the second dummy item',
      createdAt: new Date(),
    },
  ];

  private nextId = 3;

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    const item = this.items.find(item => item.id === id);
    if (!item) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    return item;
  }

  create(name: string, description?: string): Item {
    const newItem: Item = {
      id: this.nextId++,
      name,
      description,
      createdAt: new Date(),
    };
    this.items.push(newItem);
    return newItem;
  }
}