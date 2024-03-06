"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.conter = 1;
        this.products = [
            {
                id: 1,
                name: 'product 1',
                description: 'desc',
                price: 123,
                stock: 23,
                image: '',
            },
        ];
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((item) => item.id == id);
        console.log(id);
        if (product) {
            return product;
        }
        else {
            return {
                message: 'product not found'
            };
        }
    }
    create(payload) {
        this.conter++;
        const newProduct = {
            id: this.conter,
            ...payload,
        };
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, payload) {
        let product_found = this.products.findIndex((item) => item.id == id);
        if (product_found) {
            this.products[product_found] = {
                ...this.findOne(id),
                ...payload,
            };
            return {
                message: 'product updated',
                product: this.products[product_found],
            };
        }
        else {
            return {
                message: 'product not found',
            };
        }
    }
    delete(id) {
        let product_found = this.products.findIndex((item) => item.id == id);
        if (product_found) {
            this.products.splice(product_found, 1);
            return {
                message: 'product deleted',
            };
        }
        else {
            return {
                message: 'product not found',
            };
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map