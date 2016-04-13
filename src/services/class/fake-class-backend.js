let mod = angular.module('fakeClassBackendModule', []);

mod.factory('fakeClassBackend', ['$q', function ($q) {

    const classes = {
      "-KBoQVMwUlvhFnb4Giqf" : {
        "code" : "103",
        "course_id" : "-KBoQVMwUlvhFnb4Giqf",
        "id" : "-KBoQVMwUlvhFnb4Giqf",
        "name" : "Geology for rock climbers",
        "school_id" : "buddyup_org",
        "subject_code" : "GEOL",
        "subject_icon" : "calculator",
        "subject_name" : "Geology",
        "pic": "https://s3.amazonaws.com/uploads.hipchat.com/183747/3575947/prYQ3U9qwreXdH2/geol-103.png"
      },
      "-KBtmOmRoAeCZOcV1dWF" : {
        "code" : "102",
        "course_id" : "-KBtmOmRoAeCZOcV1dWF",
        "id" : "-KBtmOmRoAeCZOcV1dWF",
        "name" : "Intro to Chemistry",
        "school_id" : "buddyup_org",
        "subject_code" : "CHEM",
        "subject_icon" : "calculator",
        "subject_name" : "Chemistry",
        "pic": "https://s3.amazonaws.com/uploads.hipchat.com/183747/3575947/QHbWlJzEjQvHnvf/chem-102.png"
      },
      "-KCpvueUkongkAsuv2Xt" : {
        "code" : "180",
        "course_id" : "-KCpvueUkongkAsuv2Xt",
        "id" : "-KCpvueUkongkAsuv2Xt",
        "name" : "Biology for humans",
        "school_id" : "buddyup_org",
        "subject_code" : "BIO",
        "subject_icon" : "paint-brush",
        "subject_name" : "Biology",
        "pic": "https://s3.amazonaws.com/uploads.hipchat.com/183747/3575947/IqJO8PST7OLdJr1/bio-180.png"
      }
    };

    /**
     * Returns a promise with the buddies, mimic angularfire
     *
     */
    const $loaded = () => {
        return $q.when(classes)
    };


    /**
     * Register a callback for the child_added event. singleton for now, could use observer pattern
     */
    let internal_child_added_callback = (child) => {
        console.log("no callback registered!", child);
    };
    let internal_child_removed_callback = (oldChild) => {
        console.log("no callback registered!", oldChild);
    };
    let internal_child_changed_callback = (child, prevChildKey) => {
        console.log("no callback registered!", child);
    };
    const on = (event, cb) => {
        if (event === "child_added") {
            internal_child_added_callback = cb;
        }
        if (event === "child_removed") {
            internal_child_removed_callback = cb;
        }
        if (event === "child_changed") {
            internal_child_changed_callback = cb;
        }
    };

    const fakeAddChild = (child) => {
        child = child || {
            "code" : "1030",
            "course_id" : "-KCpvueUkongkABCDEFGt",
            "id" : "-KCpvueUkongkABCDEFGt",
            "name" : "Engineering for humans",
            "school_id" : "buddyup_org",
            "subject_code" : "ENG",
            "subject_icon" : "calculator",
            "subject_name" : "Engineering",
            "pic": "https://s3.amazonaws.com/uploads.hipchat.com/183747/3575947/IqJO8PST7OLdJr1/bio-180.png"
        };
        internal_child_added_callback(child);
    };

    return {
        $loaded: $loaded,
        on: on,
        fakeAddChild: fakeAddChild,
    };

}]);

export default mod = mod.name;
