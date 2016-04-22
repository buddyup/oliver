import userSettingsControllerModule from "./user-settings.controller";
import template from './user-settings.template.html';

let mod = angular.module('userSettingsRouteModule', [userSettingsControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('settings', {
    url: '/settings',
    template: template,
    controller: 'userSettingsController as settingsctrl',
    resolve: {
    }
  });
}]);

export default mod = mod.name;
