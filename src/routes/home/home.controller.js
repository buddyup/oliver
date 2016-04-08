import modProfileService from 'services/profile/profile.service';
let mod = angular.module('homeControllerModule', [modProfileService]);

mod.controller('homeController', function($scope, profileService) {
    $scope.options = {
      loop: false,
      initialSlide: 1,
      effect: "slide",
      speed: 500,
      parallax: true,
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

});

export default mod = mod.name;
