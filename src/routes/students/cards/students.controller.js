import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('studentsControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentsController', [
  '$scope',
  'buddyRecommendationService',
  'buddyDetailIndex',
  function($scope, buddyRecommendationService, buddyDetailIndex) {
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
    };
    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });


}]);

export default mod = mod.name;
