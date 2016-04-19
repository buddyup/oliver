import chatServiceModule from "services/chat/chat.service";

let mod = angular.module('chatControllerModule', [chatServiceModule]);

mod.controller('chatController', [
  'chatService',
  'chat',
  function(chatService, chat) {
    /**
     * This uses the Controller As syntax. Anything needed in the view should be placed on `ctrl` and is accessible
     * in the view as `chatctrl`;
     */
    const ctrl = this;

    angular.extend(ctrl, {
        chatService: chatService,
        chat: chat,
    });
}]);

export default mod = mod.name;
