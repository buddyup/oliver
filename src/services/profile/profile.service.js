let mod = angular.module('app.profile.service.module', []);

/**
 * A model for the current profile and buddy recommendations.
 *
 * proposed data model for buddyRecommendations:
 *     [{
 *         first_name, last_name, profile_pic_medium, profile_pic_tiny, bio, year, major, interests
 *      }, ... ]
 */
mod.factory('profileService', ['$http', function ($http) {
    var profile = {
        buddyRecommendations: [],
        names: [],
        buddies: [],
        firstName: 'Chris',
        lastName: 'Smith',
        bio: 'A freshman',
        year: 2020,
        loaded: false,
    };

    $http.get('profiles.json').success(function(data) {
        profile.buddyRecommendations = data.pics || [];
        profile.buddyRecommendationsMedium = profile.buddyRecommendations.map(function (s3link) {
            return s3link;
            // Steven suggestion.
            // .replace("tiny", "medium");
        });
        profile.loaded = true;
        console.log(data);
    });
    /**
     * This is not the correct data format, will merge the profile pics and names/bios shortly into the buddyRecommendations
     */
    $http.get('names.json').success(function(data) {
        profile.names = data.names || [];
        console.log(data);
    });

    return profile;

}]);

export default mod = mod.name;
