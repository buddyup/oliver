// styles
import './shared-styles/app.scss';

// this imports angular and all ionic libs
import 'ionic-sdk/release/js/ionic.bundle';
import "angular-elastic";

// routes
import homeRouteModule from './routes/home/home.route';
import studentsRoutesModule from './routes/students';
import groupRouteModule from './routes/group/group.route';
import classRouteModule from './routes/class/class.route';
import chatRouteModule from './routes/chat/chat.route';
import inviteRouteModule from './routes/invite/invite.route';
import userRoutesModule from './routes/user';
import classStandingRouteModule from './routes/class-standing/class-standing.route';

// components
import navControllerModule from "./components/nav/nav.controller";

import runModule from './config/main.config';

let mainModule = angular.module('app', [
  'ionic',
  'monospaced.elastic',
  // routes
  homeRouteModule,
  studentsRoutesModule,
  groupRouteModule,
  classRouteModule,
  chatRouteModule,
  inviteRouteModule,
  userRoutesModule,
  classStandingRouteModule,

  // components
  navControllerModule,
]);

// Run
mainModule.run(runModule);

// Bootstrap
angular.element(document).ready(function() {
  angular.bootstrap(document.querySelector('[data-main-app]'), [
    mainModule.name
  ], {
    strictDi: true
  });
});
