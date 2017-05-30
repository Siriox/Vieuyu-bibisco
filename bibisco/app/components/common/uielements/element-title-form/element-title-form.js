/*
 * Copyright (C) 2014-2017 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.gnu.org/licenses/gpl-2.0.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */
angular.
module('bibiscoApp').
component('elementtitleform', {
  templateUrl: 'components/common/uielements/element-title-form/element-title-form.html',
  controller: ElementTitleFormController,
  bindings: {
    breadcrumbitems: '<',
    eventname: '@',
    exitpath: '@',
    insertfunction: '&',
    pageheadertitle: '@',
    titlelabel: '@',
    titlemaxlength: '@'
  }
});

function ElementTitleFormController($location, $rootScope, $routeParams,
  MainCharacterService, LoggerService) {
  LoggerService.debug('Start ElementTitleFormController...');

  var self = this;

  self.$onInit = function() {
    $rootScope.$emit(self.eventname);
    if ($routeParams.operation == 'edit') {

    } else {
      self.title = null;
    }
  };

  self.save = function(isValid) {
    if (isValid) {
      self.insertfunction({
        title: self.title
      });
      $location.path(self.exitpath);
    }
  }

  self.back = function() {
    $location.path(self.exitpath);
  }

  LoggerService.debug('End ElementTitleFormController...');
}