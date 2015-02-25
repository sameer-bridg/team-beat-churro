'use strict';

angular.module('teamChurroApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.categories = [
      {
        id: 'email',
        name: 'Email',
        vendors: [
          {id: 'fishbowl', name: 'Fishbowl', image: ''},
          {id: 'exacttarget', name: 'Exact Target', image: ''},
          {id: 'mailchimp', name: 'MailChimp', image: ''},
          {id: 'constant_contact', name: 'Constant Contact', image: ''}
        ]
      },

      {
        id: 'loyalty',
        name: 'Loyalty',
        vendors: [
          {id: 'fishbowl', name: 'Fishbowl', image: ''},
          {id: 'exacttarget', name: 'Exact Target', image: ''},
          {id: 'mailchimp', name: 'MailChimp', image: ''},
          {id: 'constant_contact', name: 'Constant Contact', image: ''}
        ]
      },

      {
        id: 'pos',
        name: 'POS',
        vendors: [
          {id: 'fishbowl', name: 'Fishbowl', image: ''},
          {id: 'exacttarget', name: 'Exact Target', image: ''},
          {id: 'mailchimp', name: 'MailChimp', image: ''},
          {id: 'constant_contact', name: 'Constant Contact', image: ''}
        ]
      },

      {
        id: 'data_insights',
        name: 'Data Insights',
        vendors: [
          {id: 'fishbowl', name: 'Fishbowl', image: ''},
          {id: 'exacttarget', name: 'Exact Target', image: ''},
          {id: 'mailchimp', name: 'MailChimp', image: ''},
          {id: 'constant_contact', name: 'Constant Contact', image: ''}
        ]
      }
    ];

    $scope.selections = [
      {category:'email', vendor: 'fishbowl'},
      {category:'loyalty', vendor: 'fishbowl'},
      {category:'email', vendor: 'fishbowl'},
      {category:'email', vendor: 'fishbowl'}
    ];

  });
