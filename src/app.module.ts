import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdsController } from './birds/birds.controller';
import { BirdService } from './birds/birds.service';

@Module({
  imports: [],
  controllers: [AppController, BirdsController],
  providers: [AppService, BirdService],
})
export class AppModule {}
