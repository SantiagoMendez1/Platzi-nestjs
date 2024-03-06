import { ProductsService } from 'src/services/products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(limit: number, offset: number, brand: string): import("../entities/product.entity").Product[];
    getProductFilter(): {
        message: string;
    };
    getProduct(id: number): import("../entities/product.entity").Product;
    create(payload: any): any;
    update(id: number, payload: any): import("@nestjs/common").NotFoundException | {
        message: boolean;
    };
    delete(id: number): true | import("@nestjs/common").NotFoundException;
}
