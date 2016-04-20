import values from "lodash/values";

let mod = angular.module('fakeProfileServiceBackendModule', []);

mod.factory('fakeProfileServiceBackend', ['$q', function ($q) {

    /**
     * mimic classes firebase backend
     */
    function $loaded() {
        const classes = {
          "-KBtmOmRoAeCZOcV1dWF" : {
            "code" : "102",
            "course_id" : "-KBtmOmRoAeCZOcV1dWF",
            "id" : "-KBtmOmRoAeCZOcV1dWF",
            "name" : "Intro to Chemistry",
            "school_id" : "buddyup_org",
            "subject_code" : "CHEM",
            "subject_icon" : "calculator",
            "subject_name" : "Chemistry",
            "pic": "https://s3.amazonaws.com/uploads.hipchat.com/183747/3575947/QHbWlJzEjQvHnvf/chem-102.png",
            "students": [{$id: "-aslkjasdasd"}, {$id: "-aklsdhiuehw"}],
            "number_unread_messages": 1,
            "last_message": {
                creator: "-aklsdhiuehw",
                created_at: 1456873539178,
                first_name: "Michael",
                last_name: "Lusardi",
                type: "chat_message",
                data: {
                    body: ":)",
                    class_id: "-KBtmOmRoAeCZOcV1dWF",
                    first_name: "Michael",
                    last_name: "Lusardi",
                    sender: "-aklsdhiuehw",
                },
                profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/1a541d2d2a90039862ae2cccaa856b8bf7e179c9-tiny.jpg",
            }
          },
          "-KCpvueUkongkAsuv2Xt" : {
            "code" : "180",
            "course_id" : "-KCpvueUkongkAsuv2Xt",
            "id" : "-KCpvueUkongkAsuv2Xt",
            "name" : "Biology for humans",
            "school_id" : "buddyup_org",
            "subject_code" : "BIO",
            "subject_icon" : "calculator",
            "subject_name" : "Biology",
            "pic": "https://s3.amazonaws.com/uploads.hipchat.com/183747/3575947/IqJO8PST7OLdJr1/bio-180.png",
            "students": [{$id: "-aslkjasdasd"}, {$id: "-aklsdhiuehw"}],
            "number_unread_messages": 1,
            "last_message": {
                creator: "-aklsdhiuehw",
                created_at: 1456873539178,
                first_name: "Michael",
                last_name: "Lusardi",
                type: "chat_message",
                data: {
                    body: "Midterm on Thursday",
                    class_id: "-KCpvueUkongkAsuv2Xt",
                    first_name: "Michael",
                    last_name: "Lusardi",
                    sender: "-aklsdhiuehw",
                },
                profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/1a541d2d2a90039862ae2cccaa856b8bf7e179c9-tiny.jpg",
            }
          },
        };

        const school = {
            city: 'Columbus',
            active: true,
            country: 'US',
            edu_address: 'osu.edu',
            email_suffix: 'osu.edu',
            id: 'osu_edu',
            name: 'The Ohio State University',
            short_name: 'OSU',
            state: 'Ohio',
            website: 'www.osu.edu',
            pic: 'https://s3.amazonaws.com/uploads.hipchat.com/183747/3575947/jAjOifV9DGNO9B3/upload.png',
            number_unread_messages: 17,
            last_message: {
                creator: "-aslkjasdasd",
                created_at: 1456873539178,
                first_name: "Brian",
                last_name: "Forrester",
                type: "chat_message",
                data: {
                    body: "Hello beautiful people, I just created the MECha, group. Please join if you're interested.",
                    class_id: "-KBtmOmRoAeCZOcV1dWF",
                    first_name: "Brian",
                    last_name: "Forrester",
                    sender: "-aslkjasdasd",
                },
                profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d7acc31753cfaa7eb7d25dc79e916e0527922ba2-tiny.jpg",
            }
        };

        const buddies = {
            "-KBogDiHDlb0ZwZ-V418" : {
                "first_name" : "Anneke",
                "last_name" : "Kniestedt",
                "user_id" : "-KBogDiHDlb0ZwZ-V418",
                "number_unread_messages": 0,
                // add this
                profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/9ae4fd0a1980607accfa7c2028f2e34484d0b7e3-tiny.jpg",
                last_message: {
                    creator: "-KBogDiHDlb0ZwZ-V418",
                    created_at: 1456873539178,
                    first_name: "Anneke",
                    last_name: "Kniestedt",
                    type: "chat_message",
                    data: {
                        body: "Chapter 2 and 3 I think",
                        first_name: "Anneke",
                        last_name: "Kniestedt",
                        sender: "-KBogDiHDlb0ZwZ-V418",
                    },
                    profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/9ae4fd0a1980607accfa7c2028f2e34484d0b7e3-tiny.jpg",
                }
            }
        };
        const groupInvites = {
            "-alksjdasdlkjasdklj": {
                id: "-alksjdasdlkjasdklj",
                type: "group_invite",
                data: {
                    first_name: "Carolyn",
                    last_name: "Howser",
                    sender: "-Kahjsdjhaskjhakjhs",
                    group_name: "D&D Fridays",
                },
                profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/23f045722f8e7720b0d6df86be5e4451b9d8e338-tiny.jpg",
            }
        };
        const buddyInvites = {
            "-ajksuiiuewhwiueryiwueyriu": {
                id: "-ajksuiiuewhwiueryiwueyriu",
                type: "buddy_invite",
                data: {
                    first_name: "Carolyn",
                    last_name: "Howser",
                    sender: "-Kahjsdjhaskjhakjhs",
                },
                profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/23f045722f8e7720b0d6df86be5e4451b9d8e338-tiny.jpg",
            }
        };

        const userProfile = {
            buddies: buddies,
            buddiesAsArray: values(buddies),
            classes: classes,
            classesAsArray: values(classes),
            groupInvites: groupInvites,
            groupInvitesAsArray: values(groupInvites),
            buddyInvites: buddyInvites,
            buddyInvitesAsArray: values(buddyInvites),
            study_groups: [],
            firstName: 'Brian',
            first_name: 'Brian',
            lastName: 'Forrester',
            last_name: 'Forrester',
            email: 'brian@buddyup.org',
            bio: 'A freshman rocker',
            year: 2020,
            $id: '-aslkjasdasd',
            id: '-aslkjasdasd',
            loaded: true,
            major: 'Electrical Engineering',
            class_standing: 'Freshman',
            school: school,
            profile_pic_url_tiny: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d7acc31753cfaa7eb7d25dc79e916e0527922ba2-tiny.jpg",
            profile_pic_tiny: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d7acc31753cfaa7eb7d25dc79e916e0527922ba2-tiny.jpg",
            profile_pic_url_medium: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d7acc31753cfaa7eb7d25dc79e916e0527922ba2-medium.jpg",
            profile_pic_medium: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d7acc31753cfaa7eb7d25dc79e916e0527922ba2-medium.jpg",
        };

        return $q.when(userProfile);
    }

    return {
        $loaded: $loaded,
    };

}]);

export default mod = mod.name;
