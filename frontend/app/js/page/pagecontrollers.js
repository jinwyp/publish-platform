'use strict';

/* Controllers */
function PagesController($scope, $location, $http, $routeParams) {



    var pagesdata = [
        { siteid:1, pagename:'Homepage', pageid:101, pagetitle:"Homepage", pageurl:"",  pageorder:1, pagelayoutid:10, pagelayoutdata:[
            {layoutcontainerclass:"span9", layoutcontainerid:"layoutcontainer1"},
            {layoutcontainerclass:"span3", layoutcontainerid:"layoutcontainer2"}
            ] },
        { siteid:1, pagename:'Channel2', pageid:102, pagetitle:"Ch2", pageurl:"ch2", pageorder:2, pagelayoutid:10, pagelayoutdata:[] },
        { siteid:1, pagename:'Channel3', pageid:103, pagetitle:"Ch3", pageurl:"ch3", pageorder:3, pagelayoutid:10, pagelayoutdata:[] }
    ];

    $scope.pages = pagesdata;


    $scope.pagelayoutdata = [

            {layoutcontainerclass:"span9", layoutcontainerid:"layoutcontainer1"},
            {layoutcontainerclass:"span3", layoutcontainerid:"layoutcontainer2"}

    ];


//    $scope.location = $location;
//    console.log($location.path) ;

    $scope.getLayoutContainerClass = function() {
        console.log(urlpath) ;
        if ($location.path().substr(0, urlpath.length) == urlpath) {
            return true
        } else {
            return false
        }
    }

//    $scope.siteconfig = {selectedPageIndex : 0};    // left menu default selected page


}

//PhoneListCtrl.$inject = ['$scope', '$http'];
//function PhoneDetailCtrl($scope, $routeParams, $http) {
//    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
//        $scope.phone = data;
//    });
//}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];
