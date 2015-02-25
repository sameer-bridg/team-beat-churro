'use strict';

angular.module('teamChurroApp')
  .factory('Categories', function () {

    var categories = [
      {
        id: 'email',
        name: 'Email',
        vendors: [
          {id: 'fishbowl', name: 'Fishbowl', image: 'assets/images/logos/fishbowl.png', features:['email_sending']},
          {id: 'exacttarget', name: 'Exact Target', image: 'assets/images/logos/exacttarget.png'},
          {id: 'mailchimp', name: 'MailChimp', image: 'assets/images/logos/mailchimp.png'},
          {id: 'constantcontact', name: 'Constant Contact', image: 'assets/images/logos/constantcontact.png'}
        ]
      },

      {
        id: 'loyalty',
        name: 'Loyalty',
        vendors: [
          {id: 'punchh', name: 'Punchh', image: 'assets/images/logos/punchh.png'},
          {id: 'paytronix', name: 'Paytronix', image: 'assets/images/logos/paytronix.png'},
          {id: 'fivestars', name: 'Fivestars', image: 'assets/images/logos/fivestars.png'}
        ]
      },

      {
        id: 'pos',
        name: 'POS',
        vendors: [
          {id: 'micros', name: 'Micros', image: 'assets/images/logos/micros.png'},
          {id: 'aloha', name: 'Aloha', image: 'assets/images/logos/ncraloha.png'},
          {id: 'positouch', name: 'Positouch', image: 'assets/images/logos/positouch.png'}
        ]
      },

      {
        id: 'data_insights',
        name: 'Data Insights',
        vendors: [
          {id: 'beanstalk', name: 'Beanstalk', image: ''},
          {id: 'marketingvitals', name: 'Marketing Vitals', image: 'assets/images/logos/marketingvitals.png'},
          {id: 'acxiom', name: 'Acxiom', image: 'assets/images/logos/acxiom.png'},
          {id: 'zipscene', name: 'ZipScene', image: ''},
          {id: 'dunnhumby', name: 'DunnHumby', image: ''}
        ]
      }
    ];

    var features = [
      {id: 'email_sending', name: "Email Sending", weight: 1},
      {id: 'ab_testing', name: "Email Sending", weight: 1}
    ];


    var defaultSelections = [
      {category:'email', vendor: 'fishbowl'}
    ];



    // Public API here
    return {

      get: function () {
        return categories;
      },

      default: function () {
        return defaultSelections;
      }

    };
  });
