import infiniteSlidePagerController from "./infinite-slide-pager.controller";
import template from "./infinite-slide-pager.template.html";

let mod = angular.module('infiniteSlidePagerModule', []);

mod.directive('infiniteSlidePager', [function infiniteSlidePagerDirective() {
  return {
    restrict: 'E',
    transclude: true,
    template: template,
    scope: {
      sliderOptions: '=',
      slider: '=',
      sliderData: '=',
    },
    controller: 'infiniteSlidePagerController',
  };
}])
.controller('infiniteSlidePagerController', infiniteSlidePagerController);

export default mod = mod.name;
