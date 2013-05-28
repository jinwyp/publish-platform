'use strict';

var pageapp = angular.module('pagemodule', []);

var page = {
    m:{},
    c:{}
};

pageapp.controller(page.c);




/* Controllers */
page.c.Pagelist = function($scope, $location, $http, $routeParams) {

    var pagesdata = [
        { siteid:1, pagename:'Homepage', pageid:101, pagetype:2, pagetitle:"Homepage", pageurl:"homepage",  pageorder:1, pagelayoutid:10, pagelayoutdata:[
                {layoutcontainerclass:"span9", layoutcontainerid:"layoutcontainer1" , blocks:[
                        {blockid:100, blocktype:1, blockname:"name1" } ,
                        {blockid:101, blocktype:1, blockname:"name2" } ,
                        {blockid:102, blocktype:1, blockname:"name3" }
                    ]
                },
                {layoutcontainerclass:"span3", layoutcontainerid:"layoutcontainer2", blocks:[] }
            ]
        },
        { siteid:1, pagename:'Channel2', pageid:102,  pagetype:2, pagetitle:"Ch2", pageurl:"ch2", pageorder:6, pagelayoutid:10, pagelayoutdata:[] },
        { siteid:1, pagename:'Channel3', pageid:103,  pagetype:2, pagetitle:"Ch3", pageurl:"ch3", pageorder:10, pagelayoutid:10, pagelayoutdata:[] },


        { siteid:1, pagename:'article', pageid:103,  pagetype:1, pagetitle:"article", pageurl:"article", pageorder:0, pagelayoutid:10, pagelayoutdata:[] }
    ];



    $scope.pagefilterarticle = {  pagetype:1};
    $scope.pagefilterlist = {  pagetype:2};

    $scope.pages = pagesdata;
    $scope.pagelayoutdata = pagesdata[0].pagelayoutdata;
//    console.log($scope.pagelayoutdata);

//    console.log($location.path) ;

    $scope.siteconfig = {selectedPageIndex : 0};    // left menu default selected page

    $scope.clickpage = function(indexid) {
        $scope.siteconfig = {selectedPageIndex :indexid};
    }

    $scope.clickaddpage = function(indexid) {
        $scope.pages.push = {siteid:1, pagename:$scope.newpage.pagename, pageid:103,  pagetype:1, pagetitle:$scope.newpage.pagename};
    }

}


page.c.Layoutlist = function($scope, $location, $http, $routeParams) {
    var layoutlist = [
        {layoutid: 10, layoutname: '两列1', layouttype : 1, layoutorder:1, layoutcss:'ico_layout_00', layoutimage:''},
        {layoutid: 10, layoutname: '两列2', layouttype : 1, layoutorder:2, layoutcss:'ico_layout_01', layoutimage:''},
        {layoutid: 10, layoutname: '三列1', layouttype : 0, layoutorder:3, layoutcss:'ico_layout_02', layoutimage:''}
    ];

    $scope.layoutlist1 = layoutlist;
    $scope.csstrue = true;

    $scope.siteconfig = {selectedLayoutIndex : 0};    // left menu default selected page

    $scope.clicklayout = function(indexid) {
        $scope.siteconfig = {selectedLayoutIndex :indexid};


    }

}

//PhoneListCtrl.$inject = ['$scope', '$http'];
//function PhoneDetailCtrl($scope, $routeParams, $http) {
//    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
//        $scope.phone = data;
//    });
//}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];




