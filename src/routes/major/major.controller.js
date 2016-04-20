let mod = angular.module('majorControllerModule', []);

mod.controller('majorController', [
  function() {
    /**
     * This uses the Controller As syntax. Anything needed in the view should be placed on `ctrl` and is accessible
     * in the view as `majorctrl`;
     */
    const ctrl = this;



    angular.extend(ctrl, {
    });
}]);

export default mod = mod.name;