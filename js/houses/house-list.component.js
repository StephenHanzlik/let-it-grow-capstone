(function() {
  'use strict'

  angular.module('app')
    .component('login', {
      controller: function(houseService) {
        const vm = this

        vm.$onInit = function() {
          vm.houses = houseService.houses
        }
      },
      templateUrl: "templates/login.html"
    });

}());
