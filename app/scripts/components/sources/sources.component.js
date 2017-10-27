(function () {
  'use strict';

  function component() {

    function componentController(NewsApi) {
      var vm = this;

      /**
       * Pagination related variables
       */
      vm.pageSize = 6;
      vm.currentPage = 1;
      vm.totalSources = 0;


      vm.filterByName = () => {
        if (!vm.selectedName) {
          vm.filteredSources = vm.sources;
        } else {
          vm.filteredSources = _.filter(vm.sources, (source) => { return source.name.toLowerCase().indexOf(vm.selectedName.toLowerCase()) > -1 })
        }

        vm.pageChanged(1);
      }

      vm.filterByCategory = () => {

        //Revert if no selected category
        if (!vm.selectedCategory) {
          vm.filteredSources = vm.sources;
        } else {
          vm.filteredSources = _.filter(vm.sources, (source) => { return source.category === vm.selectedCategory })
        }

        vm.pageChanged(1);

      }

      vm.pageChanged = (page) => {
        vm.currentPage = page;
        const offset = (page - 1) * vm.pageSize;
        vm.paginatedSources = _.slice(vm.filteredSources, offset, offset + vm.pageSize);
      }

      vm.$onInit = function () {
        //We can use async /await also here
        NewsApi.sources().then((results) => {
          vm.sources = results.data.sources;
          vm.totalSources = vm.sources.length;
          vm.filteredSources = vm.sources;

          //Cache the category list
          vm.categories = _.chain(vm.sources)
            .uniqBy('category')
            .map('category')
            .value();

          //Keep first page initialy
          vm.pageChanged(1);
        });

      };
    }

    componentController.$inject = ['NewsApi'];

    return {
      bindings: {
      },
      controller: componentController,
      controllerAs: 'vm',
      templateUrl: './scripts/components/sources/sources.component.html'
    };
  }

  angular
    .module('interview1App')
    .component('sources', component());
}());
