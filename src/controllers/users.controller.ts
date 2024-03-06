import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get('')
    getUsers(){
        return `list of all customers`
    }

    @Get(':id')
    getUser(@Param('id') id:String){
        return `Customer with id; ${id}`
    }
}
