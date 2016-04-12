import studentsControllerModule from './students.controller';
import template from './students.template.html';

let mod = angular.module('studentsRouteModule', [studentsControllerModule]);

mod.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('students', {
    url: '/students',
    template: template,
    controller: 'studentsController'
  });
}]);

export default mod = mod.name;
