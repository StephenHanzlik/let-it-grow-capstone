(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'loginPage',
        url: '/',
        component: 'login',
      })
      .state({
        name: 'signUp',
        url: '/signup',
        component: 'signUp',
      })
      .state({
        name: 'new-house',
        url: '/houses/new',
        component: 'houseNew',
      })
      .state({
        name: 'show-house',
        url: '/houses/:id',
        component: 'houseShow',
      })
  }

}());
