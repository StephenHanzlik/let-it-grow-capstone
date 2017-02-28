(function() {
  'use strict'

  angular.module('app')
    .component('mainLanding', {
      controller: function($state, houseService) {
        const vm = this

        // vm.$onInit = function() {
        //   vm.houses = houseService.houses
        // }
        //
        // vm.addHouse = function() {
        //   houseService.addHouse(vm.house)
        //   $state.go('show-house', { id: vm.house.id })
        // }
      },
      templateUrl: "../templates/main-landing.html"
    })

}());
