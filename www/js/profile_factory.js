angular.module('app.services')

.factory('profileFactory', ['$http', function ($http) {
    var profile = {
        buddyRecommendations: [],
        buddies: [],
        firstName: 'Chris',
        lastName: 'Smith',
        loaded: false,
    };
    console.log('inside profileFactory');

    $http.get('profiles.json').success(function(data) {
       profile.buddyRecommendations = data.pics || [];
       profile.loaded = true;
       console.log(data);
    });

    return profile;

}]);
