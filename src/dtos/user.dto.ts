import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty()
    name: String;
    
    @IsEmail()
    @IsNotEmpty()
    emai: String

    @IsNotEmpty()
    password: String
}

export class UpdateUserDto extends PartialType(CreateUserDto){}