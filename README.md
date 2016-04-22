# Oliver

Oliver is the BuddyUp 3.0 mobile app codebase.   It integrates with a firebase and django backend, detailed specs to come.  WIP.


## Style Guide

This app follows the style guide: https://github.com/gocardless/angularjs-style-guide/blob/master/README.md

### Changes to the default style guide

#### Controller-as syntax and watches
Watches `$watch` require `$scope` to be injected even with the Controller-as syntax.

```js
function homeController ($scope) {
    const crtl = this;
    angular.extend(ctrl, {title: 'happy'});
    $scope.$watch('ctrl.title', function () {...});
}
```

#### Exporting and importing Modules
All angular modules should export their `.name`.

```js
let mod = angular.module('profileServiceModule', []);
...
export default mod = mod.name;
```

Imports then don't have to worry about the `.name`.

```js
import profileServiceModule from 'services/profile/profile.service';

let mod = angular.module('homeControllerModule', [profileServiceModule])
```

#### Module naming conventions 
All modules should use the local name `mod` and imported modules should prefix the name with `mod`, (ex. `import modRouteHome from 'routes/home/home.module'`).

Angular module names should be prefixed with `app.` and their type to avoid name space collisions. 

| module type | example |
| ---- | ---- |
| modules | `'xyz<Type>module'` (avoids name space collisions)|
| routes | `'xyzRouteModule'` |
| controllers| `'xyxController'` |
| services | `'xyxService'` |
| directives | `'bu-xyx'` or a name with a dash `'profile-card'`(BuddyUp prefixed or the [name contains a dash](https://github.com/gocardless/angularjs-style-guide/blob/master/README.md#directives)) |
| filters | `'xyz'` |
| templates | use es6 imports `import template from './xyz.template.html!text'` |

#### Controllers
In the controller
```js
// in src/routes/xyz/xyz.controller.js
let mod = angular.module('xyzControllerModule', []);
mod.controller('xyzController', function () {
    const ctrl = this;

    // always and only extend the ctrl object at the end of the controller
    angular.extend(ctrl, {
        // controller objects and functions that will be watched
    });
})
export default mod = mod.name;
```

In the route
```js
import template from './xyx.template.html!text';
import xyzControllerModule from './xyz.controller';

let mod = angular.module('xyzRouteModule', [xyzControllerModule]);

mod.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('xyz', {
    url: '/xyz',
    template: template,
    controller: 'xyzController',
    controllerAs: 'ctrl'
  })
});

export default mod = mod.name;
```

#### Services
Angular `factory` should be used in place of `service` or `provider` and an object return not a function. 

```js
let mod = angular.module('profileServiceModule', []);
mod.service('profileService', ['$http', function ($http) {
    function getProfile() {
        // ...
    }

    return {
        getProfile: getProfile
    };

}]);
export default mod = mod.name;
```

Thanks,  
BuddyUp

## Quick start

1. Run the [dev machine setup](https://github.com/buddyup/dev-setup)
2. `d workon`
3. `d bootstrap` (in one tab)
4. `d up`

That will give you a full dev setup, with hot reloading, running locally against docker-based data stores.


## Advanced commands

You have full access to ionic under the hood, as well as some dewey-powered shortcuts.


| command | description | 
| ---- | ----- |
| `d up` | Sets config, and runs hot module reload webserver |
| `d test | pt` (WIP) | Runs the full test suite, using polytester |
| `d bootstrap` | Boots up the databases and services |
| `d android` | Build and install to any connected android devices. |
| `d ios` | Build and install to any connected iOS devices (requires provisioning setup.) |
| `d build` | Create a quick build for iOS or android, suitable for xCode or sideloading. |
| `d release` (WIP) | Create a full, signed release, including splash screens. |
| -- npm -- | Lower-level commands, from package.json |
| `npm run devserver` | Run webpack's webserver on port `8080` while updating static assest on disk |
| `npm run watch` | Run webpack's webserver in hot module reload mode updating assets without a browser refresh |
| `npm run build-assets` | Build static assets with webpack, for release to iOS or Android |
| `npm run build` | Build static assets and run ionic build |
| `npm run ios` | Build static assets then `ionic run ios`  |
| `npm run lint` | Lint the JS against eslint |
| `npm run startservice <service name>` | Stub out a new service in the services dir |
| `npm run startroute <route name>` | Stub out a new route in the routes dir |
| -- ionic -- | Ionic-based commands.  Shouldn't be needed often, but there if you want them.
| `ionic serve` | Run ionic's webserver (requires `npm run build-assets`) |
| `ionic serve --lab` | Run ionic's webserver with android and ios styles (requires `npm run build-assets`) |
| `ionic whatever` | Run [any valid ionic command](http://ionicframework.com/docs/cli/). |


### Android

#### Emulator Setup


1. All android SDK and Genymotion stuff should be installed by `d dev-setup`
2. Create an account here: https://www.genymotion.com/account/create/
3. Open the Genymotion.app app, and create and start a new phone.

### Building

`d android` will run to any android devices, and yell if there's not one available.


To help debug, 

`adb devices` will list any connected android devices.  You should see either a Genymotion phone, or a physical phone in that list.

# Releases

WIP, but `d release` will do it.



# refs

http://gonehybrid.com/build-your-first-mobile-app-with-the-ionic-framework-part-4/


# build cheat sheet

Open your browser to [http://localhost:8080](http://localhost:8080)
