import * as angular from 'angular'
// import './product-details.scss'
// import './product-details.html'

import {ProductsService} from '../../services/productsService'

interface ProductDetailsScope extends angular.IScope {
    product: any
}
(() => {
    'use strict'
    angular.module('miniscule.views.product-details', [
        'miniscule.services.productsService'
    ])
        .controller('productDetailsController',
        [
          `$scope`,
          `$stateParams`,
          `productsService`,
          (
              $scope: ProductDetailsScope,
              $stateParams: angular.ui.IStateParamsService,
              productsService: ProductsService
          ) => {
              const id = parseInt($stateParams['productId'])
              $scope.product = productsService.getProductById(id)
          }
        ])
})()
