import { Controller, Get } from '@nestjs/common';
import { BirdService } from './birds.service';

@Controller('birds')
export class BirdsController {
  constructor(private birdService: BirdService) {}

  @Get()
  fetchBirds(): string {
    return this.birdService.getBirds();
  }
}
