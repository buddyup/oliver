import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('studentsListControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentsListController', [
  'buddyRecommendationService',
  function(buddyRecommendationService) {
    /**
     * This uses the Controller As syntax. Anything needed in the view should be placed on `ctrl` and is accessible
     * in the view as `studentlistctrl`;
     */
    const ctrl = this;



    angular.extend(ctrl, {
        brs: buddyRecommendationService,
        title: 'Aleck',
    });
}]);

export default mod = mod.name;
