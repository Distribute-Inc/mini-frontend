// const window = {document: {documentMode: undefined}, Node() {}}

import * as angular from 'angular'
import 'angular-ui-router'
import './services/productsService.ts'

import './components/main-header/main-header.ts'
import './components/main-header/main-header.scss'
import './components/main-header/main-header.html'

import './views/home/home.ts'
import './views/home/home.scss'
import './views/home/home.html'

import './views/product-details/product-details.ts'
import './views/product-details/product-details.scss'
import './views/product-details/product-details.html'

import './views/products/products.ts'
import './views/products/products.scss'
import './views/products/products.html'

interface IMainTemplateControllerScope extends angular.IScope {
    text: string;
}

angular.module(`miniscule`, [
  `ui.router`,
  `miniscule.views.home`,
  `miniscule.views.products`,
  `miniscule.views.product-details`,
  `miniscule.components.main-header`,
  `miniscule.services.productsService`
]).config([
  `$locationProvider`,
  `$stateProvider`,
  `$urlRouterProvider`,
  (
    $locationProvider: angular.ILocationProvider,
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider
  ) => {

  $locationProvider.html5Mode(true)

  // $urlRouterProvider.otherwise(() => `/home`)

  const defineState = (name: string, config: angular.ui.IState) => {
    $stateProvider.state(name, config)
  }

  defineState(`home`, {
    url: `/home`,
    // template: `<div>cool pants</div>`
    templateUrl: `/source/views/home/home.html`
    // templateUrl: `source/views/home.html`
    // templateUrl: `home`
  })

  defineState(`test`, {
    url: `/test`,
    template: `<div>test</div>`
  })

  defineState(`products`, {
    url: `/products`,
    templateUrl: `/source/views/products/products.html`,
    controller: `productsController`
  })

  defineState(`product-details`, {
    url: `/products/:productId`,
    templateUrl: `/source/views/product-details/product-details.html`,
    controller: `productDetailsController`
  })

  // states go here
}])
.controller(
  `mainTemplateController`,
  [
    `$scope`,
    ($scope: IMainTemplateControllerScope) => {
      $scope.text = `test main template`
    }
  ]
)
