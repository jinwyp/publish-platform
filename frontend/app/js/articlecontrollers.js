'use strict';

/* App Module */
var articleapp =angular.module('articlemodule', ['ui.bootstrap']);

articleapp.factory('modelArticle', function(){

    var articlelist ;
    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("articlesData")) == null ){
            articlelist = [
                {  "id": 1000, "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "04/01/2013", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan", "clickcount":1023, "category": "Today", "categoryid":1000,
                    "tags": [
                        { "tagid":10000, "tagname":"computer" },
                        { "tagid":10001, "tagname":"videocard" }
                    ]
                },

                {  "id": 1001, "title": "昨日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "04/03/2013", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan", "clickcount":13, "category": "Today", "categoryid":1000,
                    "tags": [
                        { "tagid":10003, "tagname":"财经" },
                        { "tagid":10004, "tagname":"黄金" },
                        { "tagid":10003, "tagname":"财经" },
                        { "tagid":10004, "tagname":"黄金" },
                        { "tagid":10003, "tagname":"财经" },
                        { "tagid":10004, "tagname":"黄金" },
                        { "tagid":10003, "tagname":"财经" },
                        { "tagid":10004, "tagname":"黄金" },
                        { "tagid":10003, "tagname":"财经" },
                        { "tagid":10004, "tagname":"黄金" },
                        { "tagid":10003, "tagname":"财经" },
                        { "tagid":10004, "tagname":"黄金" }
                    ]
                },

                {  "id": 1002, "title": "昨日新闻汇总 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "03/02/2013", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan",  "clickcount":975, "category": "Today", "categoryid":1000,
                    "tags": [
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" }
                    ]
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

    factory.getArticleById = function (articleid) {
        for(var i = articlelist.length; i--;){
            if (articlelist[i].id == articleid) {
                 return articlelist[i];
            }
        }
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
        when('/',                    {templateUrl: 'article_list_tpl.html',  controller: articleapp.controller.articleList }).
        when('/detail/:articleId',        {templateUrl: 'article_detail_tpl.html',        controller: articleapp.controller.articleDetail }).
        otherwise({redirectTo: '/'});
}]);



/* Controllers */
articleapp.controller.articleList = function ($scope, modelArticle) {
    $scope.articlesdata = modelArticle.getArticleList();
    $scope.orderProp = 'created';
    $scope.articledata = $scope.articlesdata[0];
    $scope.isCollapsed = true;

    $scope.clickArticle = function(article) {
        $scope.articledata = article;
        console.log(article.id);
    }
}


articleapp.controller.articleDetail = function ($scope, $routeParams, modelArticle) {
    var articleId = $routeParams.articleId;
    $scope.articledata = modelArticle.getArticleById(articleId);
}

articleapp.controller.articleSave = function ($scope, $routeParams, modelArticle) {
    var articleId = $routeParams.articleId;
    $scope.articledata = modelArticle.getArticleById(articleId);
}




