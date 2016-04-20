
let mod = angular.module('inviteControllerModule', []);

mod.controller('inviteController', [
  function() {
    /**
     * This uses the Controller As syntax. Anything needed in the view should be placed on `ctrl` and is accessible
     * in the view as `invitectrl`;
     */
    const ctrl = this;

    function handleIgnoreClick() {
        ctrl.showFooter = false;
    }

    function handleBuddyUpClick() {
        ctrl.showFooter = false;
        ctrl.buddyAccepted = true;
    }

    angular.extend(ctrl, {
        showFooter: true,
        handleIgnoreClick: handleIgnoreClick,
        handleBuddyUpClick: handleBuddyUpClick,
        buddyAccepted: false,
    });
}]);

export default mod = mod.name;
