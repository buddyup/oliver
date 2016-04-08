import homeControllerModule from './home.controller';
import template from './home.template.html';

let mod = angular.module('app.home.route', [homeControllerModule]);

mod.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    template: template,
    controller: 'homeController',
    // controllerAs: 'ctrl',  // until we test the $scope.slider works
  })

  $urlRouterProvider.otherwise('/home');

});

export default mod = mod.name;
