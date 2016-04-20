import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('studentProfileControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentProfileController', [
  'buddyRecommendationService',
  'student',
  function(buddyRecommendationService, student) {
    const ctrl = this;

    angular.extend(ctrl, {
      student: student,
      brs: buddyRecommendationService,
    });

}]);

export default mod = mod.name;
