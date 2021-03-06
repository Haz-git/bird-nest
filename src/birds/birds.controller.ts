import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBirdDto } from './ dto/birds.dto';
import { BirdService } from './birds.service';
import { Bird } from './birds.service';

@Controller('birds')
export class BirdsController {
    constructor(private birdService: BirdService) {}

    @Get()
    fetchBirds(): any {
        return this.birdService.getBirds();
    }

    @Post()
    async createBird(@Body() birdDto: CreateBirdDto) {
        this.birdService.create(birdDto);
        return 'This creates a bird according to DTO.';
        // We can configure this to whitelist our DTO properties, meaning that the request object will only contain stuff we've specified in our DTO. I think in default case this throws an error.
    }
}
