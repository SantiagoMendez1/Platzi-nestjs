import { Controller, Get, Param, Query, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService:ProductsService){}

    @Get('')
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 100,
        @Query('brand') brand: string,
    ) {
        return this.productsService.findAll()
    }

    @Get('filter')
    getProductFilter() {
        return {
            message: `filtro aplicado al filtro`,
        };
    }

    @Get(':id')
    getProduct(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    create(@Body() payload: any) {
        return this.productsService.create(payload)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return this.productsService.update(id, payload)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productsService.delete(id)
    }
}
