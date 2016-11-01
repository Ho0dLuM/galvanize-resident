(function() {

  'use strict';

  angular
    .module('inputJSON.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['fileService'];

  function mainController(fileService) {
    /*jshint validthis: true */
    this.greeting = 'Code Challenge Solution';
    this.showContent = ($fileContent) => {
      const parsed = JSON.parse($fileContent);
      this.content = parsed;
      this.html = `<div>${parsed.map(value => fileService.convertHTML(value)).join('')}</div>`;
    };
  }

})();
