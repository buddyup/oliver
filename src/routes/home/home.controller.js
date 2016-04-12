import profileServiceModule from 'services/profile/profile.service';
import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('homeControllerModule', [profileServiceModule, buddyRecommendationServiceModule]);

mod.controller('homeController', [
  '$scope',
  'profileService',
  'buddyRecommendationService',
  function($scope, profileService, buddyRecommendationService) {
    $scope.options = {
      loop: false,
      initialSlide: 1,
      effect: "slide",
      freeMode: true,
      freeModeSticky: true,
      freeModeMinimumVelocity: 9999,
      touchMoveStopPropagation: true,
      paginationBulletRender: function (index, className) { return ''; },
      slideShadows: false,
      speed: 100,
      parallax: false,
      paginationCurrentClass: "hidden",
    };

    $scope.data = {
      profile: profileService,
      brs: buddyRecommendationService
    };

    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });
}]);

export default mod = mod.name;
