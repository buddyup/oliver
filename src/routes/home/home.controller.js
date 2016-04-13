import profileServiceModule from 'services/profile/profile.service';
import classServiceModule from 'services/class/class.service';
import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('homeControllerModule', [
  profileServiceModule,
  buddyRecommendationServiceModule,
  classServiceModule
]);

mod.controller('homeController', [
  '$scope',
  'profileService',
  'buddyRecommendationService',
  'classService',
  function($scope, profileService, buddyRecommendationService, classService) {
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
      brs: buddyRecommendationService,
      classes: classService,
    };



    $scope.handleOnPullRefresh = function () {
      buddyRecommendationService.refresh().finally(() => {
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });
}]);

export default mod = mod.name;
