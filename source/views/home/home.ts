import * as angular from 'angular'
// import './home.scss'
// import './home.html'

interface IHomeScope {
  text: string;
}
angular.module(`miniscule.views.home`, [])
.controller(
  // tslint:disable-next-line no-empty
  `homeController`, ($scope: IHomeScope) => {}
)
