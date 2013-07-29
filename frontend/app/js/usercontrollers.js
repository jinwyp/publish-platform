'use strict';


var vcpapp = angular.module('vcpmodule', ['firebase']);

var page = {
    c:{}
};
vcpapp.controller(page.c);


/* Controllers */
<<<<<<< HEAD
page.c.userInfoController = function($scope, $location, angularFire, modelSite) {
    $scope.csshaveavatar = false;
    $scope.cssshowpasswordbox = false;

//    $scope.site = modelSite.getSite(); // use firebase for database
//    $scope.user = $scope.site.userinfo;

    var url = "https://vcplatform.firebaseIO.com/user";
    var promise = angularFire(url, $scope, 'userFirebase', {});

    $scope.userdata = {
    };
=======
page.c.userInfoController = function($scope, $location, $timeout, angularFire) {
//    $scope.site = modelSite.getSite(); // use firebase for database
//    $scope.user = $scope.site.userinfo;

    var usersessionurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.usersessionFirebase = angularFire(usersessionurl, $scope, 'usersessionFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    $scope.userdata = {};

    $scope.csshaveavatar = false;
    $scope.cssshowpasswordbox = false;

    var usercheckexist;
    $scope.usersFirebase.then(function() {
        usercheckexist = _.findWhere($scope.usersFirebase, {email: $scope.usersessionFirebase.email});
        console.log(usercheckexist);
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
    });


>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1

    //显示修改密码form
    $scope.changepassword = function(){
        $scope.cssshowpasswordbox = true;
<<<<<<< HEAD
        $(".userAccount").animate({left:"18%"});
        $(".userPassword").animate({left:"100%"});
=======
        $(".userAccount").animate({left:"22%"});
        $(".userPassword").animate({left:"99.3%"});
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
    };

    //显示头像是否上传
    $scope.uploadavator = function(){
        $scope.csshaveavatar = true;
    };

<<<<<<< HEAD
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

=======

    //保存用户基本信息
    $scope.saveuserinfo = function(callback){
        if (callback.$valid) {
            var currentuser = {
                email : usercheckexist.email,
                password : usercheckexist.password,
                firstname : $scope.userdata.firstname,
                lastname : $scope.userdata.lastname,
                mobilenumber : $scope.userdata.mobilenumber,
                gender : $scope.userdata.gender
            };

            //保存到firebase中
            for(var i = $scope.usersFirebase.length; i--; i>=0){
                if ($scope.usersFirebase[i].email == currentuser.email) {
                    $scope.usersFirebase[i] = currentuser;
                    break;
                }
            }

//            modelSite.updateSite($scope.site);    // use firebase for database

            $timeout(function() {
                location.href = "site.html";
            }, 1000);
        }
    };



    $scope.modifypassword = function(){
        $scope.cssoldpassword = false;
        $scope.cssnewpassword = false;
        $scope.cssnewpassword2 = false;
        $scope.cssshowinconsistent = false;

        if($scope.userdata.oldpassword != usercheckexist.password){
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
            var currentuser = {
                email : usercheckexist.email,
                password : $scope.userdata.newpassword1,
                firstname :usercheckexist.firstname,
                lastname : usercheckexist.lastname,
                mobilenumber : usercheckexist.mobilenumber,
                gender : usercheckexist.gender
            };

            $scope.cssshowpasswordbox = false;

            //保存到firebase中
            for(var i = $scope.usersFirebase.length; i--; i>=0){
                if ($scope.usersFirebase[i].email == currentuser.email) {
                    $scope.usersFirebase[i] = currentuser;
                }
            }
            $(".userAccount").animate({left:"28%"});
            $(".userPassword").animate({left:"0%"});
//              modelSite.updateSite($scope.site);     // use firebase for database
        }
    };
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
};



<<<<<<< HEAD
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
=======


page.c.userLoginController = function($scope, $location, $timeout, angularFire, modelSite) {
    var usersessionurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.usersessionFirebase = angularFire(usersessionurl, $scope, 'usersessionFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    $scope.userdata = {
        email : modelSite.getLastLoginUserAccount(),
        password : '',
        rememberusername : false
    };

    $scope.cssloginprompt = false;

    //登录
    $scope.userlogin = function(callback){
        var usersdata = $scope.usersFirebase;

        if (callback.$valid) {
            var usercheckexist = _.where(usersdata, {email: $scope.userdata.email, password: $scope.userdata.password});
            if(usercheckexist.length < 1){
                $scope.cssloginprompt = true;
            }else{
                $scope.cssloginprompt = false;
                $scope.usersessionFirebase ={
                    email : usercheckexist[0].email,
                    password : usercheckexist[0].password
                };

                if($scope.userdata.rememberusername){
                    modelSite.saveLastUserAccount($scope.userdata.email);
                }

                $timeout(function() {
                    location.href = "user.html";
                }, 1000);
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
            }
        }
    }
};




page.c.userRegisterController = function($scope, $location, $timeout, angularFire) {
//    $scope.site = modelSite.getSite(); // use firebase for database
<<<<<<< HEAD

    var url = "https://vcplatform.firebaseIO.com/user";
    var promise = angularFire(url, $scope, 'userFirebase', {});
=======
    var usersessionurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.usersessionFirebase = angularFire(usersessionurl, $scope, 'usersessionFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1

    $scope.userdata = {
        email : '',
        password1 : '',
        password2 : ''
    };

    $scope.csspasswordprompt = false;
<<<<<<< HEAD

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
=======
    $scope.cssemailprompt = false;

    //注册用户 保存密码和邮箱
    $scope.saveemailinfo = function(callback){
        var usersdata = $scope.usersFirebase;
        var usercheckexist = _.where(usersdata, {email: $scope.userdata.email, password: $scope.userdata.password1});
        console.log(usercheckexist, callback.$valid);
        if (callback.$valid) {

            if(usercheckexist.length >= 1){
                $scope.cssemailprompt = true;
            }else if($scope.userdata.password1 == $scope.userdata.password2){
                $scope.csspasswordprompt = false ;
                $scope.cssemailprompt = false;

                var newuser = {
                    email : $scope.userdata.email,
                    password : $scope.userdata.password1,
                    firstname : "",
                    lastname : "",
                    mobilenumber : "",
                    gender : ""
                };

                $scope.usersFirebase.push(newuser);

                $scope.usersessionFirebase = {
                    email : $scope.userdata.email,
                    password : $scope.userdata.password1
                };

                $timeout(function() {
                    location.href = "user.html";
                }, 1000);

                //$scope.site.userinfo = $scope.userdata;  // use firebase for database
                //modelSite.updateSite($scope.site);     // use firebase for database

            }else{
                $scope.csspasswordprompt = true;
            }
        }else{

        }
    }

>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
};






page.c.siteController = function($scope, $location, angularFire) {
    var url = "https://vcplatform.firebaseIO.com/siteinfo";
    var promise = angularFire(url, $scope, 'siteinfoFirebase', {});

//    $scope.site = modelSite.getSite();    // use firebase for database
<<<<<<< HEAD
=======
    $scope.selectpublish = false;
    $scope.selectone = false;
    $scope.selectcomplex = false;

    $scope.clickpublish = function(){
        $scope.selectpublish = true;
        $scope.selectone = false;
        $scope.selectcomplex = false;
    };

    $scope.clickone = function(){
        $scope.selectpublish = false;
        $scope.selectone = true;
        $scope.selectcomplex = false;
    };

    $scope.clickcomplex = function(){
        $scope.selectpublish = false;
        $scope.selectone = false;
        $scope.selectcomplex = true;
    };
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1

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