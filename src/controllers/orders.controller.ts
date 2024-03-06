import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

    @Get('')
    getOrders(){
        return `list for all orders`
    }

    @Get(':id')
    getOrder(@Param('id') id:String){
        return `custormer with id: ${id}`
    }
}
