import chatServiceModule from "services/chat/chat.service";
import chatControllerModule from "./chat.controller";
import template from './chat.template.html';

let mod = angular.module('chatListRouteModule', [chatServiceModule, chatControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('chat', {
    url: '/chat',
    template: template,
    controller: 'chatController as chatctrl',
    params: {
      type: null,
      id: null,
    },
    resolve: {
        chat: ['chatService', '$stateParams', function (chatService, $stateParams) {
            return chatService.loadChat($stateParams);
        }]
    }
  });
}]);

export default mod = mod.name;
