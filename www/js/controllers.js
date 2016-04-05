angular.module('app.controllers', [])

.controller('homeCtrl', function($scope, profileFactory) {
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
    $scope.data.profile = profileFactory;
    for (var i = 0; i <= 16; i++) {
      // hacky
      pic_index = Math.floor(Math.random() * 539);
      $scope.data.pics.push(pic_index);
    }

})

.controller('profileCtrl', function($scope) {
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

});

