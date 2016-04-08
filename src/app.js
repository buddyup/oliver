// styles
import './app.scss';

// this imports angular and all ionic libs
import 'ionic-sdk/release/js/ionic.bundle';

import homeRouteModule from './routes/home/home.module';
import runModule from './config/main.config';

let mod = angular.module('app', [
  'ionic',
  homeRouteModule,
]);

// Run
mod.run(runModule);
