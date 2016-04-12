import profileServiceModule from 'services/profile/profile.service';
let mod = angular.module('homeControllerModule', [profileServiceModule]);

mod.controller('homeController', [
  '$scope', 'profileService', function($scope, profileService) {
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
    $scope.data = {};
    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });
    var pic_index;
    $scope.data.pics = [];
    $scope.data.profile = profileService;
    for (var i = 0; i <= 16; i++) {
      // hacky
      pic_index = Math.floor(Math.random() * 539);
      $scope.data.pics.push(pic_index);
    }

}]);

export default mod = mod.name;
