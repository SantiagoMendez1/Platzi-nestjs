import { ProductsService } from 'src/services/products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(limit: number, offset: number, brand: string): import("../entities/product.entity").Product[];
    getProductFilter(): {
        message: string;
    };
    getProduct(id: number): import("../entities/product.entity").Product | {
        message: string;
    };
    create(payload: any): any;
    update(id: number, payload: any): {
        message: string;
        product: import("../entities/product.entity").Product;
    } | {
        message: string;
        product?: undefined;
    };
    delete(id: number): {
        message: string;
    };
}
