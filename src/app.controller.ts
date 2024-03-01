import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hello world';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 100,
    @Query('brand') brand: string,
  ) {
    return `products, limit: ${limit} offset: ${offset} brand: ${brand}`;
  }
  @Get('products/filter')
  getProductFilter() {
    return `filtro aplicado al filtro`;
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`
  }

  @Get('categories/:id/products/:idproduct')
  getCategory(@Param('id') id: string, @Param('idproduct') idproduct: string) {
    return `product ${idproduct} and category ${id}`;
  }
}
