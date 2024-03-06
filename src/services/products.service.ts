import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
    private conter = 1;
    private products: Product[] = [
        {
            id: 1,
            name: 'product 1',
            description: 'desc',
            price: 123,
            stock: 23,
            image: '',
        },
    ];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find((item) => item.id === id);
    }

    create(payload: any) {
        this.conter++;
        const newProduct = {
            id: this.conter,
            ...payload,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: any) {
        let product_found = this.products.findIndex((item) => item.id === id);
        if (product_found) {
            this.products[product_found] = payload;
            return {
                message: 'product updated',
                product: this.products[product_found],
            };
        } else {
            return {
                message: 'product not found',
            };
        }
    }

    delete(id: number) {
        let product_found = this.products.findIndex((item) => item.id === id);
        if (product_found) {
            this.products.splice(product_found, 1);
            return {
                message: 'product deleted',
            };
        } else {
            return {
                message: 'product not found',
            };
        }
    }
}
