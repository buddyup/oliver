import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import studentsControllerModule from './students.controller';
import template from './students.template.html';

let mod = angular.module('studentsCardRouteModule', [studentsControllerModule, buddyRecommendationServiceModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('students', {
    url: '/students',
    template: template,
    controller: 'studentsController',
    resolve: {
        buddyDetail: ['buddyRecommendationService', function (buddyRecommendationService) {
            return buddyRecommendationService.fetch();
        }]
    }
  })
  // not using a nested students here because then the resolve is executed twice and I want to use the same controller
  // for the time being
  .state('students_detail', {
    url: '/students/:student_id',
    template: template,
    controller: 'studentsController',
    resolve: {
        buddyDetail: ['$stateParams', 'buddyRecommendationService', function ($stateParams, buddyRecommendationService) {
            return buddyRecommendationService.fetch($stateParams.student_id);
        }]
    }
  });
}]);

export default mod = mod.name;
