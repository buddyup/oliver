// styles
import './app.scss';

// this imports angular
import 'ionic-sdk/release/js/ionic.bundle';

import modRoutes from './routes';
import modControllers from './controllers';
import modRun from './config/main.config.js';

let mod = angular.module('app', [
  'ionic',
  modControllers,
  modRoutes,
]);

// Run
mod.run(modRun);
