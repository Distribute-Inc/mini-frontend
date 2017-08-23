import * as angular from 'angular'
// import './products.html'
import {ProductsService} from '../../services/productsService'

interface IProductsScope extends angular.IScope {
  products: any
}

angular.module('miniscule.views.products', [])
.controller('productsController', [`$scope`, `productsService`, (
  $scope: IProductsScope,
  productsService: ProductsService
) => {
  $scope.products = productsService.getProducts()
}])
