import * as angular from 'angular'
import * as _ from 'lodash'
console.log(`hey lodash`, _)

export class ProductsService {
    private products = [
        {
            id: 1,
            name: 'test product 1',
            description: 'a test product',
            price: 19.99,
            brand: 'TestBrand'
        },
        {
            id: 2,
            name: 'test product 2',
            description: 'another test product',
            price: 42.00,
            brand: 'testBrand'
        }
    ]

    getProducts () {
        return this.products
    }

    getProductById (id: number) {
        return _.find(this.products, product => product.id === id)
    }
}

(() => {
    'use strict'
    angular.module('miniscule.services.productsService', [])
        .factory('productsService', () => {
            return new ProductsService()
        })
})()
