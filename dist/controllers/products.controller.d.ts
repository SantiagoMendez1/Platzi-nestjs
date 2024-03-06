export declare class ProductsController {
    getProducts(limit: number, offset: number, brand: string): {
        message: string;
    };
    getProductFilter(): {
        message: string;
    };
    getProduct(id: string): {
        message: string;
    };
    create(payload: any): {
        message: string;
        payload: any;
    };
    update(id: String, payload: any): {
        id: String;
        payload: any;
    };
    delete(id: String): String;
}
