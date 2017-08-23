import * as angular from 'angular'
// import './products.html'
import {ProductsService} from '../../services/productsService'

interface ProductsScope extends angular.IScope {
    products: any;
}

(() => {
    'use strict'
    angular.module('miniscule.views.products', [])
        .controller('productsController', [`$scope`, `productsService`, (
            $scope: ProductsScope,
            productsService: ProductsService
        ) => {
            $scope.products = productsService.getProducts()
        }])
})()
