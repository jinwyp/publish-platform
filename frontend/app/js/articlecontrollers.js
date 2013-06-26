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

    var articlelist=[],taglist=[];
    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("articlesData")) == null || JSON.parse(localStorage.getItem("articlesData")).length == 0){
            articlelist=[];
            taglist=[];
           /* articlelist = [
                {  "id": 1000, "title": "???? multiple partial views in angularjs111.", "contentbody": "<b>111111</b>", "status": "needreview",
                    "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",  "author": "Eric",  "editor": "iFan", "clickcount":1023, "category": "Today", "categoryid":1000,
                    "tags": [
                        { "tagid":10000, "tagname":"computer" },
                        { "tagid":10001, "tagname":"videocard" }
                    ],
                    "revision" : [
                        {
                            "versionid" :  1 ,
                            "versionnum" :  1 ,
                            "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": []
                        },
                        {
                            "versionid" :  2 ,
                            "versionnum" :  2 ,
                            "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
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

                {  "id": 1001, "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "1370361600000", "updated": "1370361600000", "published": "1370361600000",  "author": "Eric",  "editor": "iFan", "clickcount":13, "category": "Today", "categoryid":1000,
                    "tags": [],
                    "revision" : [
                        {
                            "versionid" :  1 ,
                            "versionnum" :  1 ,
                            "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
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
                            "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
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

                {  "id": 1002, "title": "?????? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                    "created": "1370188800000", "updated": "1370361600000", "published": "1370188800000",  "author": "Eric",  "editor": "iFan",  "clickcount":975, "category": "Today", "categoryid":1000,
                    "tags": [],
                    "revision" : [
                        {
                            "versionid" :  1 ,
                            "versionnum" :  1 ,
                            "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
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
                            "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
                            "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
                            "author": "Eric",  "editor": "iFan", "clickcount":1023,
                            "category": "Today", "categoryid":1000,
                            "tags": [
                                { "tagid":10000, "tagname":"computer" },
                                { "tagid":10001, "tagname":"videocard" }
                            ]
                        }
                    ]
                }
            ];

            var taglist = [
                { "tagid":10001, "tagname":"computer" },
                { "tagid":10002, "tagname":"videocard" }
            ];
*/

        }else{
            articlelist = JSON.parse(localStorage.getItem("articlesData"));
            taglist = JSON.parse(localStorage.getItem("tagsData"));
        }
   }

    var factory = {};

    factory.getArticleList = function () {
        return  articlelist;
    };

    factory.getArticleById = function (articleid) {
        for(var i = 0;i < articlelist.length; i++){
            if (articlelist[i].id == articleid) {
                return articlelist[i];
            }
        }
    };

    factory.getMaxArticleID = function () {
        var articlemaxid;
        if(articlelist.length==0){
            articlemaxid=1001;
        }else{
            articlemaxid = articlelist[0].id + 1;
        }
        return articlemaxid;
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
                return;
            }
        }
    };

    factory.createNewArticle = function (articledata) {
        articlelist.push(articledata);
        localStorage.setItem("articlesData",JSON.stringify(articlelist));
        return ;
    };


    factory.getTagList = function () {
        return taglist;
    };

    factory.getMaxTagID = function () {
        factory.getTagList();
        var tagmaxid;
        if(taglist.length==0){
            tagmaxid=10001;
        }else{
            tagmaxid = taglist[taglist.length-1].tagid + 1;
        }
        return tagmaxid;
    };

    factory.checkTagExist = function (tagname) {
        var tagresult = _.findWhere(taglist, {tagname: tagname});
        if (tagresult === undefined) {
            return false;
        }else{
            console.log(tagresult);
            return tagresult;
        }
    };

    factory.createNewTag = function (tagdata) {
        taglist.push(tagdata);
        localStorage.setItem("tagsData",JSON.stringify(taglist));
        return tagdata;
    };

    factory.getDateNow = function () {
        var newdate = new Date().getTime();
        return newdate;
    };

    return factory;
});



articleapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/',                      {templateUrl: 'article_list_tpl.html', controller: articleapp.controller.articleList }).
        when('/newarticle',          {templateUrl: 'article_new_tpl.html', controller: articleapp.controller.articleCreateNew }).
        when('/detail/:articleId',  {templateUrl: 'article_detail_tpl.html', controller: articleapp.controller.articleDetail }).

        otherwise({redirectTo: '/'});
}]);



/* Controllers */
articleapp.controller.articleList = function ($scope,  modelArticle) {
    //获取全部数据
    $scope.articlestotaldata = modelArticle.getArticleList();

    //排序所有数据
    $scope.loadinit = function(flag){
        for(var i = 0; i < $scope.articlestotaldata.length; i++){
               for(var j = 0;j < $scope.articlestotaldata.length; j++){
                   if(flag == 'create'){
                       if($scope.articlestotaldata[i].created > $scope.articlestotaldata[j].created){
                           var param1 = $scope.articlestotaldata[i];
                           $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                           $scope.articlestotaldata[j] = param1;
                       }
                   }else if(flag == 'published'){
                       if($scope.articlestotaldata[i].published > $scope.articlestotaldata[j].published){
                           var param1 = $scope.articlestotaldata[i];
                           $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                           $scope.articlestotaldata[j] = param1;
                       }
                   }else if(flag == 'updated'){
                       if($scope.articlestotaldata[i].updated > $scope.articlestotaldata[j].updated){
                           var param1 = $scope.articlestotaldata[i];
                           $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                           $scope.articlestotaldata[j] = param1;
                       }
                   }else if(flag == 'clickcount'){
                       if($scope.articlestotaldata[i].clickcount > $scope.articlestotaldata[j].clickcount){
                           var param1 = $scope.articlestotaldata[i];
                           $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                           $scope.articlestotaldata[j] = param1;
                       }
                   }
               }
        }
    }
    //debugger;
    $scope.loadinit('updated');
    $(".checkbox, .radio").prepend("<span class='icon'></span><span class='icon-to-fade'></span>");
    $("#updated").attr("checked",true);
    $("#create").attr("checked",false);
    $("#published").attr("checked",false);
    $("#clickcount").attr("checked",false);
    setupLabel();
    //页面总数
    var count=10;
    $scope.noOfPages =parseInt($scope.articlestotaldata.length/count)+1;

    //当前页数
    $scope.currentPage = 1;
    $scope.articlesdata = [];
    //获取选中数据
    $scope.loadcurrentpagedata = function(){
        $scope.articlesdata.length = 0;
        if($scope.noOfPages != 0){
            if($scope.currentPage > $scope.noOfPages){
                $scope.currentPage = $scope.noOfPages;
            }
        }
        var j = 0;
        for(var i = (($scope.currentPage-1)*count);i < $scope.articlestotaldata.length;i ++){
            $scope.articlesdata[j] = $scope.articlestotaldata[i];
            j++;
            if($scope.articlesdata.length > (count-1)){
                return;
            }
        }
    }

    $scope.loadcurrentpagedata();

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
        $scope.articlestotaldata = modelArticle.getArticleList();
        $scope.noOfPages = Math.round($scope.articlestotaldata.length/2);

        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
    }

    //显示List详细内容
    $scope.loadhtml = function(val) {
        return val;
    }

    //点击页面
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    //检测currentPage值
    $scope.$watch('currentPage', function(newPage){
        $scope.watchPage = newPage;
        $scope.loadcurrentpagedata();
    });

    //按类型排序
    $scope.orderbytype=function(flag){
        $scope.loadinit(flag);
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];

        $("#"+flag)[0].checked=true;
    }
}




articleapp.controller.articleDetail = function ($scope, $routeParams, modelArticle) {
    $scope.cssTagsPanel = false;
    $("select").dropkick();
    var articleId = $routeParams.articleId;
    $scope.articledata = modelArticle.getArticleById(articleId);
    $(".dk_label")[0].textContent=$scope.articledata.category;

    var tagstr = '';
    for(var i=0;i<$scope.articledata.tags.length;i++){
        tagstr += $scope.articledata.tags[i].tagname+',';
    }
    $('.tagsinput').importTags(tagstr);
    $(".tagsinput").tagsInput();    //初始化 加载tag标签


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

    $scope.saveArticle = function(feed) {
        if (feed.$valid) {
            //保存tags功能
            var temptagslistname = $(".tagsinput").exportTags();
            $scope.articledata.tags = [];
            for(var i=0;i<temptagslistname.length;i++){
                //在tag 数据库查询是否是已经存在的tag
                if(  modelArticle.checkTagExist(temptagslistname[i]) ){
                    var newtag = modelArticle.checkTagExist(temptagslistname[i]);
                }else{
                    var newtag = {
                        "tagid" : modelArticle.getMaxTagID(),
                        "tagname" : temptagslistname[i]
                    }
                    modelArticle.createNewTag(newtag);
                }
                $scope.articledata.tags.push(newtag);
            }

            $scope.articledata.updated=modelArticle.getDateNow();
            $scope.articledata.category=$(".dk_label")[0].textContent;

            //增加版本保存功能
            var newrevisionid = $scope.articledata.revision.length + 1;
            var newrevision = {
                "versionid" :  newrevisionid ,
                "versionnum" :  newrevisionid ,
                "title" : $scope.articledata.title, "contentbody": $scope.articledata.contentbody, "status": $scope.articledata.status,
                "created": $scope.articledata.created, "updated":modelArticle.getDateNow(), "published": $scope.articledata.published,
                "author": $scope.articledata.author,  "editor": $scope.articledata.editor,  "clickcount":$scope.articledata.clickcount,
                "category": $scope.articledata.category, "categoryid": $scope.articledata.categoryid,
                "tags": $scope.articledata.tags
            };

            $scope.articledata.revision.push(newrevision);
            modelArticle.saveArticle($scope.articledata);
        };
    }



    $scope.publisharticle=function(){
        $scope.articledata.published=modelArticle.getDateNow();
        modelArticle.saveArticle($scope.articledata);
    };

    //显示Edit预览内容
    $scope.showeditpreview = function(val){
        return val;
    };

    $scope.displayversioninfo=function(data){
       // var data=$scope.articledata.revision[index];
        $scope.articledata.title=data.title;
        $scope.articledata.contentbody=data.contentbody;
        $scope.articledata.tags=data.tags;
        var tagstr = '';
        for(var i=0;i<$scope.articledata.tags.length;i++){
            tagstr += $scope.articledata.tags[i].tagname+',';
        }
        $('.tagsinput').importTags(tagstr);
    }
};

articleapp.controller.articleCreateNew = function ($scope, $routeParams, $location, modelArticle) {
   $(".tagsinput").tagsInput({
        'autocomplete': modelArticle.getTagList()
    });   //初始化 加载tag标签

    $("select").dropkick();
    $scope.newarticleadata = {
        "id": modelArticle.getMaxArticleID(),
        "title": "", "contentbody": "", "status": "needreview",
        "created": modelArticle.getDateNow(), "updated": modelArticle.getDateNow(), "published": modelArticle.getDateNow(),
        "author": "Eric",  "editor": "iFan",  "clickcount":0,
        "category": "Today", "categoryid":1000,
        "tags": [],
        "revision" : []
    }

    $scope.cssTagsPanel = false;

    $scope.createNewArticle = function(feed) {
        if (feed.$valid) {
            var temptagslistname = $(".tagsinput").exportTags();
            $scope.newarticleadata.tags=[];
            for(var i=0;i<temptagslistname.length;i++){
                //在tag 数据库查询是否是已经存在的tag
                if(modelArticle.checkTagExist(temptagslistname[i])){

                    var newtag = modelArticle.checkTagExist(temptagslistname[i]);
                }else{
                    var newtag = {
                        "tagid" : modelArticle.getMaxTagID(),
                        "tagname" : temptagslistname[i]
                    }
                    modelArticle.createNewTag(newtag);
                }
                $scope.newarticleadata.tags.push(newtag);
            }
            $scope.newarticleadata.category=$(".dk_label")[0].textContent;
            //增加文章每一次修改版本信息
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

            //保存文章
            modelArticle.createNewArticle($scope.newarticleadata);
            $location.path('/');
        }
    }

    //显示Insert预览内容
    $scope.showinserthtml = function(val){
        return val;
    }

    $scope.addFeed = function(feed) {
        if (feed.$valid) {
            // Copy this feed instance and reset the URL in the form
            $scope.feeds.push(feed);
            $scope.newFeed.url = {};
        }
    };

}

