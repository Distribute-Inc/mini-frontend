import * as angular from 'angular'
// import './home.scss'
// import './home.html'

interface HomeScope {
    text: string;
}
(() => {
    'use strict'

    angular.module('miniscule.views.home', [])
        .controller('homeController', ($scope: HomeScope) => {
        })
})()
