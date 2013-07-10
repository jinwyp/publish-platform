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

    //保存密码和邮箱
    $scope.saveemailinfo = function(callback){
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

    //保存用户基本信息
    $scope.savebasicinfo = function(callback){
        if (callback.$valid) {
            modelSite.updateSinglePage($scope.site);
        }
    }
}
