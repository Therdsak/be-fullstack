/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common';
import { ItemsModule } from './item/item.module';

@Module({
  imports: [ItemsModule],
})
export class AppModule {}
