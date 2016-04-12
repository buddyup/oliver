import fakeAsyncBuddyLoaderModule from "./fake-async-buddy-loader";

// Future: import load from backend promise function here and use that for the data load
// then we can swap it or dynamically switch between fake and real data

let mod = angular.module('buddyRecommendationServiceModule', [fakeAsyncBuddyLoaderModule]);

/**
 * A model for the current profile and buddy recommendations.
 *
 * proposed data model for buddy recommendation:
 *     [{
 *         first_name, last_name, profile_pic_medium, profile_pic_tiny, bio, year, major, interests
 *      }, ... ]
 */
mod.factory('buddyRecommendationService', ['fakeAsyncBuddyLoader', function (fakeAsyncBuddyLoader) {
    let brs = {};

    /**
     * Future: swap fakeAsyncBuddyLoader with Firebase service backend.
     * This is one design pattern, i.e. keeping brs.buddyRecommendations up to date,
     * Second would be to move the loadBuddies code to the controllers who want the data.
     */
    function refresh() {
        return fakeAsyncBuddyLoader.loadBuddies()
        .then((buddies) => {
            brs.buddyRecommendations = buddies;
            brs.loaded = true;
        });
    }

    function init() {
        refresh();
    }
    init();

    brs = angular.extend(brs, {
        buddyRecommendations: [],
        loaded: false,
        refresh: refresh,
    });

    return brs;
}]);

export default mod = mod.name;
