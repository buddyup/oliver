import fakeChatServiceBackendModule from "./fake-chat-backend";

let mod = angular.module('chatServiceModule', [fakeChatServiceBackendModule]);

/**
 * A model for the current profile.
 *
 */
mod.factory('chatService', ['$q', 'fakeChatServiceBackend', function ($q, fakeChatServiceBackend) {
    var cs = {};

    /**
     * hits the backend and loads the profile for the user
     *
     * TODO hit cahce/localstorage first
     */
    function loadChat(params) {
        return fakeChatServiceBackend.$loaded(params)
        .then((chat) => {
            angular.extend(cs.chat, chat);
            return cs.chat;
        });
    }


    angular.extend(cs, {
        loadChat: loadChat,
        chat: {},
    })
    return cs;

}]);

export default mod = mod.name;
