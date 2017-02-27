(function() {
  'use strict'

  angular.module('app')
    .component('mainLanding2', {
      controller: function($stateParams, houseService) {
        const vm = this

        vm.$onInit = function() {
          vm.house = houseService.findById($stateParams.id)
        }

      },
      templateUrl: "templates/main-landing.html"
    })

}());
