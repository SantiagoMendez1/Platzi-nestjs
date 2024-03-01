import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getProducts(limit: number, offset: number, brand: string): string;
    getProductFilter(): string;
    getProduct(id: string): string;
    getCategory(id: string, idproduct: string): string;
}
