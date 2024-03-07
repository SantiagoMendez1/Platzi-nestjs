import { IsString, IsNotEmpty } from "class-validator"
import { PartialType } from "@nestjs/mapped-types"

export class CreateBrandDto {
    @IsString()
    @IsNotEmpty()
    readonly name:String
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
