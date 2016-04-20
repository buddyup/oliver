import buddyRecommendationServiceModule from 'services/buddy-recommendation/buddy-recommendation.service';
import randomChats from "./random-chats";
import values from "lodash/values";
import get from "lodash/get";
import now from "lodash/now";
import sample from "lodash/sample";

let mod = angular.module('fakeChatServiceBackendModule', [buddyRecommendationServiceModule]);

mod.factory('fakeChatServiceBackend', ['$q', 'buddyRecommendationService', function ($q, buddyRecommendationService) {

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
          "-KCpvueUkongkAsuv2Xt" : {
            "code" : "180",
            "course_id" : "-KCpvueUkongkAsuv2Xt",
            "id" : "-KCpvueUkongkAsuv2Xt",
            "name" : "Biology for humans",
            "school_id" : "buddyup_org",
            "subject_code" : "BIO",
            "subject_icon" : "paint-brush",
            "subject_name" : "Biology",
            "pic": "https://s3.amazonaws.com/uploads.hipchat.com/183747/3575947/IqJO8PST7OLdJr1/bio-180.png",
            "students": [{$id: "-aslkjasdasd"}, {$id: "-aklsdhiuehw"}, {$id: "-aklsjdasjdalkjsdalksj"}],
            "feed": [{
                    creator: "-aklsdhiuehw",
                    created_at: 1456873539178,
                    first_name: "Michael",
                    last_name: "Lusardi",
                    type: "chat_message",
                    data: {
                        body: "Midterm on Thusday?",
                        class_id: "-KBtmOmRoAeCZOcV1dWF",
                        first_name: "Michael",
                        last_name: "Lusardi",
                        sender: "-aklsdhiuehw",
                    },
                    profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d8c6d3b0919b3e4fcbdce7ba015fbc0beacb3149-tiny.jpg",
                },
            ]
        }
        },
        group: {


        },
        privateMessage: {
            "-KBogDiHDlb0ZwZ-V418" : {
                "first_name" : "Anneke",
                "last_name" : "Kniestedt",
                "user_id" : "-KBogDiHDlb0ZwZ-V418",
                "number_unread_messages": 0,
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
                    first_name: "Brian",
                    last_name: "Forrester",
                    type: "chat_message",
                    data: {
                        body: "Hello beautiful people, I just created the MECha, group. Please join if you're interested.",
                        first_name: "Brian",
                        last_name: "Forrester",
                        sender: "-aslkjasdasd",
                    },
                    profile_pic_tiny_url: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d7acc31753cfaa7eb7d25dc79e916e0527922ba2-tiny.jpg",
                }]
            }
        }
    };


    /**
     * helper to create messages for the feeds
     *
     * @param {object} params: {
     *     type: ['school' | 'class' | 'group' | 'privateMessage'],
     *     id: <chat type id>,
     *     user_id: <user's id>,
     *     message: <the messeage to push on the chat>
     * }
     */
    function createMessage(params) {
        const {user, id, type, message} = params;
        const data = {
            body: message || "",
            first_name: user.first_name || user.firstName,
            last_name: user.last_name || user.lastName,
            sender: user.id || user.$id || user.user_id,
        };
        if (type === 'class') {
            data.class_id = id;
        }
        return {
            creator: user.id || user.$id || user.user_id,
            created_at: now(),
            first_name: user.first_name || user.firstName,
            last_name: user.last_name || user.lastName,
            type: "chat_message",
            data: data,
            profile_pic_tiny_url: user.profile_pic_url_tiny || user.profile_pic_tiny,
        };
    }

    function generateRandomMessage(students, type, id) {
        const message = sample(randomChats);
        const student = sample(students);
        return createMessage({
            user: student,
            message: message,
            id: id,
            type: type,
        });
    }
    let randomChatsGenerated = false;
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
        return buddyRecommendationService.populateInitialRecommendations()
        .then(() => {
            if (!randomChatsGenerated) {
                const school = get(fakeChatFeedsByType, ['school', 'osu_edu']);
                const chemClass = get(fakeChatFeedsByType, ['class', '-KBtmOmRoAeCZOcV1dWF']);
                for (var i = 20; i >= 0; i--) {
                    school.feed.unshift(generateRandomMessage(buddyRecommendationService.students, 'school', 'osu_edu'));
                }
                for (i = 5; i >= 0; i--) {
                    chemClass.feed.unshift(generateRandomMessage(buddyRecommendationService.students, 'class', '-KBtmOmRoAeCZOcV1dWF'));
                }
                randomChatsGenerated = true;
            }
            return $q.when(chat);
        });
    }

    /**
     * Pushes a new message to a chat
     */
    function push(params) {
        const data = get(fakeChatFeedsByType, [params.type, params.id]);
        const message = createMessage(params);
        data.feed.push(message);
        return $q.when('success');
    }

    return {
        $loaded: $loaded,
        push: push,
    };

}]);

export default mod = mod.name;
