import * as angular from 'angular'
import {MainHeader} from './react-is-cool'
// import {react2angular} from 'react2angular'

interface MainHeaderScope extends angular.IScope {
  headerText?: any;
  hello: string;
  test(): void;
}

angular.module(`miniscule.components.main-header`, [])
.directive(`mainHeader`, () => (
  {
    controller: `mainHeaderController`,
    templateUrl: `/source/components/main-header/main-header.html`,
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
      $scope.hello = 'hello'
      $scope.test = () => { console.log('test')}
    }
  ]
  // react2angular(MainHeader, `headerText`)
)
