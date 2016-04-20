import chatServiceModule from "services/chat/chat.service";
import chatControllerModule from "./chat.controller";
import profileServiceModule from "services/profile/profile.service";
import template from './chat.template.html';
import "./chat.styles.scss";

let mod = angular.module('chatListRouteModule', [chatServiceModule, chatControllerModule, profileServiceModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('chat', {
    url: '/chat?type&id',
    template: template,
    controller: 'chatController as chatctrl',
    resolve: {
        chat: ['chatService', '$stateParams', function (chatService, $stateParams) {
            return chatService.loadChat($stateParams);
        }],
        profile: ['profileService', function (profileService) {
          return profileService.loadProfile();
        }]
    }
  });
}]);

export default mod = mod.name;
