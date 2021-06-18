import { Body, Controller, Post } from '@nestjs/common';
import { ProductsResponseDTO } from 'src/interfaces/products-responseDTO';
import { ProductDTO } from 'src/interfaces/productsDTO';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {

  constructor(private productService: ProductsService) { }

  @Post()
  createProduct(@Body() productDTO: ProductDTO): Promise<ProductsResponseDTO> {
    return this.productService.createProductService(productDTO);
  }
}
