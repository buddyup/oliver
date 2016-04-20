import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import studentProfileControllerModule from './student-profile.controller';
import template from './student-profile.template.html';

let mod = angular.module('studentProfileRouteModule', [studentProfileControllerModule, buddyRecommendationServiceModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('student_profile', {
    url: '/student_profile/:student_id',
    template: template,
    controller: 'studentProfileController as spCtrl',
    resolve: {
      prefetchStudents: ['buddyRecommendationService', function (buddyRecommendationService) {
        buddyRecommendationService.populateInitialRecommendations();
      }],
      // this could be handled in the resolve above too in a .then()
      student: ['prefetchStudents', 'buddyRecommendationService', '$stateParams', function(prefetchStudents, buddyRecommendationService, $stateParams) {
        return buddyRecommendationService.studentMap[$stateParams.student_id];
      }]
    }
  });
}]);

export default mod = mod.name;
