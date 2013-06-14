'use strict';

/* App Module */
var articleapp =angular.module('articlemodule', ['ui.bootstrap']);

articleapp.directive('ckEditor', function() {
    return {
        require: '?ngModel',
        link: function(scope, elm, attr, ngModel) {
            var ck = CKEDITOR.replace(elm[0]);

            if (!ngModel) return;

            ck.on('pasteState', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(ck.getData());
                });
            });

            ngModel.$render = function(value) {
                ck.setData(ngModel.$viewValue);
            };
        }
    };
});

articleapp.factory('modelArticle', function(){

    var articlelist ;
    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("articlesData")) == null || JSON.parse(localStorage.getItem("articlesData")).length == 0){
            articlelist = [
                {  "id": 1000, "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "1338364250000", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan", "clickcount":1023, "category": "Today", "categoryid":1000,
                    "tags": [
                        { "tagid":10000, "tagname":"computer" },
                        { "tagid":10001, "tagname":"videocard" }
                    ]
                },

                {  "id": 1001, "title": "昨日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "1338364250000", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan", "clickcount":13, "category": "Today", "categoryid":1000,
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

                {  "id": 1002, "title": "前日新闻汇总 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "03/03/2013", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan",  "clickcount":975, "category": "Today", "categoryid":1000,
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
                },
                {  "id": 1002, "title": "星期一新闻汇总 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "03/04/2013", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan",  "clickcount":975, "category": "Today", "categoryid":1000,
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
                },
                {  "id": 1002, "title": "星期二新闻汇总 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "03/05/2013", "published": "04/21/2013",  "author": "Eric",  "editor": "iFan",  "clickcount":975, "category": "Today", "categoryid":1000,
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

    factory.delArticleById = function (articleid) {
        for(var i = articlelist.length; i--;){
            if (articlelist[i].id == articleid) {
                articlelist.splice(i, 1);
                localStorage.setItem("articlesData",JSON.stringify(articlelist));
                return ;
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
articleapp.controller.articleList = function ($scope,  modelArticle) {
    $scope.articlesdata = modelArticle.getArticleList();
    $scope.orderProp = 'created';
    $scope.articledata = $scope.articlesdata[0];
    $scope.isCollapsed = true;

    $scope.clickArticle = function(article, index) {
        $scope.articledata = article;
		$scope.cssarticleindex = index;
    }

    $scope.delArticle = function(articleid) {
        modelArticle.delArticleById(articleid);
        $scope.articledata = $scope.articlesdata[0];
        console.log(articledata.id);
    }
}


articleapp.controller.articleDetail = function ($scope, $routeParams, modelArticle) {
    $scope.cssTagsPanel = false;

    var articleId = $routeParams.articleId;
    $scope.articledata = modelArticle.getArticleById(articleId);

    $scope.$on('$viewContentLoaded', function () {
        console.log("$viewContentLoaded");
    });

    $scope.delArticle = function(articleid) {
        modelArticle.delArticleById(articleid);
        alert('Deleted');
        $scope.articledata = modelArticle.getArticleList()[0];

    }

/*    $scope.showTagsPanel = function(articleid) {
        $scope.cssTagsPanel = !$scope.cssTagsPanel;
    }*/
}

articleapp.controller.articleSave = function ($scope, $routeParams, modelArticle) {
    var articleId = $routeParams.articleId;
    $scope.articledata = modelArticle.getArticleById(articleId);
}




