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
      onTransitionEnd: handleonTransitionEnd,
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

    function handleonTransitionEnd (swiper) {
      if (swiper.activeIndex === 0) {
        $scope.$emit('onTitleChange', 'Chats');
      }
      if (swiper.activeIndex === 1) {
        $scope.$emit('onTitleChange', 'BuddyUp');
      }
      if (swiper.activeIndex === 2) {
        $scope.$emit('onTitleChange', 'Classes & Groups');
      }
    }

    $scope.data = {
      profile: profileService,
      brs: buddyRecommendationService,
      classService: classService,
    };


    $scope.handleOnPullRefresh = function () {
      buddyRecommendationService.refresh().finally(() => {
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

}]);

export default mod = mod.name;
