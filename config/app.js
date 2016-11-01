(function() {

  'use strict';

  angular
    .module('inputJSON', [
      'ngSanitize',
      'ui.router',
      'ui.bootstrap',
      'inputJSON.config',
      'inputJSON.components.main'
    ]);

})();
