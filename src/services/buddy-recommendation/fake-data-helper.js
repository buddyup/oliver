import sample from "lodash/sample";
import sampleSize from "lodash/sampleSize";

const MAX_NUMBER_OF_PROFILES = 500;

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

function generateUUID(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c==='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

/**
 * I think fire base puts the id as $id
 */
export function addId(buddy) {
    buddy.$id = generateUUID();
    return buddy;
}
