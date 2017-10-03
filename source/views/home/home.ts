import * as angular from 'angular'
// import './home.scss'
// import './home.html'

interface IHomeScope {
  text: string;
  hello: string;
}
angular.module(`miniscule.views.home`, ['helloReact'])
.controller(
  // tslint:disable-next-line no-empty
  `homeController`, ($scope: IHomeScope) => {
    debugger
    // $scope.hello = 'hello'
  }
)
