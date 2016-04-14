import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import studentsListControllerModule from './students-list.controller';
import template from './students-list.template.html';

let mod = angular.module('studentsListRouteModule', [studentsListControllerModule, buddyRecommendationServiceModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('students-list', {
    url: '/students-list',
    template: template,
    controller: 'studentsListController as studentlistctrl',
    resolve: {
        buddyDetail: ['buddyRecommendationService', function (buddyRecommendationService) {
            return buddyRecommendationService.fetch();
        }]
    }
  });
}]);

export default mod = mod.name;
