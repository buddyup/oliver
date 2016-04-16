import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import slice from "lodash/slice";
import indexOf from "lodash/indexOf";

let mod = angular.module('studentsControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentsController', [
  '$scope',
  'buddyRecommendationService',
  'buddyDetailIndex',
  'studentIds',
  '$timeout',
  function($scope, buddyRecommendationService, buddyDetailIndex, studentIds, $timeout) {
    if (typeof buddyDetailIndex === 'undefined' || buddyDetailIndex === -1) {
      buddyDetailIndex = 0;
    }
    $scope.options = {
      loop: true,
      initialSlide: 0,
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
      onSlideChangeEnd: handleSlideChangeEnd,
    };

    /**
     * [Aleck] Design for student cards with swiper
     *
     * Swiper will block on load while rendering all `slide-page` elements, one for each student id in the array
     * `studentIds`. To mitigate this, we can provide a much smaller array to repeat over, and update the array as
     * the user swipes through the students every n-th student. In order for swiper not to refresh, we can only use
     * the push method. With the swiper option `loop` set to `true`, we can create a view of the complete list with the
     * buddyIndex student at position at 0, the x-th next students after, and the y-th previous students at the end.
     *
     * studentIds [A, B, C, D, E, F, ... , L, M, N, O, P, ... , X, Y, Z]
     * User clicked to view student N preloading two students around N.
     * Initial data.studentIds: [N, O, P, L, M], we keep track of P and L.
     * If the user swipes left to M or L, we need to insert J and K into the array.
     * If the user swipers right to O or P, we need to insert Q and R into the array.
     */
    const sliderBookeeping = {
      fetchedIndicies: [],

    };
    let doOnce = true;
    function handleSlideChangeEnd (swiper) {
      console.log(swiper.activeIndex, $scope.data.studentIds.length)
      if (swiper.activeIndex > 5 && doOnce) {
        doOnce = false;
        for (var i = 10; i < 20; i++) {
          $scope.data.studentIds.splice(6, 0, studentIds[i]);
        }
        console.log('added ids')
        // needed since we're updating data for the swiper
        $scope.$apply();
      }
    }

    $scope.data = {
      brs: buddyRecommendationService,
      studentIds: [studentIds[buddyDetailIndex]],
      studentMap: buddyRecommendationService.studentMap,
    };

    $timeout(_ => {
      for (var i = buddyDetailIndex + 1; i <= buddyDetailIndex + 10; i++) {
        $scope.data.studentIds.push(studentIds[i]);
      }
      // need to grab buddyDetailIndex - 10 through buddyDetailIndex - 1
      // for (i = 0; i < buddyDetailIndex; i++) {
      //   $scope.data.studentIds.push(studentIds[i]);
      // }
    }, 1000);
}]);

export default mod = mod.name;
