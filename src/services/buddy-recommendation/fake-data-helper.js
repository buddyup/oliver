import sample from "lodash/sample";
import sampleSize from "lodash/sampleSize";
import random from "lodash/random";


const MAX_NUMBER_OF_PROFILES = 100;

export function processNames(data) {
    return sampleSize(data.names, MAX_NUMBER_OF_PROFILES);
}

export function processProfiles(data) {
    data.pics = data.pics || [];
    data.pics = sampleSize(data.pics, MAX_NUMBER_OF_PROFILES);
    return data.pics.map((s3link) => {
        return {
            profile_pic_tiny: s3link,
            profile_pic_medium: s3link.replace("tiny", "medium"),
        };
    });
}

export function generateMajor() {
    const majors = ['Psychology', 'Engineering', 'Chemistry', 'Writing', 'Literature', 'History', 'Physics', 'Mathematics', 'Business', 'Communication', 'Economics', 'Biology'];
    return sample(majors);
}

export function generateClassStanding() {
    const classStandings = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Grad Student'];
    return sample(classStandings);
}

export function addClassStanding(buddy) {
    buddy.class_standing = generateClassStanding();
    return buddy;
}

export function addMajor(buddy) {
    buddy.major = generateMajor();
    return buddy;
}

export function addRanking(buddy) {
    buddy.recommendationRanking = random(1, 100000, true);
    return buddy;
}

function generateIDfn() {
    let idSeed = 10;

    return function generateID(){
        idSeed = idSeed + 1;
        return `-KBogDiHDlb0ZwD-A${idSeed}`;
    }
}

const generateID = generateIDfn();

/**
 * I think fire base puts the id as $id
 */
export function addId(buddy) {
    if (!buddy.$id) {
        const id = generateID();
        buddy.$id = id;
        buddy.id = id;
    }
    return buddy;
}

/**
 * Adds a few students needed for the fake chat data and fake profile data
 */
export const persistentStudents = [
    {
        first_name: "Anneke",
        last_name: "Kniestedt",
        id: "-KBogDiHDlb0ZwZ-V418",
        $id: "-KBogDiHDlb0ZwZ-V418",
        profile_pic_tiny: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/9ae4fd0a1980607accfa7c2028f2e34484d0b7e3-tiny.jpg",
        profile_pic_medium: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/9ae4fd0a1980607accfa7c2028f2e34484d0b7e3-medium.jpg",
    },
    {
        id: "-aklsdhiuehw",
        $id: "-aklsdhiuehw",
        first_name: "Michael",
        last_name: "Lusardi",
        profile_pic_tiny: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d8c6d3b0919b3e4fcbdce7ba015fbc0beacb3149-tiny.jpg",
        profile_pic_medium: "https://buddyup-core.s3.amazonaws.com:443/profile_pics/d8c6d3b0919b3e4fcbdce7ba015fbc0beacb3149-medium.jpg",
    }
];
