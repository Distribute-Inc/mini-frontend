import * as angular from 'angular'
// import {MainHeader} from './react-is-cool'
// import {react2angular} from 'react2angular'

import './main-header.html'
import './main-header.scss'

interface MainHeaderScope extends angular.IScope {
  headerText?: any
}

angular.module(`miniscule.components.main-header`, [])
.directive(`mainHeader`, () => (
  {
    controller: `mainHeaderController`,
    templateUrl: `main-header.html`,
    restrict: `E`,
    scope: {}
  }
))
.controller(
  `mainHeaderController`,
  [
    `$scope`,
    ($scope: MainHeaderScope) => {
      $scope.headerText = 'main header text'
    }
  ]
  // react2angular(MainHeader, `headerText`)
)
