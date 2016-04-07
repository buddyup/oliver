# Oliver

## Quick start
    npm install
    npm run build-assets
    ionic serve  # run in browser
    ionic serve --lab  # run ios and android view in browser
    ionic build ios  # then open the project in xcode to install to iPhone
    ionic run ios  # run in ios emulator

If you want to develop with hot reload

    npm run watch  # open browser to localhost:8080

### Android
Install the android dependencies, you'll need the android SDK manager installed if they aren't already (`brew install android-sdk`).

    /usr/local/Cellar/android-sdk/24.4.1_1/bin/android
    ionic platform add android
    ionic build android
    ionic run android

You may need to create a virtual android device if you don't already have one. You'll also want to install the [Intel HAXM](https://software.intel.com/en-us/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-mac-os-x), which involves installing the HAXM from the sdk, then installing the `dmg` from the extras folder. (e.g. `/usr/local/Cellar/android-sdk/24.4.1_1/extras/intel/Hardware_Accelerated_Execution_Manager/IntelHAXM_6.0.1.dmg`)
    
    /usr/local/Cellar/android-sdk/24.4.1_1/bin/android sdk
    /usr/local/Cellar/android-sdk/24.4.1_1/bin/android avd


# refs

http://gonehybrid.com/build-your-first-mobile-app-with-the-ionic-framework-part-4/


# build cheat sheet

| command | description | 
| ---- | ----- |
| `npm run devserver` | Run webpack's webserver on port `8080` while updating static assest on disk |
| `npm run watch` | Run webpack's webserver in hot module reload mode updating assets without a browser refresh |
| `npm run build-assets` | Build static assets with webpack, for release to iOS or Android |
| `npm run build` | Build static assets and run ionic build |


Open your browser to [http://localhost:8080](http://localhost:8080)
