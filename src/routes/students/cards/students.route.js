import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import studentsControllerModule from './students.controller';
import template from './students.template.html';
import map from "lodash/map";
import sortBy from "lodash/sortBy";

let mod = angular.module('studentsCardRouteModule', [studentsControllerModule, buddyRecommendationServiceModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('students', {
    url: '/students',
    template: template,
    controller: 'studentsController',
    params: {
      orderBy: 'recommendationRanking'  // optional param, here it's kept out of the url
    },
    resolve: {
        studentIds: ['buddyRecommendationService', '$stateParams', function (buddyRecommendationService, $stateParams) {
            return buddyRecommendationService.fetch()
            .then(() => {
              // Note (Aleck): I timed the map(sortBy(...)) with 500 students and it averaged between 6 and 10 ms.
              // Todo: consider moving this sort into the service as filtering will be coming down the pipe.
              return map(sortBy(buddyRecommendationService.students, $stateParams.orderBy), '$id');
            });
        }],
        buddyDetailIndex: ['buddyRecommendationService', '$q', function (buddyRecommendationService, $q) {
            return $q.when();
        }]
    }
  })
  // not using a nested students here because then the resolve is executed twice and I want to use the same controller
  // for the time being
  .state('students_detail', {
    url: '/students/:student_id',
    template: template,
    controller: 'studentsController',
    params: {
      orderBy: 'recommendationRanking'
    },
    resolve: {
        studentIds: ['buddyRecommendationService', '$stateParams', function (buddyRecommendationService, $stateParams) {
            return buddyRecommendationService.fetch()
            .then(() => {
              // Note (Aleck): I timed the map(sortBy(...)) with 500 students and it averaged between 6 and 10 ms.
              // Todo: consider moving this sort into the service as filtering will be coming down the pipe.
              return map(sortBy(buddyRecommendationService.students, $stateParams.orderBy), '$id');
            });
        }],
        buddyDetailIndex: ['$stateParams', 'buddyRecommendationService', 'studentIds', function ($stateParams, buddyRecommendationService, studentIds) {
            return studentIds.indexOf($stateParams.student_id);
        }]
    }
  });
}]);

export default mod = mod.name;
