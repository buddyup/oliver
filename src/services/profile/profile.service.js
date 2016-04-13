let mod = angular.module('profileServiceModule', []);

/**
 * A model for the current profile.
 *
 */
mod.factory('profileService', [function () {
    var profile = {
        buddies: [],
        classes: [],
        study_groups: [],
        firstName: 'Chris',
        lastName: 'Smith',
        email: 'chris.smith@buddyup.org',
        bio: 'A freshman',
        year: 2020,
        loaded: true,
        class_standing: 'Freshman',
    };

    return profile;

}]);

export default mod = mod.name;
