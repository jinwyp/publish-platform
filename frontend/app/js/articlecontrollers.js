'use strict';

/* App Module */
var articleapp =angular.module('articlemodule', []);

pageapp.factory('modelArticle', function(){

    var articlelist = [
        {  "id": 1000, "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
            "created": "04/02/2013", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan",  "category": "Today", "categoryid":1000,
            "tags": [{ "tagid":10000, "tagname":"computer" },{ "tagid":10001, "tagname":"videocard" }]
        },

        {  "id": 1001, "title": "昨日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
            "created": "04/02/2013", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan",  "category": "Today", "categoryid":1000,
            "tags": [{ "tagid":10001, "tagname":"videocard" }]
        },

        {  "id": 1002, "title": "昨日新闻汇总 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
            "created": "04/02/2013", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan",  "category": "Today", "categoryid":1000,
            "tags": [{ "tagid":10000, "tagname":"computer" }]
        }
    ];


    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("newData")) == null ){

        }
        sitedata.headerdata=JSON.parse(localStorage.getItem("newData")) == null ? [] : JSON.parse(localStorage.getItem("newData"));
    }

    return factory;
});

var article = {
    m:{},
    c:{}
};



articleapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'article_list_left.html',   controller: ArticleListCtrl}).
      when('/articledetail/:id', {templateUrl: 'article_list_right.html', controller: ArticleDetailCtrl}).
      otherwise({redirectTo: '/'});
}]);



/* Controllers */
article.c.articlelist = function ArticleListCtrl($scope, $http) {
  $http.get('app/js/article.json').success(function(data) {
    $scope.articledetail = data;
  });

  $scope.orderProp = 'age';
}


article.c.articlelist = function ArticleDetailCtrl($scope, $routeParams, $http) {
  $http.get('app/js/' + $routeParams.articlelistId + '.json').success(function(data) {
    $scope.articlelist = data;
  });
}




