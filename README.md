# Oliver

Oliver is the BuddyUp 3.0 mobile app codebase.   It integrates with a firebase and django backend, detailed specs to come.  WIP.


## Style Guide

This app follows the style guide: https://github.com/gocardless/angularjs-style-guide/blob/master/README.md

### Changes to the default style guide

#### Folder-by-Feature directory structure should contain a `.module.js`
Each folder (route, directive) should have an `xyz.module.js` that is exported and can be imported as a dependency, but allows more complex directives and routes to be composed cleanly. If this feels like too much boiler plate we can adjust. The biggest pain point could be relying on NgAnnotate for the strict DI support.

#### Exporting and importing Modules
All angular modules should export their `.name`.

```js
let mod = angular.module('app.service.profile', []);
...
export default mod = mod.name;
```

Imports then don't have to worry about the `.name`.

```js
import modProfileService from 'services/profile/profile.module';

let mod = angular.module('app.route.home', [modProfileService])
```

#### Module naming conventions 
All modules should use the local name `mod` and imported modules should prefix the name with `mod`, (ex. `import modRouteHome from 'routes/home/home.module'`).

Angular module names should be prefixed with `app.` and their type to avoid name space collisions. 

| module type | example |
| ---- | ---- |
| routes | `'app.route.XYZ'` |
| controllers| `'app.route.controller.XYZ'` |
| services| `'app.service.XYZ'` |
| directives| `'app.directive.XYZ'` |

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
| (WIP) `d test | pt` | Runs the full test suite, using polytester |
| `d bootstrap` | Boots up the databases and services |
| `d android` | Build and install to any connected android devices. |
| `d ios` | Build and install to any connected iOS devices (requires provisioning setup.) |
| `d build` | Create a quick build for iOS or android, suitable for xCode or sideloading. |
| (WIP) `d release` | Create a full, signed release, including splash screens. |
| -- npm -- | Lower-level commands, from package.json |
| `npm run devserver` | Run webpack's webserver on port `8080` while updating static assest on disk |
| `npm run watch` | Run webpack's webserver in hot module reload mode updating assets without a browser refresh |
| `npm run build-assets` | Build static assets with webpack, for release to iOS or Android |
| `npm run build` | Build static assets and run ionic build |
| `npm run ios` | Build static assets then `ionic run ios`  |
| `npm run lint` | Lint the JS against eslint |
| -- ionic -- | Lower-level commands, from package.json |
| `ionic serve` | Run ionic's webserver (requires `npm run build-assets`) |
| `ionic serve --lab` | Run ionic's webserver with android and ios styles (requires `npm run build-assets`) |
| `ionic whatever` | Run [any valid ionic command](http://ionicframework.com/docs/cli/). |


### Android

#### Emulator Setup


1. If you haven't already, run `android update sdk`, then install "Android SDK Build-tools" for the 23.x.x revs, as well as "Android 6.0 (API 23)".
2. Set up Genymotion for fast emulation.  Create an account here: https://www.genymotion.com/account/create/
4. Open the Genymotion.app app, and create and start a new phone.

### Building

`adb devices` will list any connected android devices.  You should see either a Genymotion phone, or a physical phone in that list.

`npm run android` will build and run on your connected device.

# Releases

WIP, but `d release` will do it.



# refs

http://gonehybrid.com/build-your-first-mobile-app-with-the-ionic-framework-part-4/


# build cheat sheet

Open your browser to [http://localhost:8080](http://localhost:8080)
