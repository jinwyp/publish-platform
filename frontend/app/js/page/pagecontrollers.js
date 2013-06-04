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

        headerdata:[
            {headerid:1,headername:'Home',headertype:'localurl',headerurl:'',childdata:[
                {childid:1,childname:'Child1',childtype:'otherurl',childurl:'111.htm'},
                {childid:2,childname:'Child2',childtype:'localurl',chidlurl:''}
            ]},
            {headerid:2,headername:'Page1',headertype:'localurl',headerurl:'',childdata:[]},
            {headerid:3,headername:'Page2',headertype:'otherurl',headerurl:'',childdata:[]}
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
            {layoutcontainerclass:"span3", layoutcontainerid:1002 },
            {layoutcontainerclass:"span9", layoutcontainerid:1003 }
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
        return;
    };




    //layout 修改
    factory.getLayoutList = function() {
        return  layoutdata;
    }

    factory.saveSinglePageLayout = function( selectedpage, layout) {
        var pageindex = sitedata.pagelist.indexOf(selectedpage);
//        console.log(pageindex, sitedata.pagelist[pageindex].pagename);
        sitedata.pagelist[pageindex].pagelayoutdata = layout.layoutdata ;
        return  ;
    }


    //header 修改
    factory.getHeader=function(){
        return sitedata.headerdata;
    }
    factory.addHeaderPage = function (pagedata) {
        return  sitedata.headerdata.push(pagedata);
    };
    factory.addHeaderChildPage = function (id,pagedata) {
        return  sitedata.headerdata[id].childdata.push(pagedata);
    };


    return factory;
});




/* Controllers */
page.c.Pagelist = function($scope, $location, $http, $routeParams, modelSite) {
    $scope.site = {};
    $scope.pages = [];
    $scope.singlepage = {};
    $scope.newpage ={};
    $scope.layouts = [];
    $scope.header=[];

    initialize();

    function initialize(){
        $scope.site = modelSite.getSite();
        $scope.pages = modelSite.getPageList();
        $scope.singlepage =  $scope.pages[0];   //默认读取首页

        $scope.layouts = modelSite.getLayoutList();
        $scope.header = modelSite.getHeader();

        $scope.pagearticletype = $scope.site.defaultsettings.articleTypeId;    // left menu default selected page
        $scope.pagefilterarticle = $scope.site.defaultsettings.pagefilterArticleType;
        $scope.pagefilterlist = $scope.site.defaultsettings.pagefilterListType;
        $scope.layoutfilterlisttype = $scope.site.defaultsettings.layoutfilterListType;

        $scope.defaultselectedpageindex = $scope.site.defaultsettings.defaulstSelectedPageIndex;    // left menu default selected page
        $scope.selectedpageattributeindex = -1;    //默认隐藏所有page的属性面板

        $scope.selectedpageblockindex = -1;    

        $scope.defaultselectedlayoutindex = $scope.site.defaultsettings.defaulstSelectedLayoutIndex;    // right menu default selected page

        $scope.cssshowpageaddinput = false;    //添加page的输入框默认不显示
        $scope.cssblockbutton = false;    //添加page的输入框默认不显示

        $scope.csstitleform = false;
    }



    //left side bar
    $scope.clickpage = function(indexid, page) {
        $scope.defaultselectedpageindex = indexid;
        $scope.singlepage = page;

        if(page.pagetype === $scope.pagearticletype) {
            $scope.layoutfilterlisttype = {layouttype:1 };
        }else{
            $scope.layoutfilterlisttype = {layouttype:0 };
        }

        $scope.cssshowpageaddinput = false;       //添加page的输入框不显示
    }

    $scope.showaddpageinput = function() {
        $scope.cssshowpageaddinput = true;       //添加page的输入框显示
    }
    $scope.showeditpageattribute = function() {
        $scope.csspageattribute = true;       //添加page的输入框显示
    }
    $scope.closeeditpageattribute = function() {
        $scope.csspageattribute = false;       //添加page的输入框显示
    }


    //left side bar add page
    $scope.showaddpageinput = function() {
        $scope.cssshowpageaddinput = true;       //添加page的输入框显示
    }

    $scope.addpage = function() {
        $scope.cssshowpageaddinput = false;       //添加page的输入框显示
        var newpage = {
            siteid:1,
            pagename:$scope.newpage.pagename,
            pageid:103,
            pagetype:20,
            pagetitle:$scope.newpage.pagetitle,
            pageurl:$scope.newpage.pageurl
        }
        modelSite.addSinglePage(newpage);

    }



    //left side bar add page attribute
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





    //add blocks
     $scope.showblockautomenu = function( indexid) {
        $scope.cssblockbutton = true;

    }

    $scope.hoverblockbutton = function( indexid) {

    $(".block_content").hover(function(){
        $(this).append($(".attribute_panel"));
        $(".attribute_panel").show();
        $(".block_content").css( {"z-index":"999"});
    }, function() {
        $(".attribute_panel").hide();
        $(".block_content").css( {"z-index":"1"});
    });

    }





    //header
    var headerflag=false;
    var headerparentid="";
    $scope.headerlocalrdo=true;
    //$scope.headerlocalurl=$scope.pages[1];
    $scope.showheaderform=function(param1,param){
        $scope.csstitleform=true;
        headerflag=param;
        headerparentid=param1;
        $scope.newheaderdata.headername="";
        $scope.newheaderdata.otherurl="";
    }
    $scope.hideheaderform=function(){
        $scope.csstitleform=false;
    }
    $scope.newheaderdata ={};
    $scope.saveheaderinfo=function(){
        if($scope.newheaderdata.headername == ""){
            return;
        }
        debugger;
        if($scope.newheaderdata.headertype=="localurl"){
            $scope.newheaderdata.headertype='localurl';
            if($scope.newheaderdata.otherurl==""){
                return;
            }
            $scope.newheaderdata.headerurl=$scope.newheaderdata.otherurl;
        }else{
            $scope.newheaderdata.headertype='otherurl';
            $scope.newheaderdata.headerurl=$scope.headerlocalurl;
        }
        console.log($scope.headerlocalurl);
        $scope.csstitleform=false;
        if(headerflag){
            var newheaderdata={
                headerid:$scope.header[$scope.header.length-1].headerid+1,
                headername:$scope.newheaderdata.headername,
                headertype:$scope.newheaderdata.headertype,
                headerurl:$scope.newheaderdata.headerurl,
                childdata:[]
            };
            modelSite.addHeaderPage(newheaderdata);
        }else{
          /*  var newheaderdata={
                childid:$scope.header[headerparentid].childdata[$scope.header[headerparentid].childdata.length-1].childid+1,
               // childname:$scope.newheaderdata.headername,
                childtype:$scope.newheaderdata.headertype,
                childurl:$scope.newheaderdata.headerurl
            };
            modelSite.addHeaderChildPage(headerparentid,newheaderdata);*/
        }
    }
    $scope.items = [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
        { id: 3, name: 'blah' }];
    $scope.openheaderinfo=function(id){
        $scope.csstitleform=true;
        for(var i=0;i<$scope.header.length;i++){
              if($scope.header[i].headerid == id){
                  $scope.newheaderdata.headername=$scope.header[i].headername;
                  $scope.newheaderdata.headertype=$scope.header[i].headertype;
                 // $scope.headerlocalurl=$scope.header[i].headerurl;
              }
        }
    }
    $scope.clkheaderurl=function(){
        $scope.headerlocalrdo=true;
    }
    $scope.clkheaderlocal=function(){
        $scope.headerlocalrdo=false;
    }
}








