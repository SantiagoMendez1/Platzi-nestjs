import { Product } from 'src/entities/product.entity';
export declare class ProductsService {
    private conter;
    private products;
    findAll(): Product[];
    findOne(id: number): Product | {
        message: string;
    };
    create(payload: any): any;
    update(id: number, payload: any): {
        message: string;
        product: Product;
    } | {
        message: string;
        product?: undefined;
    };
    delete(id: number): {
        message: string;
    };
}
