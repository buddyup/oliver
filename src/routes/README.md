Angular routes and controllers should be created here within their own folder.

```
src/
    routes/
        README.md
        home/
            home.controller.js
            home.route.js
            home.controller.e2e.js
            home.template.html
            home.styles.scss
        ...

```

For nested directories, follow this pattern

```
src/
    routes/
        README.md
        user/
            settings/
                user-settings.controller.js
                user-settings.template.html
                user-settings.route.js
            edit/
                user-edit.route.js
                ...
            index.js
        ...

```

Where `index.js` exposes all the routes

```js
import userEditModule from "./edit/user-edit.route";
import userSettingsModule from "./settings/user-settings.route";

let mod = angular.module('userRoutesModule', [
    userEditModule,
    userSettingsModule,
]);

export default mod = mod.name;
```

`index.js` can be imported implicitely in `app.js`

```js
import userRoutesMoudule from "./routes/user";
...
```
