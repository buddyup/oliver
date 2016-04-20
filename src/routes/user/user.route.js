import userControllerModule from "./user.controller";
import template from './user.template.html';

let mod = angular.module('userRouteModule', [userControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('user', {
    url: '/user',
    template: template,
    controller: 'userController as userctrl',
    resolve: {
    }
  });
}]);

export default mod = mod.name;
