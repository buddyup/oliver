import userProfileModule from "./profile/user-profile.route";
import userEditModule from "./edit/user-edit.route";
import userSettingsModule from "./settings/user-settings.route";

let mod = angular.module('userRouteModule', [
    userProfileModule,
    userEditModule,
    userSettingsModule,
]);

export default mod = mod.name;
