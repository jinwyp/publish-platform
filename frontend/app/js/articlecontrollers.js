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
                    "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",  "author": "Eric",  "editor": "iFan", "clickcount":1023, "category": "Today", "categoryid":1000,
                    "tags": [
                        { "tagid":10000, "tagname":"computer" },
                        { "tagid":10001, "tagname":"videocard" }
                    ],
                    "revision" : [
                        {
                            "versionid" :  1 ,
                            "versionnum" :  1 ,
                            "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": [
                                { "tagid":10000, "tagname":"computer" },
                                { "tagid":10001, "tagname":"videocard" }
                            ]
                        },
                        {
                            "versionid" :  2 ,
                            "versionnum" :  2 ,
                            "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": [
                                { "tagid":10000, "tagname":"computer" },
                                { "tagid":10001, "tagname":"videocard" }
                            ]
                        }
                    ]
                },

                {  "id": 1001, "title": "昨日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "1370361600000", "updated": "1370361600000", "published": "1370361600000",  "author": "Eric",  "editor": "iFan", "clickcount":13, "category": "Today", "categoryid":1000,
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
                    ],
                    "revision" : [
                        {
                            "versionid" :  1 ,
                            "versionnum" :  1 ,
                            "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": [
                                { "tagid":10000, "tagname":"computer" },
                                { "tagid":10001, "tagname":"videocard" }
                            ]
                        },
                        {
                            "versionid" :  2 ,
                            "versionnum" :  2 ,
                            "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": [
                                { "tagid":10000, "tagname":"computer" },
                                { "tagid":10001, "tagname":"videocard" }
                            ]
                        }
                    ]
                },

                {  "id": 1002, "title": "前日新闻汇总 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "1370188800000", "updated": "1370361600000", "published": "1370188800000",  "author": "Eric",  "editor": "iFan",  "clickcount":975, "category": "Today", "categoryid":1000,
                    "tags": [
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" }
                    ],
                    "revision" : [
                        {
                            "versionid" :  1 ,
                            "versionnum" :  1 ,
                            "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": [
                                { "tagid":10000, "tagname":"computer" },
                                { "tagid":10001, "tagname":"videocard" }
                            ]
                        },
                        {
                            "versionid" :  2 ,
                            "versionnum" :  2 ,
                            "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": [
                                { "tagid":10000, "tagname":"computer" },
                                { "tagid":10001, "tagname":"videocard" }
                            ]
                        }
                    ]
                },
                {  "id": 1003, "title": "星期一新闻汇总 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "1370102400000", "updated": "1370361600000", "published": "1370102400000",  "author": "Eric",  "editor": "iFan",  "clickcount":975, "category": "Today", "categoryid":1000,
                    "tags": [
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" }
                    ],
                    "revision" : [
                        {
                            "versionid" :  1 ,
                            "versionnum" :  1 ,
                            "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": [
                                { "tagid":10000, "tagname":"computer" },
                                { "tagid":10001, "tagname":"videocard" }
                            ]
                        },
                        {
                            "versionid" :  2 ,
                            "versionnum" :  2 ,
                            "title": "今日新闻 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": [
                                { "tagid":10000, "tagname":"computer" },
                                { "tagid":10001, "tagname":"videocard" }
                            ]
                        }
                    ]
                },
                {  "id": 1004, "title": "星期二新闻汇总 multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "1370016000000", "updated": "1370361600000", "published": "1370016000000",  "author": "Eric",  "editor": "iFan",  "clickcount":975, "category": "Today", "categoryid":1000,
                    "tags": [
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" },
                        { "tagid":10005, "tagname":"期货" },
                        { "tagid":10006, "tagname":"白银" }
                    ],
                    "revision" : []
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

    factory.saveArticle = function (articledata) {
        for(var i = articlelist.length; i--;){
            if (articlelist[i].id == articledata.id) {
                articlelist[i] = articledata;
                localStorage.setItem("articlesData",JSON.stringify(articlelist));
                return ;
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

    factory.createNewArticle = function (articledata) {
        articlelist.push(articledata);
       // localStorage.setItem("articlesData",JSON.stringify(articlelist));
        return ;
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
        when('/',                      {templateUrl: 'article_list_tpl.html', controller: articleapp.controller.articleList }).
        when('/newarticle',          {templateUrl: 'article_new_tpl.html', controller: articleapp.controller.articleCreateNew }).
        when('/detail/:articleId',  {templateUrl: 'article_detail_tpl.html', controller: articleapp.controller.articleDetail }).

        otherwise({redirectTo: '/'});
}]);



/* Controllers */
articleapp.controller.articleList = function ($scope,  modelArticle) {
    $scope.articlesdata = modelArticle.getArticleList();
    $scope.orderProp = 'created';
    $scope.articlepreviewdata = $scope.articlesdata[0];
    $scope.isCollapsed = true;

    $scope.clickArticle = function(article, index) {
        $scope.articlepreviewdata = article;
        $scope.cssarticleindex = index;
    };

    $scope.openModal = function () {
        $scope.cssmodalshow = true;
    };
    $scope.closeModal = function () {
        $scope.cssmodalshow = false;    //关闭弹出提示框 Modal
    };
    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

    $scope.delArticle = function(articleid) {
        $scope.cssmodalshow = false;      //关闭弹出提示框 Modal
        modelArticle.delArticleById(articleid);
        $scope.articlepreviewdata = $scope.articlesdata[0];
    };
};


articleapp.controller.articleDetail = function ($scope, $routeParams, modelArticle) {
    $scope.cssTagsPanel = false;
    var articleId = $routeParams.articleId;
    $scope.articledata = [];
    $scope.articledata = modelArticle.getArticleById(articleId);


    for(var i=0;i<$scope.articledata.tags.length;i++){
        $('#tagsinput').addTag($scope.articledata.tags[i].tagname);
    }
    $("#tagsinput").tagsInput();  //初始化 加载tag标签


    $scope.showTagsPanel = function() {
        $scope.cssTagsPanel = !$scope.cssTagsPanel;
    }


    $scope.openModal = function () {
        $scope.cssmodalshow = true;
    };
    $scope.closeModal = function () {
        $scope.cssmodalshow = false;   //关闭弹出提示框 Modal
    };
    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

    $scope.delArticle = function(articleid) {
        $scope.cssmodalshow = false;  //关闭弹出提示框 Modal
        modelArticle.delArticleById(articleid);
        //alert('Article Deleted');
        $scope.articledata = modelArticle.getArticleList()[0];
    };

    $scope.saveArticle = function() {
        //增加版本保存功能
        var newrevisionid = $scope.articledata.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
            "title" : $scope.articledata.title, "contentbody": $scope.articledata.contentbody, "status": $scope.articledata.status,
            "created": $scope.articledata.created, "updated": $scope.articledata.updated, "published": $scope.articledata.published,
            "author": $scope.articledata.author,  "editor": $scope.articledata.editor,  "clickcount":$scope.articledata.clickcount,
            "category": $scope.articledata.category, "categoryid": $scope.articledata.categoryid,
            "tags": $scope.articledata.tags
        };

        $scope.articledata.revision.push(newrevision);
        modelArticle.saveArticle($scope.articledata);
        alert('Article Saved');
    }
}





/*"tags": [
    { "tagid":10000, "tagname":"computer" },
    { "tagid":10001, "tagname":"videocard" }
]*/
articleapp.controller.articleCreateNew = function ($scope, $routeParams, modelArticle) {


    var articleslistdata = modelArticle.getArticleList();
    var newid = articleslistdata[articleslistdata.length-1].id + 1;
    $scope.newarticleadata = {
        "id": newid,
        "title": "pls input title", "contentbody": "", "status": "needreview",
        "created": "1370016000000", "updated": "1370361600000", "published": "1370016000000",
        "author": "Eric",  "editor": "iFan",  "clickcount":1, "category": "Today", "categoryid":1000,
        "tags": [],
        "revision" : []
    }

    $("#tagsinput").tagsInput();  //初始化 加载tag标签
    $scope.cssTagsPanel = false;

    var tagmaxid = 10000;
    $scope.createNewArticle = function() {
        var taglist = $("#tagsinput").exportTags();
        $scope.newarticleadata.tags=[];
        for(var i=0;i<taglist.length;i++){
            tagmaxid++ ;
            var newtag = {
                "tagid":tagmaxid,
                "tagname": taglist[i]
            }
            $scope.newarticleadata.tags.push(newtag);
        }

        var newrevisionid = $scope.newarticleadata.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
            "title" : $scope.newarticleadata.title, "contentbody": $scope.newarticleadata.contentbody, "status": $scope.newarticleadata.status,
            "created": $scope.newarticleadata.created, "updated": $scope.newarticleadata.updated, "published": $scope.newarticleadata.published,
            "author": $scope.newarticleadata.author,  "editor": $scope.newarticleadata.editor,  "clickcount":$scope.newarticleadata.clickcount,
            "category": $scope.newarticleadata.category, "categoryid": $scope.newarticleadata.categoryid,
            "tags":$scope.newarticleadata.tags
        };
        $scope.newarticleadata.revision.push(newrevision);

        modelArticle.createNewArticle($scope.newarticleadata);
        console.log( $scope.newarticleadata);
    }
}

