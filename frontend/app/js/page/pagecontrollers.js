'use strict';

/* Controllers */
function PagesController($scope, $location, $http, $routeParams) {

    var pagesdata = [
        { siteid:1, pagename:'Homepage', pageid:101, pagetitle:"Homepage", pageurl:"homepage",  pageorder:1, pagelayoutid:10, pagelayoutdata:[
                {layoutcontainerclass:"span9", layoutcontainerid:"layoutcontainer1" , blocks:[
                        {blockid:100, blocktype:1, blockname:"name1" } ,
                        {blockid:101, blocktype:1, blockname:"name2" } ,
                        {blockid:102, blocktype:1, blockname:"name3" }
                    ]
                },
                {layoutcontainerclass:"span3", layoutcontainerid:"layoutcontainer2", blocks:[] }
            ]
        },
        { siteid:1, pagename:'Channel2', pageid:102, pagetitle:"Ch2", pageurl:"ch2", pageorder:2, pagelayoutid:10, pagelayoutdata:[] },
        { siteid:1, pagename:'Channel3', pageid:103, pagetitle:"Ch3", pageurl:"ch3", pageorder:3, pagelayoutid:10, pagelayoutdata:[] }
    ];

    $scope.pages = pagesdata;
    $scope.pagelayoutdata = pagesdata[0].pagelayoutdata;
    console.log($scope.pagelayoutdata);

//    console.log($location.path) ;

    $scope.siteconfig = {selectedPageIndex : 0};    // left menu default selected page

    $scope.clickpage = function(indexid) {
        $scope.siteconfig = {selectedPageIndex :indexid};
    }


}

//PhoneListCtrl.$inject = ['$scope', '$http'];
//function PhoneDetailCtrl($scope, $routeParams, $http) {
//    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
//        $scope.phone = data;
//    });
//}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];
