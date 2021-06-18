import { Injectable } from '@nestjs/common';
import { ProductsResponseDTO } from 'src/interfaces/products-responseDTO';
import { ProductDTO } from 'src/interfaces/productsDTO';

@Injectable()
export class ProductsService {


  async createProductService(product: ProductDTO): Promise<ProductsResponseDTO> {
    const productResponse = new ProductsResponseDTO();
    productResponse.price = product.price * 4
    return productResponse;
  }

}
