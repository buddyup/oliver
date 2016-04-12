import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('profileControllerModule', [buddyRecommendationServiceModule]);

mod.controller('profileController', ['$scope', 'buddyRecommendationService', function($scope, buddyRecommendationService) {
    $scope.options = {
      loop: false,
      initialSlide: 1,
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
