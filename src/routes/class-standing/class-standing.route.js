import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import classStandingControllerModule from './class-standing.controller';
import template from './class-standing.template.html';
import sortBy from "lodash/sortBy";
import map from "lodash/map";

let mod = angular.module('classStandingRouteModule', [classStandingControllerModule, buddyRecommendationServiceModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('class-standing', {
    url: '/class-standing',
    template: template,
    controller: 'classStandingController as classStandingCtrl',
    params: {
      orderBy: 'first_name'  // optional param, here it's kept out of the url
    },
    resolve: {
        studentIds: ['buddyRecommendationService', '$stateParams', function (buddyRecommendationService, $stateParams) {
            return buddyRecommendationService.fetch()
            .then(() => {
              // Note (Aleck): I timed the map(sortBy(...)) with 500 students and it averaged between 6 and 10 ms.
              // Todo: consider moving this sort into the service as filtering will be coming down the pipe.
              return map(sortBy(buddyRecommendationService.students, $stateParams.orderBy), '$id');
            });
        }]
    }
  });
}]);

export default mod = mod.name;