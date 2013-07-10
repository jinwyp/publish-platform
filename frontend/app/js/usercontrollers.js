'use strict';


var vcpapp = angular.module('vcpmodule', [ 'vcpmodule.directive' ]);

var page = {
    c:{}
}
vcpapp.controller(page.c);

/* Controllers */
page.c.userController = function($scope, modelSite, modelArticle, modelTag) {
    var site = modelSite.getSite();
    $scope.user = site.userinfo;
    $scope.user.email='3333333333333';
}
