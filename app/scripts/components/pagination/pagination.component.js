(function () {
  'use strict';

  // Usage: <pagination></pagination>
  //
  // Creates: pagination support with pageChanged callback
  //

  angular
    .module('interview1App')
    .component('pagination', {
      templateUrl: './scripts/components/pagination/pagination.component.html',
      controller: PaginationController,
      controllerAs: "$ctrl",
      bindings: {
        pageChanged: "&",
        currentPage: "=",
        totalRecords: "<",
        maxSize: "<",
        pageSize: "<"
      },
    });

  PaginationController.$inject = [];
  function PaginationController() {
    this.$onInit = function () {
      this.currentPage = 1;
      this.maxSize = this.maxSize || 7;

      if (!this.pageSize) {
        throw Error("Page size must be defined....");
      }
    };
    this.$onChanges = function (changesObj) { };

    this.changePage = function (decrease) {
      if (decrease && this.currentPage > 1) {
        this.currentPage--;
      } else if(!decrease){
        this.currentPage++;
      }

      this.pageChanged({ page: this.currentPage });
    }

    this.$onDestory = function () { };
  }
})();
