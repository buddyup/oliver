// styles
import './shared-styles/app.scss';

// this imports angular and all ionic libs
import 'ionic-sdk/release/js/ionic.bundle';

import homeRouteModule from './routes/home/home.route';
import profileRouteModule from './routes/profile/profile.route';
import runModule from './config/main.config';

let mod = angular.module('app', [
  'ionic',
  homeRouteModule,
  profileRouteModule,
]);

// Run
mod.run(runModule);
