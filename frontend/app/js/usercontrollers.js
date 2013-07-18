'use strict';


var vcpapp = angular.module('vcpmodule', ['firebase']);

var page = {
    c:{}
};
vcpapp.controller(page.c);


/* Controllers */
page.c.userInfoController = function($scope, $location, angularFire, modelSite) {
    $scope.csshaveavatar = false;
    $scope.cssshowpasswordbox = false;

//    $scope.site = modelSite.getSite(); // use firebase for database
//    $scope.user = $scope.site.userinfo;

    var url = "https://vcplatform.firebaseIO.com/user";
    var promise = angularFire(url, $scope, 'userFirebase', {});

    $scope.userdata = {
    };

    //显示修改密码form
    $scope.changepassword = function(){
        $scope.cssshowpasswordbox = true;
        $(".userAccount").animate({left:"18%"});
        $(".userPassword").animate({left:"100%"});
    };

    //显示头像是否上传
    $scope.uploadavator = function(){
        $scope.csshaveavatar = true;
    };

    promise.then(function() {
        $scope.userdata = {
            firstname : $scope.userFirebase.firstname,
            lastname : $scope.userFirebase.lastname,
            mobilenumber : $scope.userFirebase.mobilenumber,
            email : '',
            oldpassword : '',
            newpassword1 : '',
            newpassword2 : '',
            gender : $scope.userFirebase.gender
        };


        //保存用户基本信息
        $scope.saveuserinfo = function(callback){
            if (callback.$valid) {
                $scope.userFirebase = {
                    email : $scope.userFirebase.email,
                    password : $scope.userFirebase.password,
                    firstname : $scope.userdata.firstname,
                    lastname : $scope.userdata.lastname,
                    mobilenumber : $scope.userdata.mobilenumber,
                    gender : $scope.userdata.gender
                };
                $(".userAccount").animate({left:"28%"});
                $(".userPassword").animate({left:"0%"});

//            modelSite.updateSite($scope.site);    // use firebase for database
//            location.href = "site.html";
            }
        };



        $scope.modifypassword = function(){
            $scope.cssoldpassword = false;
            $scope.cssnewpassword = false;
            $scope.cssnewpassword2 = false;
            $scope.cssshowinconsistent = false;

            if($scope.userdata.oldpassword != $scope.userFirebase.password){
                $scope.cssoldpassword = true;
                $("#oldpassword").focus();

            }else if($scope.userdata.newpassword1 == ""){
                $scope.cssnewpassword = true;
                $("#newpassword").focus();

            }else if($scope.userdata.newpassword2 == ""){
                $scope.cssnewpassword2 = true;
                $("#conformpassword").focus();

            }else if($scope.userdata.newpassword1 != $scope.userdata.newpassword2){
                $scope.cssshowinconsistent = true;
                $("#conformpassword").focus();

            }else{
                $scope.userFirebase = {
                    email : $scope.userFirebase.email,
                    password : $scope.userdata.newpassword1,
                    firstname : $scope.userFirebase.firstname,
                    lastname : $scope.userFirebase.lastname,
                    mobilenumber : $scope.userFirebase.mobilenumber,
                    gender : $scope.userFirebase.gender
                };
//            modelSite.updateSite($scope.site);     // use firebase for database
                $scope.cssshowpasswordbox = false;
            }
        };
    })

};



page.c.userLoginController = function($scope, $location, angularFire, modelSite) {
    var url = "https://vcplatform.firebaseIO.com/user";
    var promise = angularFire(url, $scope, 'userFirebase', {});

    $scope.userdata = {
        email : '',
        password : ''
    };

    //登录
    $scope.userlogin = function(callback){
        if (callback.$valid) {
            console.log($scope.userFirebase.password1);
            if( $scope.userdata.password != $scope.userFirebase.password || $scope.userdata.email != $scope.userFirebase.email){
                alert('Email or Password error!');

            }else{
                location.href = "user.html";
            }
        }
    }
};




page.c.userRegisterController = function($scope, $location, $timeout, angularFire) {
//    $scope.site = modelSite.getSite(); // use firebase for database

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
                        password : $scope.userdata.password1
                    };


                    //$scope.site.userinfo = $scope.userdata;  // use firebase for database
                    //modelSite.updateSite($scope.site);     // use firebase for database
                    $timeout(function() {
                        location.href = "user.html";
                    }, 2000);

                }else{
                    $scope.csspasswordprompt = true;
                }
            }
        }
    });
};






page.c.siteController = function($scope, $location, angularFire) {
    var url = "https://vcplatform.firebaseIO.com/siteinfo";
    var promise = angularFire(url, $scope, 'siteinfoFirebase', {});

//    $scope.site = modelSite.getSite();    // use firebase for database

    promise.then(function() {
        $scope.siteinfodata = {
            name : $scope.siteinfoFirebase.name,
            domain : $scope.siteinfoFirebase.domain,
            meta : $scope.siteinfoFirebase.meta,
            type : $scope.siteinfoFirebase.type,
            rssapi : $scope.siteinfoFirebase.rssapi
        };

        $scope.savesiteinfo = function(callback){
            if (callback.$valid) {
                $scope.siteinfoFirebase = {
                    name : $scope.siteinfodata.name,
                    domain : $scope.siteinfodata.domain,
                    meta : $scope.siteinfodata.meta,
                    type : $scope.siteinfodata.type,
                    rssapi : $scope.siteinfodata.rssapi
                };
//            modelSite.saveSiteInfo($scope.siteinfodata);   // use firebase for database
            }
        }
    })
};