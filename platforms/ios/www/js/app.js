import 'ionic-sdk/release/js/ionic.bundle';
import modRoutes from './routes';
import modControllers from './controllers';

let mod = angular.module('app', [
  'ionic',
  modControllers,
  modRoutes,
]);

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
