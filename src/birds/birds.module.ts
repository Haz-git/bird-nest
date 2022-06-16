import { Module } from '@nestjs/common';
import { BirdsController } from './birds.controller';
import { BirdService } from './birds.service';

@Module({
    controllers: [BirdsController],
    providers: [BirdService],
    exports: [BirdService],
})
export class BirdsModule {}
