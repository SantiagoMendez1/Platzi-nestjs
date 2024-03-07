import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';


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
        const product = this.products.find((item) => item.id === id);
        console.log(id);

        if (!product) {
            throw new NotFoundException(`product with id ${id} not found`);
        }
        return product;
    }

    create(payload: CreateProductDto) {
        this.conter++;
        const newProduct = {
            id: this.conter,
            ...payload,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: UpdateProductDto) {
        const product_found = this.products.findIndex((item) => item.id === id);
        if (product_found === -1) {
            return new NotFoundException(`product with id ${id} not found`);
        } else {
            this.products[product_found] = {
                ...this.findOne(id),
                ...payload,
            };
            return {
                message: true,
            };
        }
    }

    delete(id: number) {
        const product_found = this.products.findIndex((item) => item.id === id);
        if (product_found === -1) {
            return new NotFoundException(`product with id ${id} not found`);
        } else {
            this.products.splice(product_found, 1);
            return true;
        }
    }
}
