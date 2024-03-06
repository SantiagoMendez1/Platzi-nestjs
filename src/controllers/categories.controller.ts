import { Controller, Get, Param, Query } from '@nestjs/common';
import { userInfo } from 'os';

@Controller('categories')
export class CategoriesController {
    @Get(':id/products/:idproduct')
    getCategory(@Param('id') id: string, @Param('idproduct') idproduct: string) {
    return `product ${idproduct} and category ${id}`;
    }
}