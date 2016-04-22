let mod = angular.module('groupControllerModule', []);

mod.controller('groupController', ['$scope', function($scope) {
    $scope.options = {
      loop: false,
      initialSlide: 0,
      effect: "slide",
      touchMoveStopPropagation: true,
      paginationBulletRender: function (index, className) { return ''; },
      slideShadows: false,
      speed: 100,
      parallax: false,
      paginationCurrentClass: "hidden",
    };
    $scope.data = {
    };
    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });

}]);

export default mod = mod.name;
