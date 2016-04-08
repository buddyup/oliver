let mod = angular.module('profileControllerModule', []);

mod.controller('profileController', function($scope) {
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

export default mod = mod.name;
