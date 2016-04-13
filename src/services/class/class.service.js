import fakeClassBackendModule from "./fake-class-backend";
import values from "lodash/values";

let mod = angular.module('classServiceModule', [fakeClassBackendModule]);


mod.factory('classService', ['fakeClassBackend', '$q', function (fakeClassBackend, $q) {
    let cs = {};

    const setData = (classes) => {
        cs.classes = classes;
        cs.classesAsArray = values(classes);
        cs.loaded = true;
    };

    /**
     * and probably do something like this later: http://stackoverflow.com/a/28660411
     */
    fakeClassBackend.$loaded()
    .then(setData);

    fakeClassBackend.on('child_added', (child) => {
        console.log(child);
        cs.classes[child.id] = child;
    });

    // TODO: wire up child_removed and child_changed events


    cs = angular.extend(cs, {
        classes: {},
        loaded: false,
    });

    return cs;
}]);

export default mod = mod.name;
