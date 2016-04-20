import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import chatServiceModule from "services/chat/chat.service";

import has from "lodash/has";

let mod = angular.module('studentProfileControllerModule', [buddyRecommendationServiceModule, chatServiceModule]);

mod.controller('studentProfileController', [
  'buddyRecommendationService',
  'chatService',
  'student',
  'profile',
  function(buddyRecommendationService, chatService, student, profile) {
    const ctrl = this;

    /**
     * makes a buddy request and updates view, todo move to the service
     */
    function handleBuddyUpClick() {
        profile.buddies[student.id] = student;
        profile.buddiesAsArray.push(student);
        ctrl.isBuddy = true;
        const chat = {
          type: 'privateMessage',
          id: student.id,
          first_name: student.first_name,
          last_name: student.last_name,
          user_id: student.id,
          profile_pic_tiny_url: student.profile_pic_tiny,
        };
        chatService.createChat(chat);
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
