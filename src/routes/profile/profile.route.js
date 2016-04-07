let mod = angular.module('app.profile.route', []);

mod.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

});

export default mod = mod.name;
