(function () {
  'use strict';

  function component() {

    function componentController() {
      var vm = this;

      vm.$onChanges = (changesObject) => {
        if (changesObject.source && !changesObject.source.currentValue) {
          vm.source = changesObject.source.currentValue;
        }
      }

      vm.$onInit = function () {
      }
    }

    return {
      bindings: {
        source: "<"
      },
      controller: componentController,
      controllerAs: 'vm',
      templateUrl: './scripts/components/single-category/single-category.component.html'
    }
  }

  angular
    .module('interview1App')
    .component('singleCategory', component());

}());
