let mod = angular.module('navControllerModule', []);

/**
 * helper to set the ionic title
 */
mod.controller('navController', ['$scope', function ($scope) {
  $scope.menu = {
    title: 'BuddyUp',
  };

  $scope.$on('onTitleChange', (event, title) => {
    $scope.menu.title = title;
    $scope.$apply();
  });

}]);

export default mod = mod.name;
