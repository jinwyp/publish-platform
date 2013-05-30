'use strict';

var pageapp = angular.module('pagemodule', []);

/*
pageapp.directive('anyKeypress', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attr, ctrl) {
            element.bind('keypress', function(){
                scope.$apply(function(s) {
                    s.$eval(attr.zKeypress);
                });
            });
        }
    };
});
*/


pageapp.directive('enterKeypress', function(){
    return function(scope, element, attrs) {
        element.bind("keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.enterKeypress);
                });
                event.preventDefault();
            }
        });
    };
});


var page = {
    m:{},
    c:{}
};

pageapp.controller(page.c);

pageapp.factory('modelSite', function(){

    var sitedata = {
        siteid:1,
        sitename:'NewSite',

        pagelist : [
            { siteid:1, pagename:'Homepage', pageid:101, pagetype:2, pagetitle:"Homepage", pageurl:"homepage",  pageorder:1, pagelayoutid:10,
                pagelayoutdata:[
                    {layoutcontainerclass:"span9", layoutcontainerid:"layoutcontainer1" , blocks:[
                            {blockid:100, blocktype:1, blockname:"name1" } ,
                            {blockid:101, blocktype:1, blockname:"name2" } ,
                            {blockid:102, blocktype:1, blockname:"name3" }
                        ]
                    },
                    {layoutcontainerclass:"span3", layoutcontainerid:"layoutcontainer2", blocks:[] }
                ]
            },
            { siteid:1, pagename:'Channel2', pageid:102,  pagetype:2, pagetitle:"Ch2", pageurl:"ch2", pageorder:6,  pagelayoutid:10, pagelayoutdata:[] },
            { siteid:1, pagename:'Channel3', pageid:103,  pagetype:2, pagetitle:"Ch3", pageurl:"ch3", pageorder:10, pagelayoutid:10, pagelayoutdata:[] },


            { siteid:1, pagename:'Article', pageid:103, pagetype:1, pagetitle:"article", pageurl:"article", pageorder:0, pagelayoutid:10, pagelayoutdata:[] }
        ],

        defaulstSelectedPageIndex:1,
        defaulstSelectedLayoutIndex:0,
        pagefilterArticleType:{pagetype:1},
        pagefilterListType:{pagetype:2}

    };

    var layoutdata = [
        {layoutid: 10, layoutname: '两列1', layouttype : 1, layoutorder:1, layoutcss:'ico_layout_00', layoutimage:'app/img/layout_templete.png', layoutdata:[
            {layoutcontainerclass:"span9", layoutcontainerid:1000 },
            {layoutcontainerclass:"span3", layoutcontainerid:1001 }
            ]},

        {layoutid: 10, layoutname: '两列2', layouttype : 1, layoutorder:2, layoutcss:'ico_layout_01', layoutimage:'app/img/layout_templete_01.png', layoutdata:[
            {layoutcontainerclass:"span9", layoutcontainerid:1002 },
            {layoutcontainerclass:"span3", layoutcontainerid:1003 }
        ]},
        {layoutid: 10, layoutname: '三列1', layouttype : 0, layoutorder:3, layoutcss:'ico_layout_02', layoutimage:'app/img/layout_templete_02.png', layoutdata:[
            {layoutcontainerclass:"span4", layoutcontainerid:1005 },
            {layoutcontainerclass:"span4", layoutcontainerid:1006 },
            {layoutcontainerclass:"span4", layoutcontainerid:1007 }
        ]}
    ];

    var factory = {};
    factory.getSite = function () {
        return  sitedata;
    };

    factory.getPageList = function () {
        return  sitedata.pagelist;
    };

    factory.getSinglePage = function (pageid) {
        return  sitedata.pagelist[0];
    };

    factory.addSinglePage = function (pagedata) {
        return  sitedata.pagelist.push(pagedata);
    };

    factory.getLayoutList = function() {
        return  layoutdata;
    }

    return factory;
});




/* Controllers */
page.c.Pagelist = function($scope, $location, $http, $routeParams, modelSite) {
    $scope.site = {};
    $scope.pages = [];
    $scope.singlepage = {};

    $scope.layouts = [];

    initialize();

    function initialize(){
        $scope.site = modelSite.getSite();
        $scope.pages = modelSite.getPageList();
        $scope.singlepage =  modelSite.getSinglePage(0);

        $scope.layouts = modelSite.getLayoutList();

        $scope.pagefilterarticle = $scope.site.pagefilterArticleType;
        $scope.pagefilterlist = $scope.site.pagefilterListType;
        $scope.defaultselectedpageindex = $scope.site.defaulstSelectedPageIndex;    // left menu default selected page
        $scope.defaultselectedlayoutindex = $scope.site.defaulstSelectedLayoutIndex;    // right menu default selected page

        $scope.cssdisplay = false;    //添加page的输入框默认不显示
        $scope.csspageattribute = false;               //page属性输入面板的输入框默认不显示

        $scope.filterlayouttype = {layouttype:0};
        console.log( $scope.layouts.filterlayouttype);
    }



//    console.log($location.path) ;


    //left side bar

    $scope.clickpage = function(indexid, page) {
        $scope.defaultselectedpageindex = indexid;
        if(page.pagetype === 1) {
            $scope.filterlayouttype = {layouttype:1 };
        }else{
            $scope.filterlayouttype = {layouttype:0 };
        }
    }

    $scope.newpage ={};

    $scope.showaddpageinput = function() {
        $scope.cssdisplay = true;       //添加page的输入框显示
    }

    $scope.showeditpageattribute = function() {
        $scope.csspageattribute = true;       //添加page的输入框显示
    }

    $scope.closeeditpageattribute = function() {
        $scope.csspageattribute = false;       //添加page的输入框显示
    }

    $scope.addpage = function() {
        $scope.cssdisplay = false;       //添加page的输入框显示
        var newpage = {
            siteid:1,
            pagename:$scope.newpage.pagename,
            pageid:103,
            pagetype:2,
            pagetitle:$scope.newpage.pagetitle,
			pageurl:$scope.newpage.pageurl
        }

        modelSite.addSinglePage(newpage);

        console.log($scope.pages);
    }



    //right side bar
    $scope.clicklayout = function(indexid) {
        $scope.defaultselectedlayoutindex = indexid;

    }

}





//PhoneListCtrl.$inject = ['$scope', '$http'];
//function PhoneDetailCtrl($scope, $routeParams, $http) {
//    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
//        $scope.phone = data;
//    });
//}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];




