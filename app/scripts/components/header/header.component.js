(function () {
    'use strict';

    function component() {

        function headerComponent(){
            var vm = this;

            vm.$onInit = function(){

            };
        }

        return {
            bindings: {

            },
            controller: headerComponent,
            controllerAs: 'vm',
            templateUrl: './scripts/components/header/header.component.html'
        };
    }

       angular
        .module ('interview1App')
        .component ('header', component());
} ());
