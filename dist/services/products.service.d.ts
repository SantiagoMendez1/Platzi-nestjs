import { NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
export declare class ProductsService {
    private conter;
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(payload: any): any;
    update(id: number, payload: any): NotFoundException | {
        message: boolean;
    };
    delete(id: number): true | NotFoundException;
}
