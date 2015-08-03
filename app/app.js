'use strict';

angular
  .module('myApp', ['ngRoute'])
  .config([ '$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'template/home.html',
        controller: 'HomeCtrl',
      })
      .when('/about', {
        templateUrl: 'template/about.html',
        controller: 'AboutCtrl',
      })
      .when('/contact', {
        templateUrl: 'template/contact.html',
        controller: 'ContactCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
