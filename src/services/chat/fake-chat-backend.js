import values from "lodash/values";
import get from "lodash/get";

let mod = angular.module('fakeChatServiceBackendModule', []);

mod.factory('fakeChatServiceBackend', ['$q', function ($q) {

    const fakeChatFeedsByType = {
        class: {
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
            "feed": [
                {
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
                    profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d8c6d3b0919b3e4fcbdce7ba015fbc0beacb3149-tiny.jpg",
                },{
                    creator: "-aklsdhiuehw",
                    created_at: 1456893539178,
                    first_name: "Michael",
                    last_name: "Lusardi",
                    type: "chat_message",
                    data: {
                        body: "Midterm is this Friday!",
                        class_id: "-KBtmOmRoAeCZOcV1dWF",
                        first_name: "Michael",
                        last_name: "Lusardi",
                        sender: "-aklsdhiuehw",
                    },
                    profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d8c6d3b0919b3e4fcbdce7ba015fbc0beacb3149-tiny.jpg",
                },
            ]
          },
        },
        group: {


        },
        privateMessage: {
            "-KBogDiHDlb0ZwZ-V418" : {
                "first_name" : "Anneke",
                "last_name" : "Kniestedt",
                "user_id" : "-KBogDiHDlb0ZwZ-V418",
                "number_unread_messages": 3,
                // add this
                profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/9ae4fd0a1980607accfa7c2028f2e34484d0b7e3-tiny.jpg",
                feed: [{
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
                }]
            }

        },
        school: {
            'osu_edu': {
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
                feed: [{
                    creator: "-aslkjasdasd",
                    created_at: 1456873539178,
                    first_name: "Chris",
                    last_name: "Smith",
                    type: "chat_message",
                    data: {
                        body: "Hello beautiful people, I just created the MECha, group. Please join if you're interested.",
                        class_id: "-KBtmOmRoAeCZOcV1dWF",
                        first_name: "Chris",
                        last_name: "Smith",
                        sender: "-aslkjasdasd",
                    },
                    profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/2c7c45b480468b86053a04dd7b587313fcf0dcc5-tiny.jpg",
                }]
            }
        }
    };
    /**
     * mimic classes firebase backend
     */
    function $loaded(params) {
        const data = get(fakeChatFeedsByType, [params.type, params.id]);
        const chat = {
            data: data,
            type: params.type,
            $id: params.id,
            id: params.id,

        };
        if (params.type === 'school') {
            chat.displayName = data.name;
        } else if (params.type === 'group') {
            chat.displayName = data.name;
        } else if (params.type === 'class') {
            chat.displayName = `${data.subject_code} ${data.code}`;
        } else if (params.type === 'privateMessage') {
            chat.displayName = `${data.first_name} ${data.last_name}`;
        }
        return $q.when(chat);
    }

    return {
        $loaded: $loaded,
    };

}]);

export default mod = mod.name;
