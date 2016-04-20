import chatServiceModule from "services/chat/chat.service";
import profileServiceModule from "services/profile/profile.service";

let mod = angular.module('chatControllerModule', [chatServiceModule, profileServiceModule]);

mod.controller('chatController', [
  'chatService',
  'profileService',
  'chat',
  'profile',
  function(chatService, profileService, chat, profile) {
    /**
     * This uses the Controller As syntax. Anything needed in the view should be placed on `ctrl` and is accessible
     * in the view as `chatctrl`;
     */
    const ctrl = this;

    function handlePostChat(message) {
      // have profile
      profileService.loadProfile()
      .then((profile) => {
        const chatPayload = {
          message: message,
          user:profile,
          type: chat.type,
          id: chat.id
        };
        return chatService.postChat(chatPayload);
      })
      .then((success) => {
        ctrl.message = "";
      })
      .catch((error) => {
        console.error(error);
      });
    }

    angular.extend(ctrl, {
        chatService: chatService,
        chat: chat,
        message: "",
        handlePostChat: handlePostChat,
        profile: profile,
    });
}]);

export default mod = mod.name;
