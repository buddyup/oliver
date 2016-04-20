import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import has from "lodash/has";

let mod = angular.module('studentProfileControllerModule', [buddyRecommendationServiceModule]);

mod.controller('studentProfileController', [
  'buddyRecommendationService',
  'student',
  'profile',
  function(buddyRecommendationService, student, profile) {
    const ctrl = this;

    /**
     * makes a buddy request and updates view
     */
    function handleBuddyUpClick() {
        profile.buddies[student.id] = student;
        profile.buddiesAsArray.push(student);
        ctrl.isBuddy = true;
    }

    angular.extend(ctrl, {
      student: student,
      brs: buddyRecommendationService,
      profile: profile,
      isBuddy: has(profile.buddies, student.id),
      handleBuddyUpClick: handleBuddyUpClick,
    });

}]);

export default mod = mod.name;
