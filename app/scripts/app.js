'use strict';

/**
 * @ngdoc overview
 * @name codebuildApp
 * @description
 * # codebuildApp
 *
 * Main module of the application.
 */
angular
  .module('codebuildApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
