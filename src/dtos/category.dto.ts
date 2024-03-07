import { IsString, IsNotEmpty, isString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: String;

    @IsString()
    description: String;
}

export class UpdateCategoryBrand extends PartialType(CreateCategoryDto){}