angular.module('blog', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/landing.html',
    })
    .when('/home', {
      templateUrl: 'app/landing.html',
    })
    .when('/linkedlists', {
      templateUrl: 'app/linkedlists.html',
    })
    .when('/stacksandqueues', {
      templateUrl: 'app/stacksandqueues.html',
    })
    .when('/treesandgraphs', {
      templateUrl: 'app/treesandgraphs.html',
    })
    .when('/about', {
      templateUrl: 'app/about.html',
    })
})
