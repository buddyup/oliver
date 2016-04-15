import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';

let mod = angular.module('studentsControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentsController', [
  '$scope',
  'buddyRecommendationService',
  'buddyDetailIndex',
  'studentIds',
  '$interval',
  function($scope, buddyRecommendationService, buddyDetailIndex, studentIds, $interval) {
    if (typeof buddyDetailIndex === 'undefined' || buddyDetailIndex === -1) {
      buddyDetailIndex = 0;
    }
    $scope.options = {
      // ALECK CHANGES
      // loop: false,
      initialSlide: 1,
      loop: true,
      loopAdditionalSlides: 0,
      loopedSlides: 0,
      slidesPerView: 1,
      // END ALECK CHANGES
      effect: "slide",
      touchMoveStopPropagation: true,
      paginationBulletRender: function (index, className) { return ''; },
      slideShadows: false,
      speed: 100,
      parallax: false,
      paginationCurrentClass: "hidden",
      // handle large lists
      // preloadImages: false,
      // lazyLoading: true,
      // lazyLoadingInPrevNext: true,
      // lazyLoadingOnTransitionStart: true,
      onSlideChangeStart: handleSlideChangeStart,
    };

    let sliceStart, sliceEnd, previousActiveIndex = 4, currentCard = 'Middle';
    sliceStart = buddyDetailIndex === 0 ? studentIds.length - 1 : buddyDetailIndex - 1;
    sliceEnd = buddyDetailIndex === studentIds.length - 1 ? 0 : buddyDetailIndex + 1;

    function cardLeft(currentCard) {
      if (currentCard === 'Middle') {
        return 'Start';
      }
      if (currentCard === 'Start') {
        return 'End';
      }
      if (currentCard === 'End') {
        return 'Middle';
      }
    }
    function cardRight(currentCard) {
      if (currentCard === 'Middle') {
        return 'End';
      }
      if (currentCard === 'Start') {
        return 'Middle';
      }
      if (currentCard === 'End') {
        return 'Start';
      }
    }

    /**
     * handle fetching new cards, even though there are only 3 cards, the swiper.activeIndex will hit 0 - 4.
     */
    function handleSlideChangeStart (swiper) {
      let currentIndex, updateCardIndex;
      console.log(swiper.activeIndex, previousActiveIndex);
      // this starts at an activeIndex == 4 and in the middle
      if (previousActiveIndex === swiper.activeIndex) {
        // do nothing
        console.log('do nothing')
      } else if ((swiper.activeIndex < previousActiveIndex || swiper.activeIndex === previousActiveIndex + 2) && swiper.activeIndex !== previousActiveIndex - 2)  {
        // user swiped left, update the next left card
        currentCard = cardLeft(currentCard);
        updateCardIndex = `card${cardLeft(currentCard)}Index`;
        currentIndex = $scope.data[`card${currentCard}Index`];
        $scope.data[updateCardIndex] = currentIndex === 0 ? studentIds.length - 1 : currentIndex - 1;
        console.log('left', currentCard, updateCardIndex, currentIndex)
      } else {
        // user swiped right, update the next right card
        currentCard = cardRight(currentCard);
        updateCardIndex = `card${cardRight(currentCard)}Index`;
        currentIndex = $scope.data[`card${currentCard}Index`];
        $scope.data[updateCardIndex] = currentIndex === studentIds.length - 1 ? 0 : currentIndex + 1;
        console.log('right', currentCard, updateCardIndex, currentIndex)
      }

      previousActiveIndex = swiper.activeIndex;
    }
    let testA = true;
    $interval( _ => {
      if (testA) {
        $scope.data.aleck_test = 'true';
      } else {
        $scope.data.aleck_test = 'false';
      }
      testA = !testA;
    }, 1000);

    $scope.data = {
      brs: buddyRecommendationService,
      studentIds: studentIds,
      studentMap: buddyRecommendationService.studentMap,
      cardStartIndex: sliceStart,
      cardEndIndex: sliceEnd,
      cardMiddleIndex: buddyDetailIndex,
      aleck_test: 'argarg',
    };

}]);

export default mod = mod.name;
