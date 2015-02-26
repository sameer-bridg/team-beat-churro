'use strict';

angular.module('teamChurroApp')
  .controller('MainCtrl', function ($scope, Categories) {

    $scope.categories = Categories.get();
    $scope.defaultSelections = Categories.default();

    $scope.user = {
      companyName: ''
    };
    $scope.newVendors = [];
    $scope.MAX_COLUMNS = 5;

    $scope.toggleVendor = function(category, vendor) {
      vendor.selected = !vendor.selected;
    };

    $scope.selectNone = function (category) {
      _.map(category.vendors, function (vendor) {
        vendor.selected = false;
        return vendor;
      })
    };

    $scope.submitNewVendor = function (category, vendor) {
      if(vendor) {
        category.vendors.push({id: 'new', name: vendor, selected: true});
      }
    };


    $scope.range = function(n) {
      return new Array(n);
    };

    $scope.grade = 'C+';
    $scope.grade_A_minus_text = 'You’re amongst the top 10% of brands when it comes to data-driven marketing.';
    $scope.grade_B_plus_text = 'You’ve got great data coverage on your customers - but is your data actionable?';
    $scope.grade_B_text = 'Better than B-, not as good as B+. Are you leveraging all of your data?';
    $scope.grade_B_minus_text = 'You have most of your bases covered but there are still some obvious gaps.';
    $scope.grade_C_plus_text = 'You’ve got some cool marketing tools - but there’s still a lot you’re missing out on.';
    $scope.grade_C_text = 'Your technological capabilities are sitting around the industry average.';
    $scope.grade_C_minus_text = 'You’ve covered the basics, but you’re missing quite a few important pieces.';
    $scope.grade_D_text = 'You’re missing a major piece of marketing infrastructure.';
    $scope.grade_F_text = 'Are you sure you’re not using any other vendors?';

    $scope.features = [
      { id: "email_sending", name: "Email Sending", weight: 1, selected: true,
        pos: "You're able to deliver optimized emails to your entire customer database.",
        neg: "Email marketing is still the most effective channel for marketing campaigns."},
      { id: "ab_testing", name: "A/B testing", weight: 1,
        pos: "You're able to run A/B tests on all of your marketing campaigns.",
        neg: "A/B testing will help you iterate and improve on all of your marketing campaigns."},
      { id: "personalized_messaging", name: "Personalized messaging", weight: 2, selected: true,
        pos: "You're able to deliver personalized messages to specific customers segments.",
        neg: "Adding personalization to your email messaging would boost campaign results."},
      { id: "campaign_automation", name: "Campaign Automation", weight: 2,
        pos: "You're able saving time and money with fully automated marketing campaigns.",
        neg: "You could be saving time and money with automated marketing campaigns."},
      { id: "loyalty_tracking", name: "Loyalty Tracking", weight: 1, selected: true,
        pos: "You have a rich customer database thanks to your loyalty program.",
        neg: "Implementing a loyalty program will help you build a richer customer database."},
      { id: "coupons_rewards", name: "Coupons and Rewards", weight: 1,
        pos: "You're using coupons and rewards to help bolster customer loyalty.",
        neg: "Coupons and rewards are a great way of improving customer loyalty."},
      { id: "website_customization", name: "Website customization", weight: 1,
        pos: "Your website is optimized for customer database growth.",
        neg: "Your website could be better optimized for customer database growth."},
      { id: "customer_db_building", name: "Customer database building", weight: 1, selected: true,
        pos: "You're capturing customer data both from both in-store and online traffic",
        neg: "Improving in-store and online capture would dramatically improve database growth."},
      { id: "segmentation", name: "Segmentation", weight: 3,
        pos: "You're customer data is organized into specific customer segments.",
        neg: "Sorting your customers into segments would allow for more intelligent marketing campaigns."},
      { id: "predict", name: "Predictive Technology", weight: 3,
        pos: "You're leveraging predictive technology to make more intelligent business decisions",
        neg: "By leveraging predictive technology you could improve your business decision making."},
      { id: "pos", name: "POS integration", weight: 2,
        pos: "You have easy access to your customer transaction data.",
        neg: "POS software will give you access to all of your customer transaction data."},
      { id: "roi", name: "ROI Reports on Marketing Campaigns", weight: 2,
        pos: "You can connect each of your marketing campaigns to a real sales result.",
        neg: "Real-time ROI reporting would allow you to connect each campaign a real sales result."}
    ];

    (function () {
      processSelections($scope.defaultSelections, $scope.categories);
    })();
  });


function processSelections(selections, categories) {
  _.each(selections, function (selection) {
    var category = _.find(categories, {id: selection.category});
    if(category) {
      var vendor = _.find(category.vendors, {id: selection.vendor});
      vendor.selected = true;
    }
  });
}

