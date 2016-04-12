/**
 * handles loading names.json
 */
import shuffle from "lodash/shuffle";
import sample from "lodash/sample";

const MAX_NUMBER_OF_PROFILES = 100;

export function processNames(data) {
    return shuffle(data.names).slice(0, MAX_NUMBER_OF_PROFILES);
}

export function processProfiles(data) {
    data.pics = data.pics || [];
    data.pics = shuffle(data.pics).slice(0, MAX_NUMBER_OF_PROFILES);
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
