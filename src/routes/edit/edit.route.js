import editControllerModule from "./edit.controller";
import template from './edit.template.html';

let mod = angular.module('editRouteModule', [editControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('edit', {
    url: '/edit',
    template: template,
    controller: 'editController as editctrl',
    resolve: {
    }
  });
}]);

export default mod = mod.name;