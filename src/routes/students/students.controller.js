import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('studentsControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentsController', [
  '$scope',
  'buddyRecommendationService',
  'buddyConfig',
  function($scope, buddyRecommendationService, buddyConfig) {
    $scope.options = {
      loop: false,
      initialSlide: 0,
      effect: "slide",
      touchMoveStopPropagation: true,
      paginationBulletRender: function (index, className) { return ''; },
      slideShadows: false,
      speed: 100,
      parallax: false,
      paginationCurrentClass: "hidden",
    };
    $scope.data = {
      brs: buddyRecommendationService
    };
    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });

}]);

export default mod = mod.name;
