import userProfileModule from "./profile/user-profile.route";
import userEditModule from "./edit/user-edit.route";

let mod = angular.module('userRouteModule', [
    userProfileModule,
    userEditModule,
]);

export default mod = mod.name;
