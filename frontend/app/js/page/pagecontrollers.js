'use strict';

/* Controllers */
function PagesController($scope, $http, $routeParams) {



    $scope.pages = [
        { siteid:1, pagename:'Homepage', pageid:101, pageorder:1, pagelayoutid:10, pageblocks:[] },
        { siteid:1, pagename:'Channel2', pageid:102, pageorder:2, pagelayoutid:10, pageblocks:[] },
        { siteid:1, pagename:'Channel3', pageid:103, pageorder:3, pagelayoutid:10, pageblocks:[] }
    ];

    $scope.selectedPageIndex = 0;    // left menu default selected page


}

//PhoneListCtrl.$inject = ['$scope', '$http'];
//function PhoneDetailCtrl($scope, $routeParams, $http) {
//    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
//        $scope.phone = data;
//    });
//}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];
