(function() {

  'use strict';

  angular
    .module('inputJSON.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Code Challenge Solution';
    $scope.showContent = ($fileContent) => {
      $scope.content = $fileContent;
    };
  }

})();
