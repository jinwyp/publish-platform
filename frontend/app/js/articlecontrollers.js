'use strict';

/* App Module */
angular.module('articlemodule', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/articledetail', {templateUrl: 'article_list_left.html',   controller: ArticleListCtrl}).
      when('/articledetail/:id', {templateUrl: 'article_list_right.html', controller: ArticleDetailCtrl}).
      otherwise({redirectTo: '/articledetail'});
}]);



/* Controllers */
function ArticleListCtrl($scope, $http) {
  $http.get('app/js/article.json').success(function(data) {
    $scope.articledetail = data;
  });

  $scope.orderProp = 'age';
}


function ArticleDetailCtrl($scope, $routeParams, $http) {
  $http.get('app/js/' + $routeParams.articlelistId + '.json').success(function(data) {
    $scope.articlelist = data;
  });
}




