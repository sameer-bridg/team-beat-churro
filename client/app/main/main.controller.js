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

    $scope.grade = 'B+';
    $scope.grade_A_minus_text = 'You’re amongst the top 10% of brands when it comes to data-driven marketing.';
    $scope.grade_B_plus_text = 'You’ve got great data coverage on your customers - but is your data actionable?';
    $scope.grade_B_text = 'Better than B-, not as good as B+. Are you leveraging all of your data?';
    $scope.grade_B_minus_text = 'You have most of your bases covered but there are still some obvious gaps.';
    $scope.grade_C_plus_text = 'You’ve got some cool marketing tools - but there’s still a lot you’re missing out on.';
    $scope.grade_C_text = 'Your technological capabilities are sitting around the industry average.';
    $scope.grade_C_minus_text = 'You’ve covered the basics, but you’re missing quite a few important pieces.';
    $scope.grade_D_text = 'You’re missing a major piece of marketing infrastructure.';
    $scope.grade_F_text = 'Are you sure you’re not using any other vendors?';


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

