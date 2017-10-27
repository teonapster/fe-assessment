(function () {
  'use strict';

  function component() {

    function componentController(NewsApi) {
      var vm = this;

      vm.$onInit = function () {
        //We can use async /await also here
        NewsApi.categories().then((results) => {
          vm.categories = results.data.sources;
        });

      };
    }

    componentController.$inject = ['NewsApi'];

    return {
      bindings: {
      },
      controller: componentController,
      controllerAs: 'vm',
      templateUrl: './scripts/components/categories/categories.component.html'
    };
  }

  angular
    .module('interview1App')
    .component('categories', component());
}());
