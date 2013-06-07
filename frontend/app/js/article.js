'use strict';

/* App Module */

angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'article_list_left.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'article_list_right.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);



/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('app/js/article.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];


function PhoneDetailCtrl($scope, $routeParams, $http) {
  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
  });
}



