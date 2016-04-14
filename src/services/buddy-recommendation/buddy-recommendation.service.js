import fakeAsyncBuddyLoaderModule from "./fake-async-buddy-loader";
import findIndex from "lodash/findIndex";
import reduce from "lodash/reduce";
import sortBy from "lodash/sortBy";
import map from "lodash/map";

// Future: import load from backend promise function here and use that for the data load
// then we can swap it or dynamically switch between fake and real data

let mod = angular.module('buddyRecommendationServiceModule', [fakeAsyncBuddyLoaderModule]);

/**
 *
 * A model for a school's students and buddy recommendations.
 *
 * TODO: rename to studentsService
 *
 * proposed data model for buddy recommendation:
 *     [{
 *         first_name, last_name, profile_pic_medium, profile_pic_tiny, bio, year, major, interests
 *      }, ... ]
 */
mod.factory('buddyRecommendationService', ['fakeAsyncBuddyLoader', '$q', function (fakeAsyncBuddyLoader, $q) {
    let brs = {};

    /**
     * build a hash/map/mutex of the students keyed by $id.
     * @param  {array} students
     * returns an object hash
     */
    function _createStudentMap(students) {
        return reduce(students, (acc, n) => {
            acc[n.$id || n.id] = n;
            return acc;
        }, {});
    }

    /**
     * Future: swap fakeAsyncBuddyLoader with Firebase service backend.
     * This is one design pattern, i.e. keeping brs.buddyRecommendations up to date,
     * Second would be to move the loadBuddies code to the controllers who want the data.
     *
     * side effects: adds recommended buddies to the service (brs)
     * returns a promise so that .finally can be used to broadcast ionic event as is needed handlePullDownRefresh.
     */
    function refresh() {
        return fakeAsyncBuddyLoader.loadBuddies()
        .then((buddies) => {
            brs.studentMap = _createStudentMap(buddies);
            brs.students = buddies;
            brs.buddyRecommendations = sortBy(buddies, 'recommendationRanking');
            brs.loaded = true;
        });
    }


    /**
     * returns a promise that when resolved indicated the brs.buddyRecommendations is fulfilled
     */
    function populateInitialRecommendations () {
        if (brs.buddyRecommendations.length > 0) {
            return $q.when();
        } else {
            return refresh();
        }
    }

    /**
     * TODO: rewrite this to look more like a DB get and avoid the side effect of populating buddyRecommendations if needed.
     *
     * returns a promise that when resolved indicated the brs.buddyRecommendations is fulfilled.
     * @param  {optional} studentId If provided, the matching student will returned.
     */
    function fetch(studentId) {
        if (studentId) {
            if (brs.buddyRecommendations.length > 0) {
                const index = findIndex(brs.buddyRecommendations, {$id: studentId});
                if (index !== -1) {
                    return $q.when(index);
                } else {
                    console.error('couldnt find the student');
                    // TODO: fetch the buddy from DB and insert into the list
                    return $q.when();
                }
            } else {
                return refresh();
            }
        } else {
            return populateInitialRecommendations();
        }
    }



    brs = angular.extend(brs, {
        buddyRecommendations: [],
        students: [],
        studentMap: {},
        loaded: false,
        refresh: refresh,
        fetch: fetch,
        populateInitialRecommendations: populateInitialRecommendations,
    });

    return brs;
}]);

export default mod = mod.name;
