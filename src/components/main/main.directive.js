(function() {

  'use strict';

  angular
    .module('inputJSON.components.main')
    .directive('fileUpload', fileUpload);

  function fileUpload($parse) {
    return {
      restrict: 'A',
      scope: false,
      link: (scope, element, attrs) => {
        const parse = $parse(attrs.fileUpload);
        element.on('change', (onChangeEvent) => {
          const reader = new FileReader();
          reader.onload = (onLoadEvent) => {
            scope.$apply(() => {
              parse(scope, {$fileContent:onLoadEvent.target.result});
            });
          };
          reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
        });
      }
    };
  }

})();
