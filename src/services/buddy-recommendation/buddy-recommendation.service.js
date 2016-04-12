import {processNames, processProfiles} from "./fake-data-helper";
import merge from "lodash/merge";

// Future: import load from backend promise function here and use that for the data load
// then we can swap it or dynamically switch between fake and real data

let mod = angular.module('buddyRecommendationServiceModule', []);

/**
 * A model for the current profile and buddy recommendations.
 *
 * proposed data model for buddy recommendation:
 *     [{
 *         first_name, last_name, profile_pic_medium, profile_pic_tiny, bio, year, major, interests
 *      }, ... ]
 */
mod.factory('buddyRecommendationService', ['$http', '$q', function ($http, $q) {
    var brs = {
        buddyRecommendations: [],
        loaded: false,
    };

    const namesPromise = $http.get('names.json');
    const profilesPromise = $http.get('profiles.json');


    /**
     * TODO:
     *     - Load fake year, major, bio, interests
     *     - move this to the helper lib
     *
     */
    $q.all([namesPromise, profilesPromise]).then((data) => {
        const names = processNames(data[0].data);
        const profiles = processProfiles(data[1].data);
        brs.buddyRecommendations = merge({data: names}, {data: profiles}).data;
        brs.loaded = true;
    });

    return brs;
}]);

export default mod = mod.name;
