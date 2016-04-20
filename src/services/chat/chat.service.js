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
     * @param params: {
     *     type: ['school' | 'class' | 'group' | 'privateMessage'],
     *     id: <id of school or class or group or privateMessage>
     * }
     * @return {promise} the chat object instance
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

    /**
     * Creates a new chat when the user joins/creates a class, group, or buddies up.
     */
    function createChat(params) {
        return fakeChatServiceBackend.createChat(params);
    }

    /**
     * @param {object} params: {
     *     type: ['school' | 'class' | 'group' | 'privateMessage'],
     *     id: <chat type id>,
     *     user: <user>,
     *     message: <the messeage to push on the chat>
     * }
     * @return {promise}
     */
    function postChat(params) {
        // probably need to get the chat firebase ref and push to there
        return fakeChatServiceBackend.push(params);
    }


    angular.extend(cs, {
        loadChat: loadChat,
        postChat: postChat,
        createChat: createChat,
        chat: {},
    });
    return cs;

}]);

export default mod = mod.name;
