'use strict';


var vcpapp = angular.module('vcpmodule', [ 'vcpmodule.directive' ]);

var page = {
    c:{}
}
vcpapp.controller(page.c);


/* Controllers */
page.c.userController = function($scope, $location, modelSite) {
    $scope.site = modelSite.getSite();
    $scope.user = $scope.site.userinfo;
    $scope.user.gender="male";

    //保存密码和邮箱
    $scope.savebasicinfo = function(callback){
        if (callback.$valid) {
            if(!($("#password")[0].value == $("#reformpassword")[0].value)){
                alert('Password Inconsistent!');
                return;
            }else{
                modelSite.updateSinglePage($scope.site);
                location.href="user.html";
            }
        }
    }

    $scope.savebasicinfo = function(callback){
        if (callback.$valid) {
            modelSite.updateSinglePage($scope.site);
            //alert($scope.user.gender);
        }
    }
}
