import userProfileControllerModule from "./user-profile.controller";
import template from './user-profile.template.html';

let mod = angular.module('userProfileRouteModule', [userProfileControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('user', {
    url: '/user',
    template: template,
    controller: 'userProfileController as upctrl',
    resolve: {
    }
  });
}]);

export default mod = mod.name;
