import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('studentsListControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentsListController', [
  'buddyRecommendationService',
  'studentIds',
  function(buddyRecommendationService, studentIds) {
    /**
     * This uses the Controller As syntax. Anything needed in the view should be placed on `ctrl` and is accessible
     * in the view as `studentlistctrl`;
     */
    const ctrl = this;

    angular.extend(ctrl, {
        brs: buddyRecommendationService,
        studentIds: studentIds,
        studentMap: buddyRecommendationService.studentMap,
    });
}]);

export default mod = mod.name;
