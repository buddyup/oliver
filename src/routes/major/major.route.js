import majorControllerModule from "./major.controller";
import template from './major.template.html';

let mod = angular.module('majorRouteModule', [majorControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('major', {
    url: '/major',
    template: template,
    controller: 'majorController as majorctrl',
    resolve: {
    }
  });
}]);

export default mod = mod.name;
