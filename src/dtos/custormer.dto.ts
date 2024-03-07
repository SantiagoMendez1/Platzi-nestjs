import { PartialType } from "@nestjs/mapped-types"
import {IsNotEmpty, IsString } from "class-validator"


export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    name: String
}

export class UpdateCategoryDto extends PartialType(CreateCustomerDto){}