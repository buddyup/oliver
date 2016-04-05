angular.module('app.services')

.factory('profileFactory', ['$http', function ($http) {
    var profile = {
        buddyRecommendations: [],
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

    return profile;

}]);
