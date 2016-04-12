import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('profileControllerModule', [buddyRecommendationServiceModule]);

mod.controller('profileController', ['$scope', 'buddyRecommendationService', function($scope, buddyRecommendationService) {
    $scope.options = {
      loop: false,
      initialSlide: 1,
      effect: "coverflow",
      speed: 500,
      parallax: true,
      paginationCurrentClass: "hidden",
    };
    $scope.data = {};
    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });

}]);

export default mod = mod.name;
