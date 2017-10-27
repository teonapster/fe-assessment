(function () {
    'use strict';




    function component() {

        function componentController(){
            var vm = this;

            vm.$onInit = function(){
              vm.welcomeText = vm.text || "Default about text";
            };
        }

        return {
            bindings: {
              text: "@"
            },
            controller: componentController,
            controllerAs: 'vm',
            templateUrl: './scripts/components/about/about.component.html'
        };
    }

       angular
        .module ('interview1App')
        .component ('about', component());
} ());
