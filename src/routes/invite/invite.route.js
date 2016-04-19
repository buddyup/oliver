import inviteControllerModule from "./invite.controller";
import template from './invite.template.html';

let mod = angular.module('inviteRouteModule', [inviteControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('invite', {
    url: '/invite',
    template: template,
    controller: 'inviteController as invitectrl',
    resolve: {
    }
  });
}]);

export default mod = mod.name;
