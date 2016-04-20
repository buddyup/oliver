let mod = angular.module('classControllerModule', []);

mod.controller('classController', ['$scope', function($scope) {
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
      geolAdded: false,
      chemAdded: false,
      bioAdded: false,
    };
    $scope.$watch('data.slider', function(nv, ov) {
      $scope.slider = $scope.data.slider;
    });

}]);

export default mod = mod.name;
