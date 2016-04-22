import userEditControllerModule from "./user-edit.controller";
import template from './user-edit.template.html';

let mod = angular.module('userEditRouteModule', [userEditControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('edit', {
    url: '/edit',
    template: template,
    controller: 'userEditController as editctrl',
    resolve: {
    }
  });
}]);

export default mod = mod.name;
