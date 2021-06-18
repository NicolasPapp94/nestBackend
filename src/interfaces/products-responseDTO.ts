import { IsNumber } from "class-validator";

export class ProductsResponseDTO {
  @IsNumber()
  price: number;

}
