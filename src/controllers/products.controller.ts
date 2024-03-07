import { Controller, Get, Param, Query, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @Get('')
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 100,
        @Query('brand') brand: string,
    ) {
        return this.productsService.findAll();
    }

    @Get('filter')
    getProductFilter() {
        return {
            message: `filtro aplicado al filtro`,
        };
    }

    @Get(':id')
    getProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
        return this.productsService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateProductDto,
    ) {
        return this.productsService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.delete(id);
    }
}
