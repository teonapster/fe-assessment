'use strict';

/**
 * @ngdoc overview
 * @name interview1App
 * @description
 * # interview1App
 *
 * Main module of the application.
 */
angular
  .module('interview1App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<categories></categories>',
      })
      .when('/articles', {
        template: '<articles></articles>'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
