let mod = angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  });

  $urlRouterProvider.otherwise('/home');

});

export default mod = mod.name;
