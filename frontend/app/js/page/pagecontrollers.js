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
            { siteid:1, pagename:'Homepage', pageid:101, pagetype:10, pagetitle:"Homepage", pageurl:"homepage",  pageorder:1, pagelayoutid:10,
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
            { siteid:1, pagename:'Channel2', pageid:102,  pagetype:20, pagetitle:"Ch2", pageurl:"ch2", pageorder:6,  pagelayoutid:10, pagelayoutdata:[] },
            { siteid:1, pagename:'Channel3', pageid:103,  pagetype:20, pagetitle:"Ch3", pageurl:"ch3", pageorder:10, pagelayoutid:10, pagelayoutdata:[] },


            { siteid:1, pagename:'Article', pageid:103, pagetype:11, pagetitle:"article", pageurl:"article", pageorder:0, pagelayoutid:10, pagelayoutdata:[] }
        ],


        defaultsettings:{
            defaulstSelectedPageIndex:1,
            defaulstSelectedLayoutIndex:0,
            articleTypeId:11,

            pagefilterArticleType:{pagetype:1},
            pagefilterListType:{pagetype:2},
            layoutfilterListType:{layouttype:0}
        }
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
    var headerdata=[
        {headerid:1,headername:'Home',headertype:1,headerurl:'',childdata:[
            {childid:1,childname:'Child1',childtype:1,childurl:'111.htm'},
            {childid:2,childname:'Child2',childtype:2,chidlurl:''}
        ]},
        {headerid:2,headername:'Page1',headertype:1,headerurl:'',childdata:[]},
        {headerid:3,headername:'Page2',headertype:2,headerurl:'',childdata:[]}
    ];
    var factory = {};
    factory.getSite = function () {
        return  sitedata;
    };

    factory.getPageList = function () {
        return  sitedata.pagelist;
    };

    factory.getSinglePage = function (selectedpage) {
        var pageindex = sitedata.pagelist.indexOf(selectedpage);
        return  sitedata.pagelist[pageindex];
    };

    factory.addSinglePage = function (pagedata) {
        return  sitedata.pagelist.push(pagedata);
    };

    factory.updateSinglePage= function(pagedata){
        return
    };

    factory.delSinglePage= function( pagedata){
        if(pagedata.pagetype >= 20){
            //首页和内容页面都是无法删除的
            var pageindex = sitedata.pagelist.indexOf(pagedata);
            sitedata.pagelist.splice(pageindex, 1);
        }
//        for(var i = sitedata.pagelist.length; i--;){
//            if (sitedata.pagelist[i] === pagedata) {
//                sitedata.pagelist.splice(i, 1);
//            }
//        }
        return

    };


    factory.getLayoutList = function() {
        return  layoutdata;
    }

    factory.getheader=function(){
        return headerdata;
    }
    factory.addheaderPage = function (pagedata) {
        return  headerdata.push(pagedata);
    };
    factory.addChildPage = function (id,pagedata) {
        return  headerdata[id].childdata.push(pagedata);
    };


    factory.saveSinglePageLayout = function( selectedpage, layout) {
        var pageindex = sitedata.pagelist.indexOf(selectedpage);
        console.log(pageindex, sitedata.pagelist[pageindex].pagename);
        sitedata.pagelist[pageindex].pagelayoutdata = layout.layoutdata ;
        return  ;
    }


    factory.saveSinglePageLayout = function( selectedpage, layout) {
        var pageindex = sitedata.pagelist.indexOf(selectedpage);
        console.log(pageindex, sitedata.pagelist[pageindex].pagename);
        sitedata.pagelist[pageindex].pagelayoutdata = layout.layoutdata ;
        return  ;
    }


    return factory;
});




/* Controllers */
page.c.Pagelist = function($scope, $location, $http, $routeParams, modelSite) {
    $scope.site = {};
    $scope.pages = [];
    $scope.singlepage = {};

    $scope.layouts = [];
    $scope.headers=[];
    $scope.newpage ={};

    initialize();

    function initialize(){
        $scope.site = modelSite.getSite();
        $scope.pages = modelSite.getPageList();
        $scope.singlepage =  $scope.pages[0];

        $scope.layouts = modelSite.getLayoutList();
        $scope.headers=modelSite.getheader();

        $scope.articletype = $scope.site.defaultsettings.articleTypeId;    // left menu default selected page
        $scope.pagefilterarticle = $scope.site.defaultsettings.pagefilterArticleType;
        $scope.pagefilterlist = $scope.site.defaultsettings.pagefilterListType;
        $scope.layoutfilterlisttype = $scope.site.defaultsettings.layoutfilterListType;

        $scope.defaultselectedpageindex = $scope.site.defaultsettings.defaulstSelectedPageIndex;    // left menu default selected page
        $scope.selectedpageattributeindex = -1;

        $scope.defaultselectedlayoutindex = $scope.site.defaultsettings.defaulstSelectedLayoutIndex;    // right menu default selected page

        $scope.defaultselectedpageindex = $scope.site.defaultsettings.defaulstSelectedPageIndex;    // left menu default selected page
        $scope.selectedpageattributeindex = -1;


        $scope.defaultselectedlayoutindex = $scope.site.defaultsettings.defaulstSelectedLayoutIndex;    // right menu default selected page


    }
    $scope.cssdisplay = false;    //添加page的输入框默认不显示
    $scope.showform=false;
    $scope.csspageattribute = false;               //page属性输入面板的输入框默认不显示



    var flag=false;
    var parentid="";
    $scope.showheaderform=function(param1,param){
        $scope.showform=true;
        flag=param;
        parentid=param1;
        $("#titlename")[0].value="";
        $("#otherurl")[0].value="";
    }
    $scope.hideheaderform=function(){
        $scope.showform=false;
    }
    $scope.newdata ={};
    $scope.saveData=function(){
        if($scope.newdata.headername == undefined){
            return;
        }
        if($("#optionsRadios11")[0].checked){
            $scope.newdata.headertype=1;
            if($("#otherurl")[0].value==""){
                return;
            }
            $scope.newdata.headerurl=$("#otherurl")[0].value;
        }else{
            $scope.newdata.headertype=2;
            $scope.newdata.headerurl=$("#localurl")[0].value;
        }
        $scope.showform=false;
        if(flag){
             var newdata={headerid:4,headername:$scope.newdata.headername,headertype:$scope.newdata.headertype,headerurl:$scope.newdata.headerurl};
             modelSite.addheaderPage(newdata);
        }else{
              var newdata={childid:3,childname:$scope.newdata.headername,childtype:$scope.newdata.headertype,childurl:$scope.newdata.headerurl};
              modelSite.addChildPage(parentid,newdata);
        }
    }

    //left side bar
    $scope.clickpage = function(indexid, page) {
        $scope.defaultselectedpageindex = indexid;
        console.log($scope.singlepage);
        $scope.singlepage = page;

        if(page.pagetype === $scope.articletype) {
            $scope.layoutfilterlisttype = {layouttype:1 };
        }else{
            $scope.layoutfilterlisttype = {layouttype:0 };
        }

        $scope.cssdisplay = false;       //添加page的输入框不显示
    }

    $scope.showaddpageinput = function() {
        $scope.cssdisplay = true;       //添加page的输入框显示
    }
    $scope.showeditpageattribute = function() {
        $scope.csspageattribute = true;       //添加page的输入框显示
    }
    $scope.closeeditpageattribute = function() {
        $scope.csspageattribute = false;       //添加page的输入框显示
    }




    $scope.showaddpageinput = function() {
        $scope.cssdisplay = true;       //添加page的输入框显示
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

    }





    $scope.showeditpageattribute = function(indexid) {
        $scope.selectedpageattributeindex = indexid;    //点击显示当前的page 属性面板
    }

    $scope.closeeditpageattribute = function(indexid) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板
    }

    $scope.editsavepage = function(page) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板
        modelSite.updateSinglePage(page);
    }
    $scope.delpage = function( page) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板
        modelSite.delSinglePage(page);
    }
    //right side bar
    $scope.clicklayout = function(indexid, layout) {
        $scope.defaultselectedlayoutindex = indexid;
        modelSite.saveSinglePageLayout($scope.singlepage, layout);

    }

}





//PhoneListCtrl.$inject = ['$scope', '$http'];
//function PhoneDetailCtrl($scope, $routeParams, $http) {
//    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
//        $scope.phone = data;
//    });
//}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];




