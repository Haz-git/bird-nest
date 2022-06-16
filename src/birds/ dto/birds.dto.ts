import { IsNumber, IsString } from 'class-validator';
export class CreateBirdDto {
    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    breed: string;
}
