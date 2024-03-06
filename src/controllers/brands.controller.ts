import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get('')
    getBrands() {
    return `['nike', 'adidas', 'reebok']`;
    }

    @Get(':id')
    getBrand(@Param('id') id: string) {
    return `brand with ${id}`;
    }
}
