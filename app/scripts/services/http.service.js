(function () {
    'use strict';

    angular
        .module('interview1App')
        .service('http', http);

    http.inject = ['$http'];

    function http($http) {
        var service = {
            get: get,
            post: post
        };

        return service;

        function get(params, endpoint) {
            return $http({
                method: 'GET',
                url: endpoint,
                params: params
            })
        }

        function post(params, endpoint) {
            return $http({
                method: 'POST',
                url: endpoint,
                data: $.param(params),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
        }
    }
})();
