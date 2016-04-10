// styles
import './shared-styles/app.scss';

// this imports angular and all ionic libs
import 'ionic-sdk/release/js/ionic.bundle';

import homeRouteModule from './routes/home/home.route';
import profileRouteModule from './routes/profile/profile.route';
// import runModule from './config/main.config';

let mod = angular.module('app', [
  'ionic',
  homeRouteModule,
  profileRouteModule,
]);

// Run
mod.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

