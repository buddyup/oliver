import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import profileServiceModule from "services/profile/profile.service";
import studentProfileControllerModule from './student-profile.controller';
import template from './student-profile.template.html';

let mod = angular.module('studentProfileRouteModule', [studentProfileControllerModule, buddyRecommendationServiceModule, profileServiceModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('student_profile', {
    url: '/student_profile/:student_id',
    template: template,
    controller: 'studentProfileController as spCtrl',
    resolve: {
      prefetchStudents: ['buddyRecommendationService', function (buddyRecommendationService) {
        return buddyRecommendationService.populateInitialRecommendations();
      }],
      profile: ['profileService', function (profileService) {
        return profileService.loadProfile();
      }],
      // this could be handled in the resolve above too in a .then()
      // TODO: this currently handles the user clicking on themselves, and that should really be handled from the click
      // to a different route, the currently non-existing user profile route (4/19/2016 Aleck).
      student: ['prefetchStudents', 'profile', 'buddyRecommendationService',  '$stateParams', function(prefetchStudents, profile, buddyRecommendationService, $stateParams) {
        const user_id = profile.id || profile.$id;
        if ($stateParams.student_id === user_id) {
          return profile;
        } else {
          return buddyRecommendationService.studentMap[$stateParams.student_id];
        }
      }]
    }
  });
}]);

export default mod = mod.name;
