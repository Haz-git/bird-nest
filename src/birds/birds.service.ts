import { Injectable } from '@nestjs/common';

@Injectable()
export class BirdService {
  getBirds(): string {
    return 'Fetching all birds..';
  }
}
