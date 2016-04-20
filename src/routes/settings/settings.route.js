import settingsControllerModule from "./settings.controller";
import template from './settings.template.html';

let mod = angular.module('settingsRouteModule', [settingsControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('settings', {
    url: '/settings',
    template: template,
    controller: 'settingsController as settingsctrl',
    resolve: {
    }
  });
}]);

export default mod = mod.name;