import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import studentsListControllerModule from './students-list.controller';
import template from './students-list.template.html';
import sortBy from "lodash/sortBy";
import map from "lodash/map";

let mod = angular.module('studentsListRouteModule', [studentsListControllerModule, buddyRecommendationServiceModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('students-list', {
    url: '/students-list',
    template: template,
    controller: 'studentsListController as studentlistctrl',
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
