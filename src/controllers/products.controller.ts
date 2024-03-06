import { Controller, Get, Param, Query, Post, Body, Put, Delete, HttpCode, HttpStatus} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 100,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products, limit: ${limit} offset: ${offset} brand: ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `filtro aplicado al filtro`,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: string) {
    return {
      message: `product ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: String, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: String) {
    return id
  }
}
