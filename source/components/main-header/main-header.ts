import * as angular from 'angular'

interface MainHeaderScope extends angular.IScope {
    headerText: string;
}


angular.module('miniscule.components.main-header', [])
.directive('mainHeader', () => {
  return {
    controller: 'mainHeaderController',
    templateUrl: `/source/components/main-header/main-header.html`,
    restrict: `E`,
    scope: {}
  }
})
.controller(
  'mainHeaderController',
  [
    `$scope`,
    ($scope: MainHeaderScope) => {
        $scope.headerText = 'main header text'
    }
  ]
)
