'use strict';

angular.module('teamChurroApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.categories = [
      {name: 'Email'},
      {name: 'Loyalty'},
      {name: 'POS'},
      {name: 'Mobile App'}
    ];

    $scope.vendors = [
      {name: 'Fishbowl', image: ''},
      {name: 'Exact Target', image: ''},
      {name: 'MailChimp', image: ''},
      {name: 'Constant Contact', image: ''}
    ];

    $scope.selections = [];

  });
