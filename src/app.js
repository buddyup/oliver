// styles
import './shared-styles/app.scss';

// this imports angular and all ionic libs
import 'ionic-sdk/release/js/ionic.bundle';

// routes
import homeRouteModule from './routes/home/home.route';
import studentsRouteModule from './routes/students';
import groupRouteModule from './routes/group/group.route';
import classRouteModule from './routes/class/class.route';

import runModule from './config/main.config';

let mainModule = angular.module('app', [
  'ionic',
  homeRouteModule,
  studentsRouteModule,
  groupRouteModule,
  classRouteModule,
]);

// Run
mainModule.run(runModule);

// mainModule.config(['$ionicConfigProvider', function($ionicConfigProvider) {
//   if (!ionic.Platform.isIOS()) {
//     $ionicConfigProvider.scrolling.jsScrolling(false);
//   }
// }]);

// Bootstrap
angular.element(document).ready(function() {
  angular.bootstrap(document.querySelector('[data-main-app]'), [
    mainModule.name
  ], {
    strictDi: true
  });
});
