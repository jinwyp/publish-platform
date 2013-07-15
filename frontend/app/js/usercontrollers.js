'use strict';


var vcpapp = angular.module('vcpmodule', ['firebase']);

var page = {
    c:{}
}
vcpapp.controller(page.c);


/* Controllers */
page.c.userController = function($scope, $location, modelSite) {
    $scope.showpassword = false;
    $scope.showalert = false;
    $scope.loginpassword = '';
    $scope.loginemail = '';
    $scope.site = modelSite.getSite();
    $scope.user = $scope.site.userinfo;
    if($scope.user.gender == undefined){
        $scope.user.gender = 'male';
    }


    //保存用户基本信息

    $scope.userfirstname = '';
    $scope.userlastname = '';
    $scope.usergender = 'male';
    $scope.usertel = '';
    $scope.savebasicinfo = function(callback){
        if (callback.$valid) {
       /*     $scope.user.firstname = $scope.userfirstname;
            $scope.user.lastname = $scope.userlastname;
            $scope.user.gender = $scope.usergender;
            $scope.user.tel = $scope.usertel;*/
            modelSite.updateSite($scope.site);
            location.href = "site.html";
        }
    }

    //登录
    $scope.userlogin = function(callback){
        if (callback.$valid) {
            if(!($scope.loginpassword == $scope.user.password) || !($scope.loginemail == $scope.user.email)){
                alert('Password or email error!');
                return;
            }else{
                location.href = "site.html";
            }
        }
    }

    //显示修改密码form
    $scope.changepassword = function(){
        $scope.showpassword=true;
        $scope.showalert = false;
    }

    //保存密码
    $scope.oldpassword = '';
    $scope.newpassword = '';
    $scope.erroralert = '';
    $scope.conformpassword = '';
    $scope.shownewpwd = false;
    $scope.showagainpwd = false;
    $scope.showinconsistent = false;
    $scope.modifypassword = function(){
        if(!($scope.oldpassword == $scope.user.password)){
            $scope.showalert = true;
            $scope.shownewpwd = false;
            $scope.showagainpwd = false;
            $scope.showinconsistent = false;
            $("#oldpassword").focus();
            return;
        }else if($scope.newpassword == ""){
            $scope.showalert = false;
            $scope.shownewpwd = true;
            $scope.showagainpwd = false;
            $scope.showinconsistent = false;
            $("#newpassword").focus();
            return;
        }else if($scope.conformpassword == ""){
            $scope.showalert = false;
            $scope.shownewpwd = false;
            $scope.showagainpwd = true;
            $scope.showinconsistent = false;
            $("#conformpassword").focus();
            return;
        }else if(!($scope.newpassword == $scope.conformpassword)){
            $scope.showinconsistent = true;
            $scope.showalert = false;
            $scope.shownewpwd = false;
            $scope.showagainpwd = false;
            $("#conformpassword").focus();
            return;
        }else{
            $scope.user.password = $scope.newpassword;
            modelSite.updateSite($scope.site);
            $scope.showpassword = false;
        }
    }
}



page.c.userRegisterController = function($scope, $location, angularFire) {

    var url = "https://vcplatform.firebaseIO.com/user";
    var promise = angularFire(url, $scope, 'userFirebase', {});

    $scope.userdata = {
        email : '',
        password1 : '',
        password2 : ''
    };

    $scope.csspasswordprompt = false;

    promise.then(function() {

        //注册用户 保存密码和邮箱
        $scope.saveemailinfo = function(callback){
            if (callback.$valid) {
                if($scope.userdata.password1 == $scope.userdata.password2){
                    $scope.csspasswordprompt = false ;

                    $scope.userFirebase = {
                        email : $scope.userdata.email,
                        password1 : $scope.userdata.password1,
                        password2 : $scope.userdata.password2
                    };

                    modelSite.updateSite($scope.site);
                    location.href = "user.html";
                }else{
                    $scope.csspasswordprompt = true;
                }
            }
        }
    });


}






page.c.siteController = function($scope, $location, modelSite) {
    $scope.siteinfodata = modelSite.getSiteInfo();

    $scope.savesiteinfo = function(callback){
        console.log($scope.siteinfodata);
        if (callback.$valid) {
            modelSite.saveSiteInfo($scope.siteinfodata);
        }
    }


}