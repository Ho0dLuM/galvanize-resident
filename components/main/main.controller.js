(function() {

  'use strict';

  angular
    .module('inputJSON.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'fileService'];

  function mainController($scope, fileService) {
    /*jshint validthis: true */
    this.greeting = 'Code Challenge Solution';
    this.showContent = ($fileContent) => {
      const parsed = JSON.parse($fileContent);
      $scope.content = parsed;
      $scope.html = `<div>${parsed.map(value => fileService.convertHTML(value)).join('')}</div>`;
    };
  }

})();
