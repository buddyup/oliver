angular.module('app.controllers', [])

.controller('homeCtrl', function($scope) {
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
 