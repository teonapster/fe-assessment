(function () {
  'use strict';

  function component() {

    function componentController() {
      var vm = this;

      vm.$onChanges = (changesObject) => {
        if (changesObject.category && !changesObject.category.currentValue) {
          vm.category = changesObject.category.currentValue;
        }
      }

      vm.$onInit = function () {

        /**
         * category
:
"general"
country
:
"au"
description
:
"Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more."
id
:
"abc-news-au"
language
:
"en"
name
:
"ABC News (AU)"
sortBysAvailable
:
["top"]
url
:
"http://www.abc.net.au/news"
         */
      }
      function init() {

      }
    }

    return {
      bindings: {
        category: "="
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
