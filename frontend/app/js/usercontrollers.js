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

    var url = "https://vcplatform.firebaseIO.com/usernow";
    $scope.userFirebase = angularFire(url, $scope, 'userFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    $scope.userdata = {};
    var usercheckexist;
    $scope.usersFirebase.then(function() {
        usercheckexist = _.findWhere($scope.usersFirebase, {email: $scope.userFirebase.email});

        $scope.userdata = {
            firstname : usercheckexist.firstname,
            lastname : usercheckexist.lastname,
            mobilenumber : usercheckexist.mobilenumber,
            email : usercheckexist.email,
            oldpassword : '',
            newpassword1 : '',
            newpassword2 : '',
            gender : usercheckexist.gender
        };

        console.log(usercheckexist);
    });



    //显示修改密码form
    $scope.changepassword = function(){
        $scope.cssshowpasswordbox = true;
        $(".userAccount").animate({left:"22%"});
        $(".userPassword").animate({left:"99.3%"});
    };

    //显示头像是否上传
    $scope.uploadavator = function(){
        $scope.csshaveavatar = true;
    };


    //保存用户基本信息
    $scope.saveuserinfo = function(callback){
        if (callback.$valid) {
            usercheckexist = {
                email : usercheckexist.email,
                password : usercheckexist.password,
                firstname : $scope.userdata.firstname,
                lastname : $scope.userdata.lastname,
                mobilenumber : $scope.userdata.mobilenumber,
                gender : $scope.userdata.gender
            };

            console.log(usercheckexist, $scope.userdata);
            $(".userAccount").animate({left:"28%"});
            $(".userPassword").animate({left:"0%"});

            //保存到firebase中
            for(var i = $scope.usersFirebase.length; i--; i>=0){
                if ($scope.usersFirebase[i].email == usercheckexist.email) {
                    $scope.usersFirebase[i] = usercheckexist;
                }
            }
            console.log(usercheckexist);
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
            $scope.usercheckexist = {
                email : $scope.usercheckexist.email,
                password : $scope.userdata.newpassword1,
                firstname :$scope.usercheckexist.firstname,
                lastname : $scope.usercheckexist.lastname,
                mobilenumber : $scope.usercheckexist.mobilenumber,
                gender : $scope.usercheckexist.gender
            };

            //保存到firebase中
            for(var i = $scope.usersFirebase.length; i--; i>=0){
                if ($scope.usersFirebase[i].email == $scope.usercheckexist.email) {
                    $scope.usersFirebase[i] = $scope.usercheckexist;
                }
            }
//              modelSite.updateSite($scope.site);     // use firebase for database
            $scope.cssshowpasswordbox = false;
        }
    };


};



page.c.userLoginController = function($scope, $location, $timeout, angularFire) {
    var singleuserurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.userFirebase = angularFire(singleuserurl, $scope, 'userFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    $scope.userdata = {
        email : '',
        password : ''
    };

    $scope.usersFirebase.then(function(){
        //登录
        $scope.userlogin = function(callback){
            var userlist = $scope.usersFirebase;
            var usercheckexist = _.where($scope.usersFirebase, {email: $scope.userdata.email, password: $scope.userdata.password});

            console.log(usercheckexist.length, userlist);
            if (callback.$valid) {
                if(usercheckexist.length == 0){
                    alert('Email or Password error!');

                }else{
                    $scope.userFirebase ={
                        email : usercheckexist[0].email,
                        password : usercheckexist[0].password,
                        firstname : usercheckexist[0].firstname,
                        lastname : usercheckexist[0].lastname,
                        mobilenumber : usercheckexist[0].mobilenumber,
                        gender : usercheckexist[0].gender
                    };

                    $timeout(function() {
                        location.href = "user.html";
                    }, 1000);
                }

            }
        }
    })
};




page.c.userRegisterController = function($scope, $location, $timeout, angularFire) {
//    $scope.site = modelSite.getSite(); // use firebase for database
    var singleuserurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.userFirebase = angularFire(singleuserurl, $scope, 'userFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    $scope.userdata = {
        email : '',
        password1 : '',
        password2 : ''
    };

    $scope.csspasswordprompt = false;

    var usercheckexist =[] ;


    $scope.usersFirebase.then(function() {



    //注册用户 保存密码和邮箱
    $scope.saveemailinfo = function(callback){
        usercheckexist = _.where($scope.usersFirebase, {email: $scope.userdata.email, password: $scope.userdata.password1});
        console.log(usercheckexist);

        if (callback.$valid) {

            if(usercheckexist.length == 1){
                $scope.cssemailprompt = true;

            }else if($scope.userdata.password1 == $scope.userdata.password2){
                    $scope.csspasswordprompt = false ;

                    var newuser = {
                        email : $scope.userdata.email,
                        password : $scope.userdata.password1,
                        firstname : "",
                        lastname : "",
                        mobilenumber : "",
                        gender : ""
                    };

                    $scope.usersFirebase.push(newuser);

                    $scope.userFirebase ={
                        email : $scope.userdata.email,
                        password : $scope.userdata.password1,
                        firstname : "",
                        lastname : "",
                        mobilenumber : "",
                        gender : ""
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

    })
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