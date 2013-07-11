'use strict';

/* App Module */

var articleapp = angular.module('vcpmodule', ['ui.bootstrap', 'vcpmodule.directive']);



articleapp.factory('modelArticle', function(){

    var articlelist=[],taglist=[];
    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("articlesData")) == null || JSON.parse(localStorage.getItem("articlesData")).length == 0){
            articlelist=[{"id":1002,"title":"Is Higher Education Still A Good Investment?","contentbody":"<div class=\"content-image\" style=\"border: 1px solid rgb(204, 204, 204); text-align: center; padding: 6px; float: left; margin: 4px 18px 10px 0px; width: 380px; color: rgb(17, 17, 17); font-family: Verdana, Geneva, sans-serif; line-height: 19.5px;\"><img alt=\"Is Higher Education Still A Good Investment?\" src=\"http://i.investopedia.com/dimages/graphics/78617523_0.jpg\" style=\"border: none; width: 380px; max-width: 498px;\" /></div>\n\n<div class=\"content\" style=\"color: rgb(17, 17, 17); font-family: Verdana, Geneva, sans-serif; line-height: 19.5px;\">While the opportunity to pursue a course of higher education&nbsp;<a href=\"http://www.investopedia.com/articles/personal-finance/062113/it-foolish-strive-american-dream.asp\" style=\"color: rgb(0, 102, 204); text-decoration: none; cursor: pointer;\">was once a fundamental part of the American Dream</a>, it is now a trail fraught with risk and cumulative debt. Collectively, graduates in the U.S. currently carry $1 trillion in student debt, which is hindering their ability to establish businesses, create job opportunities and take their first steps on the property ladder. While some may consider rising levels of student debt to be an inevitable consequence of the global recession, subsequent education cuts are only serving to exacerbate the situation.<br />\n<br />\nAccording to research conducted by the&nbsp;<a href=\"http://www.cbpp.org/\" style=\"color: rgb(0, 102, 204); text-decoration: none; cursor: pointer;\" target=\"_blank\">Center on Budget and Policy Priorities</a>&nbsp;in 2012, 26 states were set to slash spending during the current fiscal year, while 35 local authorities continue to invest at a lower rate than before the recession. At the same time, college fees continue to rise at a faster rate than inflation, meaning that students are effectively investing in inferior educations that can no longer guarantee employment or a suitable level of future remuneration.<br />\n<br />\n<strong>Higher Education and the Job Market</strong><br />\nThe combination of&nbsp;<a href=\"http://www.investopedia.com/financial-edge/0112/the-increasing-costs-of-college.aspx\" style=\"color: rgb(0, 102, 204); text-decoration: none; cursor: pointer;\">soaring tuition fees</a>, diminishing employment prospects and reduced government spending has changed the face of higher education in the U.S. and left many questioning whether it still represents a sound financial investment. The fact remains that students pursue higher education in order to gain specific academic qualifications, which in turn ensures that they are employable within their chosen fields. As the U.S. job market continues to sustain a weak and sluggish recovery, parents and aspiring graduates are reluctant to invest in education that is unlikely to secure financial and professional security.<br />\n<br />\nThe U.S. economy created 175,000 jobs during May 2013, and while the unemployment rate increased slightly to 7.6%, this still represents a significant improvement on the corresponding figures from last year. These statistics are misleading, however, as they distort the weakest labor market recovery since World War II. Essentially, the majority of job opportunities that are being created deliver less than living wages. A recent report by public policy group Demos suggests that various forms of government investment in the private sector have created nearly two million jobs that pay just $12 an hour or less.</div>\n","status":"draft","created":1373525512999,"updated":1373525512999,"published":1373525512999,"author":"Eric","editor":"iFan","clickcount":0,"category":"Cosmetics","categoryid":1000,"tags":[{"tagid":10001,"tagname":"Personal Debt","$$hashKey":"00L"},{"tagid":10002,"tagname":"Economic","$$hashKey":"00M"}],"revision":[{"versionid":1,"versionnum":1,"title":"Is Higher Education Still A Good Investment?","contentbody":"<div class=\"content-image\" style=\"border: 1px solid rgb(204, 204, 204); text-align: center; padding: 6px; float: left; margin: 4px 18px 10px 0px; width: 380px; color: rgb(17, 17, 17); font-family: Verdana, Geneva, sans-serif; line-height: 19.5px;\"><img alt=\"Is Higher Education Still A Good Investment?\" src=\"http://i.investopedia.com/dimages/graphics/78617523_0.jpg\" style=\"border: none; width: 380px; max-width: 498px;\" /></div>\n\n<div class=\"content\" style=\"color: rgb(17, 17, 17); font-family: Verdana, Geneva, sans-serif; line-height: 19.5px;\">While the opportunity to pursue a course of higher education&nbsp;<a href=\"http://www.investopedia.com/articles/personal-finance/062113/it-foolish-strive-american-dream.asp\" style=\"color: rgb(0, 102, 204); text-decoration: none; cursor: pointer;\">was once a fundamental part of the American Dream</a>, it is now a trail fraught with risk and cumulative debt. Collectively, graduates in the U.S. currently carry $1 trillion in student debt, which is hindering their ability to establish businesses, create job opportunities and take their first steps on the property ladder. While some may consider rising levels of student debt to be an inevitable consequence of the global recession, subsequent education cuts are only serving to exacerbate the situation.<br />\n<br />\nAccording to research conducted by the&nbsp;<a href=\"http://www.cbpp.org/\" style=\"color: rgb(0, 102, 204); text-decoration: none; cursor: pointer;\" target=\"_blank\">Center on Budget and Policy Priorities</a>&nbsp;in 2012, 26 states were set to slash spending during the current fiscal year, while 35 local authorities continue to invest at a lower rate than before the recession. At the same time, college fees continue to rise at a faster rate than inflation, meaning that students are effectively investing in inferior educations that can no longer guarantee employment or a suitable level of future remuneration.<br />\n<br />\n<strong>Higher Education and the Job Market</strong><br />\nThe combination of&nbsp;<a href=\"http://www.investopedia.com/financial-edge/0112/the-increasing-costs-of-college.aspx\" style=\"color: rgb(0, 102, 204); text-decoration: none; cursor: pointer;\">soaring tuition fees</a>, diminishing employment prospects and reduced government spending has changed the face of higher education in the U.S. and left many questioning whether it still represents a sound financial investment. The fact remains that students pursue higher education in order to gain specific academic qualifications, which in turn ensures that they are employable within their chosen fields. As the U.S. job market continues to sustain a weak and sluggish recovery, parents and aspiring graduates are reluctant to invest in education that is unlikely to secure financial and professional security.<br />\n<br />\nThe U.S. economy created 175,000 jobs during May 2013, and while the unemployment rate increased slightly to 7.6%, this still represents a significant improvement on the corresponding figures from last year. These statistics are misleading, however, as they distort the weakest labor market recovery since World War II. Essentially, the majority of job opportunities that are being created deliver less than living wages. A recent report by public policy group Demos suggests that various forms of government investment in the private sector have created nearly two million jobs that pay just $12 an hour or less.</div>\n","status":"draft","created":1373525512999,"updated":1373525512999,"published":1373525512999,"author":"Eric","editor":"iFan","clickcount":0,"category":"Cosmetics","categoryid":1000,"tags":[{"tagid":10001,"tagname":"Personal Debt","$$hashKey":"00L"},{"tagid":10002,"tagname":"Economic","$$hashKey":"00M"}],"versioncomment":"","reviewcomment":"","$$hashKey":"00F"}],"versioncomment":"","reviewcomment":""},{"id":1001,"title":"Why AngularJS?","contentbody":"<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><img alt=\"\" src=\"http://angularjs.org/img/AngularJS-small.png\" style=\"width: 95px; height: 25px;\" /></p>\n","status":"draft","created":1373524505212,"updated":1373524505212,"published":1373524505213,"author":"Eric","editor":"iFan","clickcount":0,"category":"Cosmetics","categoryid":1000,"tags":[],"revision":[{"versionid":1,"versionnum":1,"title":"Why AngularJS?","contentbody":"<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><span style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 18px;\">HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</span></p>\n\n<p><img alt=\"\" src=\"http://angularjs.org/img/AngularJS-small.png\" style=\"width: 95px; height: 25px;\" /></p>\n","status":"draft","created":1373524505212,"updated":1373524505212,"published":1373524505213,"author":"Eric","editor":"iFan","clickcount":0,"category":"Cosmetics","categoryid":1000,"tags":[],"versioncomment":"","reviewcomment":"","$$hashKey":"00E"}],"versioncomment":"","reviewcomment":"","comment":"article1"},{"id":1003,"title":"The Best Entry-Level Finance Jobs For 2013","contentbody":"<div class=\"content-image\" style=\"border: 1px solid rgb(204, 204, 204); text-align: center; padding: 6px; float: left; margin: 4px 18px 10px 0px; width: 380px; color: rgb(17, 17, 17); font-family: Verdana, Geneva, sans-serif; line-height: 19.5px;\"><img alt=\"The Best Entry-Level Finance Jobs For 2013\" src=\"http://i.investopedia.com/dimages/graphics/56529498_1.jpg\" style=\"border: none; width: 380px; max-width: 498px;\" /></div>\n\n<div class=\"content\" style=\"color: rgb(17, 17, 17); font-family: Verdana, Geneva, sans-serif; line-height: 19.5px;\">While the national rate of unemployment in America may have risen slightly between April and May this year, it has generally continued along a downward trend since the final financial quarter of 2012. The portents of moderate but sustained growth were continued in June. Although applications for U.S. unemployment benefits rose by 18,000, this remained consistent with the current level of job creation.<br />\n<br />\nFurther inspection of these statistics reveals a slightly different perspective, however, especially with regard to the type of jobs that are being created in the contemporary employment market. While the U.S. economy added an estimated 175,000 new jobs in May, for example, the majority of these were low paid, entry-level positions that delivered less than a living wage.<br />\n<br />\n<strong>Maximizing Your Earning Potential in the Current Job Market</strong><br />\nWith&nbsp;<a href=\"http://www.investopedia.com/financial-edge/1111/how-to-combat-youth-unemployment.aspx\" style=\"color: rgb(0, 102, 204); text-decoration: none; cursor: pointer;\">youth unemployment</a>&nbsp;in the United States also remaining uncomfortably high at 16.2%, it is clear that the job market poses considerable challenges to the majority of social demographics. The issues facing college graduates and America&#39;s unemployed youth offer a fascinating insight into the mindset of employers, however, as a lack of practical work experience often undermines any academic qualifications that candidates have acquired. With this in mind, entry-level jobs actually offer individuals a unique opportunity to maximize their current earning potential as they gather valuable industry experience. The key is to identify the most rewarding entry-level jobs, both in terms of salary and future career prospects. Consider the following options:</div>\n","status":"draft","created":1373525572074,"updated":1373525572074,"published":1373525572074,"author":"Eric","editor":"iFan","clickcount":0,"category":"Cosmetics","categoryid":1000,"tags":[{"tagid":10003,"tagname":"Students"},{"tagid":10004,"tagname":"Investment"}],"revision":[{"versionid":1,"versionnum":1,"title":"The Best Entry-Level Finance Jobs For 2013","contentbody":"<div class=\"content-image\" style=\"border: 1px solid rgb(204, 204, 204); text-align: center; padding: 6px; float: left; margin: 4px 18px 10px 0px; width: 380px; color: rgb(17, 17, 17); font-family: Verdana, Geneva, sans-serif; line-height: 19.5px;\"><img alt=\"The Best Entry-Level Finance Jobs For 2013\" src=\"http://i.investopedia.com/dimages/graphics/56529498_1.jpg\" style=\"border: none; width: 380px; max-width: 498px;\" /></div>\n\n<div class=\"content\" style=\"color: rgb(17, 17, 17); font-family: Verdana, Geneva, sans-serif; line-height: 19.5px;\">While the national rate of unemployment in America may have risen slightly between April and May this year, it has generally continued along a downward trend since the final financial quarter of 2012. The portents of moderate but sustained growth were continued in June. Although applications for U.S. unemployment benefits rose by 18,000, this remained consistent with the current level of job creation.<br />\n<br />\nFurther inspection of these statistics reveals a slightly different perspective, however, especially with regard to the type of jobs that are being created in the contemporary employment market. While the U.S. economy added an estimated 175,000 new jobs in May, for example, the majority of these were low paid, entry-level positions that delivered less than a living wage.<br />\n<br />\n<strong>Maximizing Your Earning Potential in the Current Job Market</strong><br />\nWith&nbsp;<a href=\"http://www.investopedia.com/financial-edge/1111/how-to-combat-youth-unemployment.aspx\" style=\"color: rgb(0, 102, 204); text-decoration: none; cursor: pointer;\">youth unemployment</a>&nbsp;in the United States also remaining uncomfortably high at 16.2%, it is clear that the job market poses considerable challenges to the majority of social demographics. The issues facing college graduates and America&#39;s unemployed youth offer a fascinating insight into the mindset of employers, however, as a lack of practical work experience often undermines any academic qualifications that candidates have acquired. With this in mind, entry-level jobs actually offer individuals a unique opportunity to maximize their current earning potential as they gather valuable industry experience. The key is to identify the most rewarding entry-level jobs, both in terms of salary and future career prospects. Consider the following options:</div>\n","status":"draft","created":1373525572074,"updated":1373525572074,"published":1373525572074,"author":"Eric","editor":"iFan","clickcount":0,"category":"Cosmetics","categoryid":1000,"tags":[{"tagid":10003,"tagname":"Students"},{"tagid":10004,"tagname":"Investment"}],"versioncomment":"","reviewcomment":""}],"versioncomment":"","reviewcomment":""}];
            taglist=[{"tagid":10001,"tagname":"Personal Debt","$$hashKey":"00L"},{"tagid":10002,"tagname":"Economic","$$hashKey":"00M"},{"tagid":10003,"tagname":"Students"},{"tagid":10004,"tagname":"Investment"}];
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
            console.log(articlelist);
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
        //factory.getTagList();
        var tagmaxid;
        try{
            if(taglist.length==0){
                tagmaxid=10001;
            }else{
                tagmaxid = taglist[taglist.length-1].tagid + 1;
            }
        }catch(e){
            tagmaxid=10001;
        }
        return tagmaxid;
    };

    factory.checkTagExist = function (tagname) {
        var tagresult = _.findWhere(taglist, {tagname: tagname});
        if (tagresult === undefined) {
            return false;
        }else{
            return tagresult;
        }
    };

    factory.createNewTag = function (tagdata) {
        try{
            taglist.push(tagdata);
        }catch(e){
            taglist=[];
            taglist.push(tagdata);
        }
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
articleapp.controller.articleList = function ($scope, $filter, modelArticle) {
    //获取全部数据
    $scope.articlestotaldata = modelArticle.getArticleList();
    var copytotaldata = [];
    copytotaldata = $scope.articlestotaldata;
    //排序所有数据
    $scope.loadinit = function(flag,sort){
        for(var i = 0; i < $scope.articlestotaldata.length; i++){
               for(var j = 0;j < $scope.articlestotaldata.length; j++){
                   if(sort == 'desc'){
                       if(flag == 'published'){
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
                   }else{
                       if(flag == 'published'){
                           if($scope.articlestotaldata[i].published < $scope.articlestotaldata[j].published){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'updated'){
                           if($scope.articlestotaldata[i].updated < $scope.articlestotaldata[j].updated){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'clickcount'){
                           if($scope.articlestotaldata[i].clickcount < $scope.articlestotaldata[j].clickcount){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }
                   }
               }
        }
    }

    $scope.loadinit('updated','desc');
    //页面总数
    var count=10;
    var pagecount=$scope.articlestotaldata.length/count;
    $scope.noOfPages =parseInt(pagecount)== pagecount ? pagecount : parseInt(pagecount)+1;
    if($scope.noOfPages==0){
        $scope.noOfPages=1;
    }

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

    var copyselectedlist='';
    $scope.clickArticle = function(article, index) {
        if(copyselectedlist != ''){
            copyselectedlist.isshowediticon=false;
        }
        $scope.articlepreviewdata = article;
        $scope.cssarticleindex = index;
        this.isshowediticon = true;
        copyselectedlist=this;
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
        copytotaldata = $scope.articlestotaldata;
        var pagecount1=$scope.articlestotaldata.length/count;
        $scope.noOfPages =parseInt(pagecount1)== pagecount1 ? pagecount1 : parseInt(pagecount1)+1;
        if($scope.noOfPages==0){
            $scope.noOfPages=1;
        }
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

    $scope.showupdate=true;
    $scope.showpublish=true;
    $scope.showclick=true;
    //按类型排序
    $scope.orderbytype=function(flag,sort){
        $scope.loadinit(flag,sort);
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
        if(flag == 'updated'){
            $scope.showupdate = !$scope.showupdate;
        }else if(flag == 'published'){
            $scope.showpublish = !$scope.showpublish;
        }else if(flag == 'clickcount'){
            $scope.showclick = !$scope.showclick;
        }
    }

    $scope.showcomments = false;
    //点击draft按钮事件

    var nowdata1='',articlestatus="";
    $scope.clickstatus=function(param,data){
        $scope.showcomments = true;
        nowdata1=this.article;
        articlestatus = param;
        //this.article.status=param;
        $("#comments")[0].value="";
    }

    $scope.closecomments = function(){
        $scope.showcomments = false;
    }

    //搜索提示
    $scope.selected = undefined;
    $scope.states = [];
    $scope.states.length = 0;
    var author1=[];
    for(var i = 0;i < copytotaldata.length; i++){
        $scope.states[i] = copytotaldata[i].title;
        author1[i] = copytotaldata[i].author;
    }
    author1= _.union(author1);
    $scope.states=_.union($scope.states);
    for(var i = 0;i < author1.length; i++){
        $scope.states.push(author1[i]);
    }

    $scope.selectdata=function(){
        var titledata=[],data=[],articledata=[];
        if($scope.selected==""){
            $scope.articlestotaldata=copytotaldata;
        }else{
            for(var i = 0;i < copytotaldata.length; i++){
                titledata[i] = copytotaldata[i].title;
                articledata[i] = copytotaldata[i].author;
            }

            //获取匹配title
            var resultdata = $filter('filter')(titledata, $scope.selected);

            var resultarticle = $filter('filter')(articledata, $scope.selected);
            //去除重复title
            resultdata=_.union(resultdata);
            resultarticle= _.union(resultarticle);
            //根据title获取相应的数据
            for(var j = 0;j < resultdata.length; j++){
                for(var i = 0;i < copytotaldata.length; i++){
                    if(copytotaldata[i].title == resultdata[j]){
                        data.push(copytotaldata[i]);
                    }
                }
            }
            for(var j = 0;j < resultarticle.length; j++){
                for(var i = 0;i < copytotaldata.length; i++){
                    if(copytotaldata[i].author == resultarticle[j]){
                        data.push(copytotaldata[i]);
                    }
                }
            }
            $scope.articlestotaldata = data;
        }

        var pagecount1=$scope.articlestotaldata.length/count;
        $scope.noOfPages =parseInt(pagecount1)== pagecount1 ? pagecount1 : parseInt(pagecount1)+1;
        if($scope.noOfPages==0){
            $scope.noOfPages=1;
        }
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
    }

    $scope.savedata = function(){
        nowdata1.published = modelArticle.getDateNow();
        nowdata1.reviewcomment=$("#comments")[0].value;
        nowdata1.status = articlestatus;
/*        var newrevisionid = nowdata1.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
            "title" : nowdata1.title, "contentbody": nowdata1.contentbody, "status": nowdata1.status,
            "created": nowdata1.created, "updated":nowdata1.updated, "published": nowdata1.published,
            "author": nowdata1.author,  "editor": nowdata1.editor,  "clickcount":nowdata1.clickcount,
            "category": nowdata1.category, "categoryid": nowdata1.categoryid,
            "tags": nowdata1.tags,"versioncomment":nowdata1.versioncomment
        };
        nowdata1.revision.push(newrevision);*/
        modelArticle.saveArticle(nowdata1);
        $scope.showcomments = false;
    }

    $scope.isshowediticon = false;
    $scope.showediticon = function(){
          this.isshowediticon = true;
    }


    $scope.hideediticon = function($index){
        if($scope.cssarticleindex == $index){
            this.isshowediticon = true;
        }else{
            this.isshowediticon = false;
        }
    }

    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
}

articleapp.controller.articleDetail = function ($scope, $routeParams, modelArticle) {
    $scope.cssTagsPanel = false;
    var articleId = $routeParams.articleId;
    $scope.articledata = modelArticle.getArticleById(articleId);
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
       $scope.ispublish=false;
        $scope.articledata.versioncomment='';
        $scope.articledata.updated=modelArticle.getDateNow();
        $scope.articledata.status='draft';
        if (feed.$valid) {
             $scope.showcomments=true;
        };
    }
    $scope.showcomments = false;

    //关闭comments对话框
    $scope.closecomments = function(){
        $scope.showcomments = false;
    }

     $scope.savedata=function(){
        var temptagslistname = $(".tagsinput").exportTags();
        $scope.articledata.tags = [];
        for(var i=0;i<temptagslistname.length;i++){
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
        //$scope.articledata.category=$(".dk_label")[0].textContent;
        var newrevisionid = $scope.articledata.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
            "title" : $scope.articledata.title, "contentbody": $scope.articledata.contentbody, "status": $scope.articledata.status,
            "created": $scope.articledata.created, "updated":modelArticle.getDateNow(), "published": $scope.articledata.published,
            "author": $scope.articledata.author,  "editor": $scope.articledata.editor,  "clickcount":$scope.articledata.clickcount,
            "category": $scope.articledata.category, "categoryid": $scope.articledata.categoryid,
            "tags": $scope.articledata.tags,"versioncomment":$scope.articledata.versioncomment,
            "reviewcomment": $scope.articledata.reviewcomment
        };

        $scope.articledata.revision.push(newrevision);
        modelArticle.saveArticle($scope.articledata);
        $scope.showcomments = false;
    }

    $scope.ispublish=false;
    $scope.publisharticle=function(feed){
        $scope.articledata.versioncomment='';
        $scope.articledata.published=modelArticle.getDateNow();
        $scope.articledata.status='publish';
        if (feed.$valid) {
            $scope.showcomments=true;
        };
        //modelArticle.saveArticle($scope.articledata);
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

    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
};

articleapp.controller.articleCreateNew = function ($scope, $routeParams, $location, modelArticle) {
   $(".tagsinput").tagsInput({
        'autocomplete': modelArticle.getTagList()
    });   //初始化 加载tag标签

    //$("select").dropkick();
    $scope.newarticleadata = {
        "id": modelArticle.getMaxArticleID(),
        "title": "", "contentbody": "", "status": "needreview",
        "created": modelArticle.getDateNow(), "updated": modelArticle.getDateNow(), "published": modelArticle.getDateNow(),
        "author": "Eric",  "editor": "iFan",  "clickcount":0,
        "category": "Cosmetics", "categoryid":1000,
        "tags": [],
        "revision" : [],
        "versioncomment":"",
        "reviewcomment":""
    }

    $scope.cssTagsPanel = false;

    $scope.cssmodalshow = false;
    $scope.saveflag ='';
    $scope.createNewArticle = function(feed,savestatus) {
        if (feed.$valid) {
            $scope.cssmodalshow = true;
            $scope.saveflag = savestatus;
        }
    }

    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

    $scope.closeModal = function () {
        $scope.cssmodalshow = false;
    };

    $scope.savedata = function() {
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
         //$scope.newarticleadata.category=$(".dk_label")[0].textContent;
         $scope.newarticleadata.status=$scope.saveflag;
         //增加文章每一次修改版本信息
         var newrevisionid = $scope.newarticleadata.revision.length + 1;
         var newrevision = {
             "versionid" :  newrevisionid ,
             "versionnum" :  newrevisionid ,
             "title" : $scope.newarticleadata.title, "contentbody": $scope.newarticleadata.contentbody, "status": $scope.newarticleadata.status,
             "created": $scope.newarticleadata.created, "updated": $scope.newarticleadata.updated, "published": $scope.newarticleadata.published,
             "author": $scope.newarticleadata.author,  "editor": $scope.newarticleadata.editor,  "clickcount":$scope.newarticleadata.clickcount,
             "category": $scope.newarticleadata.category, "categoryid": $scope.newarticleadata.categoryid,
             "tags":$scope.newarticleadata.tags,"versioncomment":$scope.newarticleadata.versioncomment,
             "reviewcomment":$scope.newarticleadata.reviewcomment
         };

         $scope.newarticleadata.revision.push(newrevision);
         $scope.cssmodalshow = false;
         //保存文章
         modelArticle.createNewArticle($scope.newarticleadata);
         $location.path('/');
    }

    $scope.showeditpreview = function(val){
        return val;
    };

    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
}

