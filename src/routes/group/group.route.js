import groupControllerModule from './group.controller';
import template from './group.template.html';

let mod = angular.module('groupRouteModule', [groupControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('group', {
    url: '/group',
    template: template,
    controller: 'groupController'
  });
}]);

export default mod = mod.name;
