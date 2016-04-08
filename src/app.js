// styles
import './app.scss';

// this imports angular
import 'ionic-sdk/release/js/ionic.bundle';

import modHomeRoute from './routes/home/home.module';
import modProfileRoute from './routes/profile/profile.module';
import modRun from './config/main.config.js';

let mod = angular.module('app', [
  'ionic',
  modHomeRoute,
  modProfileRoute,
]);

// Run
mod.run(modRun);
