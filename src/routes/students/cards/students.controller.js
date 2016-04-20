import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import has from "lodash/has";

let mod = angular.module('studentsControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentsController', [
  '$scope',
  'buddyRecommendationService',
  'buddyDetailIndex',
  'studentIds',
  'profile',
  function($scope, buddyRecommendationService, buddyDetailIndex, studentIds, profile) {
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
     *
     * TODO: this might have a debounce issue on iOS, could need to be a new view
     */
    function handleImageClick(studentId) {
      $scope.data.clickedStudentId = studentId;
      $scope.data.showCard = !$scope.data.showCard;
      if ($scope.data.showCard) {
        $scope.slider.params.allowSwipeToNext = true;
        $scope.slider.params.allowSwipeToPrev = true;
      } else {
        $scope.slider.params.allowSwipeToNext = false;
        $scope.slider.params.allowSwipeToPrev = false;
      }
    }

    /**
     * makes a buddy request and updates view, todo move to the service
     */
    function handleBuddyUpClick() {
        profile.buddies[$scope.data.clickedStudentId] = $scope.data.studentMap[$scope.data.clickedStudentId];
        profile.buddiesAsArray.push($scope.data.studentMap[$scope.data.clickedStudentId]);
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
      handleBuddyUpClick: handleBuddyUpClick,
      profile: profile,
      has: has,
      clickedStudentId: null,
    };
}]);

export default mod = mod.name;
