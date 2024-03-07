import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(limit: number, offset: number, brand: string): import("../entities/product.entity").Product[];
    getProductFilter(): {
        message: string;
    };
    getProduct(id: number): import("../entities/product.entity").Product;
    create(payload: CreateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: number;
        image: string;
        id: number;
    };
    update(id: number, payload: UpdateProductDto): import("@nestjs/common").NotFoundException | {
        message: boolean;
    };
    delete(id: number): true | import("@nestjs/common").NotFoundException;
}
