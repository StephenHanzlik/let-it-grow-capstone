(function() {
  'use strict'

  angular.module('app')
    .component('mainLanding', {
      templateUrl: "templates/main-landing.html",
      controller: mainLandingCtrl
    })


  mainLandingCtrl.$inject = ['$state', 'houseService'];

  function mainLandingCtrl($state, houseService) {
    const vm = this;
  }


}());
