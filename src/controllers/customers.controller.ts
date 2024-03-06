import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    @Get('')
    getCostumers(){
        return `list of all custormers`
    }

    @Get(':id')
    getCustormer(@Param('id') id:String){
        return `customer with id: ${id}`
    }
}
