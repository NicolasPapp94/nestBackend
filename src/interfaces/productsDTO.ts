import { IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDTO {
  @IsNotEmpty({ message: `El nombre no puede ser nulo` })
  name: string;

  @IsNumber()
  price: number;
}
