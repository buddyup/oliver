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
      // handle large lists
      preloadImages: false,
      lazyLoading: true,
      lazyLoadingInPrevNext: true,
      lazyLoadingOnTransitionStart: true,
    };


    /**
     * on the image click, go to full screen
     */
    function handleImageClick() {
      $scope.data.showCard = !$scope.data.showCard;
      if ($scope.data.showCard) {
        $scope.slider.params.allowSwipeToNext = true;
        $scope.slider.params.allowSwipeToPrev = true;
      } else {
        $scope.slider.params.allowSwipeToNext = false;
        $scope.slider.params.allowSwipeToPrev = false;
      }
    }

    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });


    $scope.data = {
      brs: buddyRecommendationService,
      studentIds: studentIds,
      studentMap: buddyRecommendationService.studentMap,
      showCard: true,
      handleImageClick: handleImageClick,
    };
}]);

export default mod = mod.name;
