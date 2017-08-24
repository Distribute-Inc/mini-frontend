import * as angular from "angular"
import "angular-ui-router"
import {ProductsService} from "../../services/productsService"

// import './product-details.scss'
// import './product-details.html'

interface IProductDetailsScope extends angular.IScope {
  product: any
}

angular.module(
  `miniscule.views.product-details`,
  [
    `miniscule.services.productsService`
  ]
)
.controller(
  `productDetailsController`,
  [
    `$scope`,
    `$stateParams`,
    `productsService`,
    (
      $scope: IProductDetailsScope,
      $stateParams: angular.ui.IStateParamsService,
      productsService: ProductsService
    ) => {
      const id = parseInt($stateParams.productId, 10)
      $scope.product = productsService.getProductById(id)
    }
  ]
)
