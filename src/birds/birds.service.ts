import { Injectable } from '@nestjs/common';

export interface Bird {
    name: string;
    age: number;
    breed: string;
}

@Injectable()
export class BirdService {
    private readonly birds: Bird[] = [];

    create(bird: Bird) {
        this.birds.push(bird);
    }

    getBirds(): Bird[] {
        return this.birds;
    }
}
