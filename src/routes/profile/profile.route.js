import profileControllerModule from './profile.controller';
import template from './profile.template.html';

let mod = angular.module('profileRouteModule', [profileControllerModule]);

mod.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('profile', {
    url: '/profile',
    template: template,
    controller: 'profileController'
  });
});

export default mod = mod.name;
