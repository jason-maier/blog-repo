angular.module('blog', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/landing.html',
      // controller: 'landingCtrl'
    })
    .when('/linkedlists', {
      templateUrl: 'app/linkedlists.html',
      // controller: 'nomadCtrl'
    })
    .when('/stacksandqueues', {
      templateUrl: 'app/stacksandqueues.html',
      // controller: 'explorerCtrl'
    })
    .when('/about', {
      templateUrl: 'app/about.html',
      // controller: 'explorerCtrl'
    })
})
