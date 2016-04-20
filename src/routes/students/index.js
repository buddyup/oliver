import cardsModule from "./cards/students.route";
import listModule from "./list/students-list.route";
import profileModule from "./profile/student-profile.route";

let mod = angular.module('studentsRouteModule', [cardsModule, listModule, profileModule]);

export default mod = mod.name;
