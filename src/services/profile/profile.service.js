import fakeProfileServiceBackendModule from "./fake-profile-backend";

let mod = angular.module('profileServiceModule', [fakeProfileServiceBackendModule]);

/**
 * A model for the current profile.
 *
 */
mod.factory('profileService', ['$q', 'fakeProfileServiceBackend', function ($q, fakeProfileServiceBackend) {
    var ps = {};

    /**
     * hits the backend and loads the profile for the user
     *
     * TODO hit cahce/localstorage first
     */
    function loadProfile() {
        if (ps.loaded) {
            return $q.when(ps.profile);
        } else {
            return fakeProfileServiceBackend.$loaded()
            .then((userProfile) => {
                angular.extend(ps.profile, userProfile);
                ps.loaded = true;
                return ps.profile;
            });
        }
    }


    angular.extend(ps, {
        loadProfile: loadProfile,
        profile: {},
        loaded: false,
    });
    return ps;

}]);

export default mod = mod.name;
