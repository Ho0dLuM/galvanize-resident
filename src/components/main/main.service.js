(function() {

  'use strict';

  angular
  .module('inputJSON.components.main')
  .service('fileService', fileService);

  function fileService() {
    /*jshint validthis: true */
    this.convertHTML = (Obj) => {
      const fileContent = Obj.content;
      const htmlTag = Obj.tag;
      if (this.objCheck(fileContent)) {
        return (`<${htmlTag}>${this.convertHTML(fileContent)}</${htmlTag}>`);
      } else if (Array.isArray(fileContent)) {
        return (`<${htmlTag}>${fileContent.map(section => this.convertHTML(section)).join('')}</${htmlTag}>`);
      } else {
        return (`<${htmlTag}>${fileContent}</${htmlTag}>`);
      }
    };

    this.objCheck = (content) => {
      return (typeof content === 'object' && !Array.isArray(content) && content !== null);
    };
  }

})();
