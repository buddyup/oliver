import {
    processNames,
    processProfiles,
    addMajor,
    addClassStanding,
    addId,
    addRanking,
    persistentStudents
} from "./fake-data-helper";

import merge from "lodash/merge";
import concat from "lodash/concat";

let mod = angular.module('fakeAsyncBuddyLoaderModule', []);

mod.factory('fakeAsyncBuddyLoader', ['$http', '$q', function ($http, $q) {

    const namesPromise = $http.get('names.json');
    const profilesPromise = $http.get('profiles.json');


    /**
     * Returns a promise with the buddies
     *
     */
    const loadBuddies = () => {
        console.log('loading buddies')
        return $q.all([namesPromise, profilesPromise]).then((data) => {
            const names = processNames(data[0].data);
            const profiles = processProfiles(data[1].data);
            const buddies = concat(merge({data: names}, {data: profiles}).data, persistentStudents)
                .map(addClassStanding)
                .map(addMajor)
                .map(addId)
                .map(addRanking);

            return buddies;
        });
    };

    return {
        loadBuddies: loadBuddies,
    };

}]);

export default mod = mod.name;
