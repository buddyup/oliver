import fakeAsyncBuddyLoaderModule from "./fake-async-buddy-loader";
import find from "lodash/find";
import remove from "lodash/remove";
import pull from "lodash/pull";

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
mod.factory('buddyRecommendationService', ['fakeAsyncBuddyLoader', '$q', function (fakeAsyncBuddyLoader, $q) {
    let brs = {};

    /**
     * Future: swap fakeAsyncBuddyLoader with Firebase service backend.
     * This is one design pattern, i.e. keeping brs.buddyRecommendations up to date,
     * Second would be to move the loadBuddies code to the controllers who want the data.
     *
     * side effects: adds recommended buddies to the service (brs)
     * returns a promise so that .finally can be used to broadcast ionic event as is needed handlePullDownRefresh.
     */
    function refresh(studentId) {
        return fakeAsyncBuddyLoader.loadBuddies(studentId)
        .then((buddies) => {
            brs.buddyRecommendations = buddies;
            brs.loaded = true;
        });
    }

    /**
     * returns a promise that when resolved indicated the brs.buddyRecommendations is fulfilled.
     * @param  {optional} studentId If provided, the matching student will be at the front of the list of cards.
     */
    function fetch(studentId) {
        if (studentId) {
            if (brs.buddyRecommendations.length > 0) {
                const student = find(brs.buddyRecommendations, {$id: studentId});
                pull(brs.buddyRecommendations, student);
                brs.buddyRecommendations.unshift(student);
                return $q.when();
            } else {
                return refresh();
            }
        } else {
            if (brs.buddyRecommendations.length > 0) {
                return $q.when();
            } else {
                return refresh();
            }
        }
    }

    brs = angular.extend(brs, {
        buddyRecommendations: [],
        loaded: false,
        refresh: refresh,
        fetch: fetch,
    });

    return brs;
}]);

export default mod = mod.name;
