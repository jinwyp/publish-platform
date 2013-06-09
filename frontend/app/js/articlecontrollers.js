'use strict';

/* App Module */
var articleapp =angular.module('articlemodule', []);

articleapp.factory('modelArticle', function(){

    var articlelist ;
    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("articlesData")) == null ){
            articlelist = [
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
        }else{
            articlelist = JSON.parse(localStorage.getItem("articlesData"));
        }
    }

    var factory = {};

    factory.getArticleList = function () {
        return  articlelist;
    };

    return factory;
});

var article = {
    m:{},
    c:{}
};
articleapp.controller(article.c);


articleapp.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
        when('/',                    {templateUrl: 'article_list_tpl.html',  controller: articleapp.controller.articleListCtrl }).
        when('/detail/:articleId',        {templateUrl: 'article_tpl.html',        controller: articleapp.controller.articleDetailCtrl }).
        otherwise({redirectTo: '/'});
}]);



/* Controllers */
articleapp.controller.articleListCtrl = function ($scope, modelArticle) {
    $scope.articlesdata = modelArticle.getArticleList();
    $scope.orderProp = 'age';
}


articleapp.controller.articleDetailCtrl = function ($scope, $routeParams, modelArticle) {
    var articleId = $scope.articleId = $routeParams.articleId;
    $scope.article = modelArticle.getArticle(articleId);
}




