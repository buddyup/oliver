angular.module('app.services')

.factory('profileFactory', ['$http', function ($http) {
    var profile = {
        buddyRecommendations: [],
        names: [],
        buddies: [],
        firstName: 'Chris',
        lastName: 'Smith',
        loaded: false,
    };

    $http.get('profiles.json').success(function(data) {
        profile.buddyRecommendations = data.pics || [];
        profile.buddyRecommendationsMedium = profile.buddyRecommendations.map(function (s3link) {
            return s3link.replace("tiny", "medium");
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
