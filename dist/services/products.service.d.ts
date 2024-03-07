import { NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
export declare class ProductsService {
    private conter;
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(payload: CreateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: number;
        image: string;
        id: number;
    };
    update(id: number, payload: UpdateProductDto): NotFoundException | {
        message: boolean;
    };
    delete(id: number): true | NotFoundException;
}
