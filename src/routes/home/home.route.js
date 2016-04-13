import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import homeControllerModule from './home.controller';
import template from './home.template.html';

let mod = angular.module('homeRouteModule', [homeControllerModule, buddyRecommendationServiceModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    template: template,
    controller: 'homeController',
    // controllerAs: 'ctrl',  // until we test the $scope.slider works
    resolve: {
        // this doesn't return the recommendations, instead they're loaded into the buddyReceommendationService
        prefetchBuddyRecommendations: ['buddyRecommendationService', function (buddyRecommendationService) {
            return buddyRecommendationService.populateInitialRecommendations();
        }]
    }
  });

  $urlRouterProvider.otherwise('/home');

}]);

export default mod = mod.name;
