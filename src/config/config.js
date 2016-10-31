(function() {

  'use strict';

  angular
    .module('inputJSON.config', ['ui.router'])
    .config(routes);

  function routes($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        templateUrl: 'components/main/main.view.html'
      });
  }

})();
