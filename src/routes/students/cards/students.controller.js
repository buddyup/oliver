import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('studentsControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentsController', [
  '$scope',
  'buddyRecommendationService',
  'buddyDetailIndex',
  'studentIds',
  function($scope, buddyRecommendationService, buddyDetailIndex, studentIds) {
    if (typeof buddyDetailIndex === 'undefined' || buddyDetailIndex === -1) {
      buddyDetailIndex = 0;
    }
    $scope.options = {
      loop: false,
      initialSlide: buddyDetailIndex,
      effect: "slide",
      touchMoveStopPropagation: true,
      paginationBulletRender: function (index, className) { return ''; },
      slideShadows: false,
      speed: 100,
      parallax: false,
      paginationCurrentClass: "hidden",
    };

    $scope.data = {
      brs: buddyRecommendationService,
      studentIds: studentIds,
      studentMap: buddyRecommendationService.studentMap,
    };
}]);

export default mod = mod.name;
