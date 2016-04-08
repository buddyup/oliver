let mod = angular.module('app.home.route', []);

mod.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl',
    c
  })

  $urlRouterProvider.otherwise('/home');

});

export default mod = mod.name;
