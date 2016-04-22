import classControllerModule from './class.controller';
import template from './class.template.html';

let mod = angular.module('classRouteModule', [classControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('class', {
    url: '/class',
    template: template,
    controller: 'classController'
  });
}]);

export default mod = mod.name;
