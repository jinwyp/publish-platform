'use strict';

/* App Module */

var vcpapp = angular.module('vcpmodule', ['ui.bootstrap', 'firebase', 'vcpmodule.directive']);



vcpapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/',                      {templateUrl: 'article_list_tpl.html', controller: vcpapp.controller.articleList }).
        when('/newarticle',          {templateUrl: 'article_new_tpl.html', controller: vcpapp.controller.articleCreateNew }).
        when('/detail/:articleId',  {templateUrl: 'article_detail_tpl.html', controller: vcpapp.controller.articleDetail }).

        otherwise({redirectTo: '/'});
}]);



<<<<<<< HEAD
/* Controllers */
vcpapp.controller.articleList = function ($scope, $filter, modelArticle) {


    $scope.articlestotaldata = modelArticle.getArticleList();     // use firebase for database

    var copytotaldata = [];
    copytotaldata = $scope.articlestotaldata;
=======



/* Controllers */

vcpapp.controller.articleList = function ($scope, $filter, $q, angularFire, modelArticle) {

    var usersessionurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.usersessionFirebase = angularFire(usersessionurl, $scope, 'usersessionFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    var urlartilcelist = 'https://vcplatform.firebaseIO.com/articles';
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );



    var copytotaldata = [];
    var articlesinonepage;
    var pagecount;
    var usersession;

    $q.all([$scope.usersessionFirebase, $scope.usersFirebase, $scope.articlesFirebase]).then(function() {
        $scope.articlestotaldata = $scope.articlesFirebase;
        var usersdata = $scope.usersFirebase;
        usersession = _.findWhere(usersdata, {email: $scope.usersessionFirebase.email});
        console.log(usersession);
//    $scope.articlestotaldata = modelArticle.getArticleList();     // use firebase for database

    copytotaldata = $scope.articlestotaldata;

>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
    //排序所有数据
    $scope.loadinit = function(flag,sort){
        for(var i = 0; i < $scope.articlestotaldata.length; i++){
               for(var j = 0;j < $scope.articlestotaldata.length; j++){
                   if(sort == 'desc'){
                       if(flag == 'published'){
                           if($scope.articlestotaldata[i].published > $scope.articlestotaldata[j].published){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'updated'){
                           if($scope.articlestotaldata[i].updated > $scope.articlestotaldata[j].updated){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'clickcount'){
                           if($scope.articlestotaldata[i].clickcount > $scope.articlestotaldata[j].clickcount){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }
                   }else{
                       if(flag == 'published'){
                           if($scope.articlestotaldata[i].published < $scope.articlestotaldata[j].published){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'updated'){
                           if($scope.articlestotaldata[i].updated < $scope.articlestotaldata[j].updated){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'clickcount'){
                           if($scope.articlestotaldata[i].clickcount < $scope.articlestotaldata[j].clickcount){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }
                   }
               }
        }
<<<<<<< HEAD
    }

    $scope.loadinit('updated','desc');
    //页面总数
    var count=10;
    var pagecount=$scope.articlestotaldata.length/count;
    $scope.noOfPages =parseInt(pagecount)== pagecount ? pagecount : parseInt(pagecount)+1;
=======
    };

    $scope.loadinit('updated','desc');

    //页面总数
    articlesinonepage = 10;  // 文章每页数量
    pagecount = $scope.articlestotaldata.length / articlesinonepage;

    $scope.noOfPages = parseInt(pagecount)== pagecount ? pagecount : parseInt(pagecount) + 1;  //当前页数
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
    if($scope.noOfPages==0){
        $scope.noOfPages=1;
    }

    //当前页数
    $scope.currentPage = 1;
    $scope.articlesdata = [];
<<<<<<< HEAD
=======

>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
    //获取选中数据
    $scope.loadcurrentpagedata = function(){
        $scope.articlesdata.length = 0;
        if($scope.noOfPages != 0){
            if($scope.currentPage > $scope.noOfPages){
                $scope.currentPage = $scope.noOfPages;
            }
        }
<<<<<<< HEAD
        var j = 0;
        for(var i = (($scope.currentPage-1)*count);i < $scope.articlestotaldata.length;i ++){
            $scope.articlesdata[j] = $scope.articlestotaldata[i];
            j++;
            if($scope.articlesdata.length > (count-1)){
=======

        var j = 0;
        for(var i = (($scope.currentPage-1)*articlesinonepage);i < $scope.articlestotaldata.length;i ++){
            $scope.articlesdata[j] = $scope.articlestotaldata[i];
            j++;
            if($scope.articlesdata.length > (articlesinonepage-1)){
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
                return;
            }
        }
    }
<<<<<<< HEAD
    $scope.loadcurrentpagedata();
    $scope.articlepreviewdata = $scope.articlesdata[0];
    $scope.isCollapsed = true;

    var copyselectedlist='';
    $scope.clickArticle = function(article, index) {
        if(copyselectedlist != ''){
            copyselectedlist.isshowediticon=false;
        }
        $scope.articlepreviewdata = article;
        $scope.cssarticleindex = index;
        this.isshowediticon = true;
        copyselectedlist=this;
    };

    $scope.openModal = function () {
        $scope.cssmodalshow = true;
    };
    $scope.closeModal = function () {
        $scope.cssmodalshow = false;    //关闭弹出提示框 Modal
    };
=======

    $scope.loadcurrentpagedata();
    $scope.articlepreviewdata = $scope.articlesdata[0];


    //检测currentPage值
    $scope.$watch('currentPage', function(newPage){
        $scope.watchPage = newPage;
        $scope.loadcurrentpagedata();
    });


    });//firebase then End





    $scope.cssshowupdate = true;
    $scope.cssshowpublish = true;
    $scope.cssshowclick = true;

    //按类型排序
    $scope.orderbytype = function(flag,sort){
        $scope.loadinit(flag,sort);
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
        if(flag == 'updated'){
            $scope.cssshowupdate = !$scope.cssshowupdate;
        }else if(flag == 'published'){
            $scope.cssshowpublish = !$scope.cssshowpublish;
        }else if(flag == 'clickcount'){
            $scope.cssshowclick = !$scope.cssshowclick;
        }
    };



    $scope.showEditIcon = function(index){
        $scope.cssshowediticon = index;
    };

    $scope.clickArticle = function(article, index) {
        $scope.articlepreviewdata = article;
        $scope.cssarticleindex = index;
    };

    $scope.openDelModal = function (article) {
        $scope.articlepreviewdata = article;
        $scope.cssshowdelmodal = true;
    };

    $scope.closeDelModal = function () {
        $scope.cssshowdelmodal = false;    //关闭弹出提示框 Modal
    };

>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

<<<<<<< HEAD
    $scope.delArticle = function(articleid) {
        $scope.cssmodalshow = false;      //关闭弹出提示框 Modal
        modelArticle.delArticleById(articleid);
        $scope.articlestotaldata = modelArticle.getArticleList();
        copytotaldata = $scope.articlestotaldata;
        var pagecount1=$scope.articlestotaldata.length/count;
        $scope.noOfPages =parseInt(pagecount1)== pagecount1 ? pagecount1 : parseInt(pagecount1)+1;
        if($scope.noOfPages==0){
            $scope.noOfPages=1;
        }
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
=======

    $scope.delArticle = function(article) {


        var getdeleteindex=$scope.searchdeleteindex(article);

        $scope.cssshowdelmodal = false;      //关闭弹出提示框 Modal
//        modelArticle.delArticleById(articleid);
        $scope.articlestotaldata.splice(getdeleteindex, 1);
        //$scope.articlestotaldata.splice(article, 1);
//        $scope.articlestotaldata = modelArticle.getArticleList();

        copytotaldata = $scope.articlestotaldata;
        var pagecount1 = $scope.articlestotaldata.length/articlesinonepage;
        $scope.noOfPages = parseInt(pagecount1)== pagecount1 ? pagecount1 : parseInt(pagecount1)+1;
        if($scope.noOfPages == 0){
            $scope.noOfPages = 1;
        }
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
    };

    $scope.searchdeleteindex = function(article){
        for(var i = 0; i < $scope.articlestotaldata.length; i++){
            if(article.id == $scope.articlestotaldata[i].id){
                return i;
            }
        }
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
    }

    //显示List详细内容
    $scope.loadhtml = function(val) {
        return val;
<<<<<<< HEAD
    }

    //点击页面
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    //检测currentPage值
    $scope.$watch('currentPage', function(newPage){
        $scope.watchPage = newPage;
        $scope.loadcurrentpagedata();
    });

    $scope.showupdate=true;
    $scope.showpublish=true;
    $scope.showclick=true;
    //按类型排序
    $scope.orderbytype=function(flag,sort){
        $scope.loadinit(flag,sort);
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
        if(flag == 'updated'){
            $scope.showupdate = !$scope.showupdate;
        }else if(flag == 'published'){
            $scope.showpublish = !$scope.showpublish;
        }else if(flag == 'clickcount'){
            $scope.showclick = !$scope.showclick;
        }
    }

    $scope.showcomments = false;
    //点击draft按钮事件

    var nowdata1='',articlestatus="";
    $scope.clickstatus=function(param,data){
        $scope.showcomments = true;
        nowdata1=this.article;
        articlestatus = param;
        //this.article.status=param;
        $("#comments")[0].value="";
    }

    $scope.closecomments = function(){
        $scope.showcomments = false;
    }
=======
    };



    $scope.cssshowcomments = false;

    //点击更改文章状态按钮事件
    $scope.clickarticlestatus = function(status1, article){
        $scope.cssshowcomments = true;
        $scope.currentarticle  = article;
        $scope.currentarticlestatus = status1;
        $scope.currentarticlereviewcomment = "";
    };

    $scope.closecomments = function(){
        $scope.cssshowcomments = false;
    };

    $scope.savearticlestatus = function(){
        var newstatus ={
            date : modelArticle.getDateNow(),
            status : $scope.currentarticlestatus,
            version : $scope.currentarticle.revision.length,
            operator : usersession.firstname,
            reviewcomment : $scope.currentarticlereviewcomment
        };

        if( $scope.currentarticlestatus == "published"){
            $scope.currentarticle.published = modelArticle.getDateNow();
        }
        $scope.currentarticle.updated = modelArticle.getDateNow();
        $scope.currentarticle.status = $scope.currentarticlestatus;
        $scope.currentarticle.lastreviewcomment = $scope.currentarticlereviewcomment;
        $scope.currentarticle.editor =  usersession.firstname;
        $scope.currentarticle.reviewhistory.push(newstatus);

/*        $scope.currentarticle.revision.push(newrevision);
        modelArticle.saveArticle(nowdata1);          //使用firebase
*/
        $scope.cssshowcomments = false;
        //保存到firebase中
        for(var i = $scope.articlestotaldata.length; i--; i>=0){
            if ($scope.articlestotaldata[i].id == $scope.currentarticle.id) {
                $scope.articlestotaldata[i] = $scope.currentarticle;
            }
        }
    };
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1

    //搜索提示
    $scope.selected = undefined;
    $scope.states = [];
    /*  $scope.states.length = 0;
    var author1=[];
    for(var i = 0;i < copytotaldata.length; i++){
        $scope.states[i] = copytotaldata[i].title;
        author1[i] = copytotaldata[i].author;
    }
    author1= _.union(author1);
    $scope.states=_.union($scope.states);
    for(var i = 0;i < author1.length; i++){
        $scope.states.push(author1[i]);
    }*/

    $scope.selectdata=function(){
        var titledata=[],data=[],articledata=[];
        if($scope.selected==""){
            $scope.articlestotaldata=copytotaldata;
        }else{
            for(var i = 0;i < copytotaldata.length; i++){
                titledata[i] = copytotaldata[i].title;
                articledata[i] = copytotaldata[i].author;
            }

            //获取匹配title
            var resultdata = $filter('filter')(titledata, $scope.selected);

            var resultarticle = $filter('filter')(articledata, $scope.selected);
            //去除重复title
            resultdata=_.union(resultdata);
            resultarticle= _.union(resultarticle);
            //根据title获取相应的
            // 数据
            for(var j = 0;j < resultdata.length; j++){
                for(var i = 0;i < copytotaldata.length; i++){
                    if(copytotaldata[i].title == resultdata[j]){
                        data.push(copytotaldata[i]);
                    }
                }
            }
            for(var j = 0;j < resultarticle.length; j++){
                for(var i = 0;i < copytotaldata.length; i++){
                    if(copytotaldata[i].author == resultarticle[j]){
                        data.push(copytotaldata[i]);
                    }
                }
            }
            $scope.articlestotaldata = data;
        }

<<<<<<< HEAD
        var pagecount1=$scope.articlestotaldata.length/count;
=======
        var pagecount1 = $scope.articlestotaldata.length/articlesinonepage;
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
        $scope.noOfPages =parseInt(pagecount1)== pagecount1 ? pagecount1 : parseInt(pagecount1)+1;
        if($scope.noOfPages==0){
            $scope.noOfPages=1;
        }
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
<<<<<<< HEAD
    }

    $scope.savedata = function(){
        nowdata1.published = modelArticle.getDateNow();
        nowdata1.reviewcomment=$("#comments")[0].value;
        nowdata1.status = articlestatus;
/*        var newrevisionid = nowdata1.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
            "title" : nowdata1.title, "contentbody": nowdata1.contentbody, "status": nowdata1.status,
            "created": nowdata1.created, "updated":nowdata1.updated, "published": nowdata1.published,
            "author": nowdata1.author,  "editor": nowdata1.editor,  "clickcount":nowdata1.clickcount,
            "category": nowdata1.category, "categoryid": nowdata1.categoryid,
            "tags": nowdata1.tags,"versioncomment":nowdata1.versioncomment
        };
        nowdata1.revision.push(newrevision);*/
        modelArticle.saveArticle(nowdata1);
        $scope.showcomments = false;
    }

    $scope.isshowediticon = false;
    $scope.showediticon = function(){
          this.isshowediticon = true;
    }


    $scope.hideediticon = function($index){
        if($scope.cssarticleindex == $index){
            this.isshowediticon = true;
        }else{
            this.isshowediticon = false;
        }
    }
=======
    };




>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1

    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
<<<<<<< HEAD
}

vcpapp.controller.articleDetail = function ($scope, $routeParams, modelArticle, modelTag) {
    $scope.cssTagsPanel = false;
    var articleId = $routeParams.articleId;
    $scope.articledata = modelArticle.getArticleById(articleId);
    var tagstr = '';
    for(var i=0;i<$scope.articledata.tags.length;i++){
        tagstr += $scope.articledata.tags[i].tagname+',';
    }
    $('.tagsinput').importTags(tagstr);
    $(".tagsinput").tagsInput();    //初始化 加载tag标签


    $scope.showTagsPanel = function() {
        $scope.cssTagsPanel = !$scope.cssTagsPanel;
    }


    $scope.openModal = function () {
        $scope.cssmodalshow = true;
    };
    $scope.closeModal = function () {
=======
};








vcpapp.controller.articleDetail = function ($scope, $routeParams, $location, $q, modelArticle, angularFire) {

    var usersessionurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.usersessionFirebase = angularFire(usersessionurl, $scope, 'usersessionFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    var urlmaxid = "https://vcplatform.firebaseIO.com/maxid";
    $scope.maxidFirebase = angularFire(urlmaxid, $scope, 'maxidFirebase', {});

    var urltaglist = "https://vcplatform.firebaseIO.com/tags";
    $scope.tagsFirebase = angularFire(urltaglist, $scope, 'tagsFirebase', [] );

    var urlartilcelist = "https://vcplatform.firebaseIO.com/articles";
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );


    function getMaxTagId(){
        if($scope.maxidFirebase.tagid == undefined ){
            $scope.maxidFirebase = {tagid : 100001};
        }else{
            $scope.maxidFirebase.tagid = $scope.maxidFirebase.tagid + 1;
        }
        return $scope.maxidFirebase.tagid
    }

    function checkTagExist(tagname) {
        var tagresult = _.findWhere($scope.tagsFirebase, {tagname: tagname});

        if (tagresult === undefined) {
            return false;
        }else{
            return tagresult;
        }
    }

    $scope.cssTagsPanel = false;
    var usersession;
    var articleId = $routeParams.articleId;
//    $scope.articledata = modelArticle.getArticleById(articleId);

    $q.all([$scope.usersessionFirebase, $scope.usersFirebase, $scope.maxidFirebase, $scope.articlesFirebase, $scope.tagsFirebase]).then(function() {
        var usersdata = $scope.usersFirebase;
        usersession = _.findWhere(usersdata, {email: $scope.usersessionFirebase.email});
        console.log(usersession);

        for(var i = $scope.articlesFirebase.length; i--; i>=0){

            if ($scope.articlesFirebase[i].id == articleId) {

                $scope.articledata = $scope.articlesFirebase[i];

                if (typeof($scope.articledata.tags) == "undefined"){
                    $scope.articledata.tags =[];
                }

                var tagstr = '';

                for(var j = 0;j<$scope.articledata.tags.length;j++){
                    tagstr += $scope.articledata.tags[j].tagname+',';
                }
                $('.tagsinput').importTags(tagstr);
                $(".tagsinput").tagsInput();    //初始化 加载tag标签
                break;
            }
        }


    });

    $scope.openDelModal = function () {
        $scope.cssmodalshow = true;
    };
    $scope.closeDelModal = function () {
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
        $scope.cssmodalshow = false;   //关闭弹出提示框 Modal
    };
    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

    $scope.delArticle = function(articleid) {
        $scope.cssmodalshow = false;  //关闭弹出提示框 Modal
<<<<<<< HEAD
        modelArticle.delArticleById(articleid);
        //alert('Article Deleted');
        $scope.articledata = modelArticle.getArticleList()[0];
    };

     $scope.saveArticle = function(feed) {
        $scope.ispublish=false;
        $scope.articledata.versioncomment='';
        $scope.articledata.updated=modelArticle.getDateNow();
        $scope.articledata.status='draft';
        if (feed.$valid) {
             $scope.showcomments=true;
        };
    }
    $scope.showcomments = false;

    //关闭comments对话框
    $scope.closecomments = function(){
        $scope.showcomments = false;
    }

     $scope.savedata=function(){
        var temptagslistname = $(".tagsinput").exportTags();
        $scope.articledata.tags = [];
        for(var i=0;i<temptagslistname.length;i++){
            if(  modelTag.checkTagExist(temptagslistname[i]) ){
                var newtag = modelTag.checkTagExist(temptagslistname[i]);
            }else{
                var newtag = {
                    "tagid" : modelTag.getMaxTagID(),
                    "tagname" : temptagslistname[i]
                }
                modelTag.createNewTag(newtag);
            }
            $scope.articledata.tags.push(newtag);
        }
        //$scope.articledata.category=$(".dk_label")[0].textContent;
=======
//        modelArticle.delArticleById(articleid);

        for(var i = $scope.articlesFirebase.length; i--; i>=0){
            if ($scope.articlesFirebase[i].id === articleid) {
                $scope.articlesFirebase.splice(i, 1);
            }
        }
        $location.path('/');
    };

    $scope.cssshowmodifymodal = false;


    $scope.confirmModifyArticle = function(formcallback) {
        if (formcallback.$valid) {
            $scope.cssshowmodifymodal = true;
            $scope.newversioncomment = "";
        }
    };


    //关闭version comment对话框
    $scope.closecomments = function(){
        $scope.cssshowmodifymodal = false;
    };


    $scope.saveModifyArticle = function(){
        $scope.articledata.updated = modelArticle.getDateNow();
        $scope.articledata.editor = usersession.firstname;
        $scope.articledata.lastversioncomment = $scope.newversioncomment;


        var temptagslistname = $(".tagsinput").exportTags();
        $scope.articledata.tags = [];
        //在tag 数据库查询是否是已经存在的tag 如果不存在就新增加到firebase里面
        for(var i=0; i<temptagslistname.length; i++){
            var newtag;
            if(checkTagExist(temptagslistname[i])){
                newtag = checkTagExist(temptagslistname[i]);
            }else{
                newtag = {
                    "tagid" : getMaxTagId(),
                    "tagname" : temptagslistname[i]
                };
                $scope.tagsFirebase.push(newtag);
            }
            $scope.articledata.tags.push(newtag);
        }

>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
        var newrevisionid = $scope.articledata.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
<<<<<<< HEAD
            "title" : $scope.articledata.title, "contentbody": $scope.articledata.contentbody, "status": $scope.articledata.status,
            "created": $scope.articledata.created, "updated":modelArticle.getDateNow(), "published": $scope.articledata.published,
            "author": $scope.articledata.author,  "editor": $scope.articledata.editor,  "clickcount":$scope.articledata.clickcount,
            "category": $scope.articledata.category, "categoryid": $scope.articledata.categoryid,
            "tags": $scope.articledata.tags,"versioncomment":$scope.articledata.versioncomment,
            "reviewcomment": $scope.articledata.reviewcomment
        };

        $scope.articledata.revision.push(newrevision);
        modelArticle.saveArticle($scope.articledata);
        $scope.showcomments = false;
    }

    $scope.ispublish=false;
    $scope.publisharticle=function(feed){
        $scope.articledata.versioncomment='';
        $scope.articledata.published=modelArticle.getDateNow();
        $scope.articledata.status='publish';
        if (feed.$valid) {
            $scope.showcomments=true;
        };
        //modelArticle.saveArticle($scope.articledata);
    };

=======
            "title" : $scope.articledata.title,
            "description" : $scope.articledata.description,
            "contentbody": $scope.articledata.contentbody,
            "status": $scope.articledata.status,
            "created": $scope.articledata.created,
            "updated": modelArticle.getDateNow(),
            "published": $scope.articledata.published,
            "author": $scope.articledata.author,
            "editor": usersession.firstname,
            "clickcount":$scope.articledata.clickcount,
            "category": $scope.articledata.category,
            "categoryid": $scope.articledata.categoryid,
            "tags": $scope.articledata.tags,
            "lastversioncomment":$scope.articledata.lastversioncomment,
            "lastreviewcomment": $scope.articledata.lastreviewcomment
        };

        $scope.articledata.revision.push(newrevision);

//        modelArticle.saveArticle($scope.articledata);

        for(var i = $scope.articlesFirebase.length; i--; i>=0){
            if ($scope.articlesFirebase[i].id == articleId) {
                $scope.articlesFirebase[i] = $scope.articledata;
            }
        }

        $scope.cssshowmodifymodal = false;
    };



>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
    //显示Edit预览内容
    $scope.showeditpreview = function(val){
        return val;
    };

<<<<<<< HEAD
    $scope.displayversioninfo=function(data){
       // var data=$scope.articledata.revision[index];
        $scope.articledata.title=data.title;
        $scope.articledata.contentbody=data.contentbody;
        $scope.articledata.tags=data.tags;
=======
    $scope.displayversioninfo=function(revisiondata){
       // var data=$scope.articledata.revision[index];
        $scope.articledata.title = revisiondata.title;
        $scope.articledata.contentbody = revisiondata.contentbody;
        $scope.articledata.tags = revisiondata.tags;
        if (typeof($scope.articledata.tags) == "undefined"){
            $scope.articledata.tags =[];
        }
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
        var tagstr = '';
        for(var i=0;i<$scope.articledata.tags.length;i++){
            tagstr += $scope.articledata.tags[i].tagname+',';
        }
        $('.tagsinput').importTags(tagstr);
<<<<<<< HEAD
    }
=======
    };


>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1

    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
};



<<<<<<< HEAD
vcpapp.controller.articleCreateNew = function ($scope, $routeParams, $location, modelArticle, modelTag, angularFire) {
    var urluser = "https://vcplatform.firebaseIO.com/user";
    $scope.userFirebase = angularFire(urluser, $scope, 'userFirebase', {});

    $(".tagsinput").tagsInput({
//        'autocomplete': modelTag.getTagList()
    });   //初始化 加载tag标签


    $scope.userFirebase.then(function() {
        $scope.newarticleadata = {
            "id": modelArticle.getMaxArticleID(),
            "title": "",
            "contentbody": "",
            "status": "draft",
            "created": modelArticle.getDateNow(),
            "updated": modelArticle.getDateNow(),
            "published": modelArticle.getDateNow(),
            "author": $scope.userFirebase.firstname ,
            "editor": $scope.userFirebase.firstname ,
            "clickcount": 0,
            "category": "Cosmetics",
=======





vcpapp.controller.articleCreateNew = function ($scope, $routeParams, $location, $q, modelArticle, angularFire ) {
    var usersessionurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.usersessionFirebase = angularFire(usersessionurl, $scope, 'usersessionFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    var urlmaxid = "https://vcplatform.firebaseIO.com/maxid";
    $scope.maxidFirebase = angularFire(urlmaxid, $scope, 'maxidFirebase', {});

    var urltaglist = "https://vcplatform.firebaseIO.com/tags";
    $scope.tagsFirebase = angularFire(urltaglist, $scope, 'tagsFirebase', [] );

    var urlartilcelist = "https://vcplatform.firebaseIO.com/articles";
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );

    function getMaxTagId(){
        if($scope.maxidFirebase.tagid == undefined ){
            $scope.maxidFirebase.tagid = 100001;
        }else{
            $scope.maxidFirebase.tagid = $scope.maxidFirebase.tagid  + 1;
        }
        return $scope.maxidFirebase.tagid
    }

    function getMaxArticleId(){
        if($scope.maxidFirebase.aritcleid == undefined ){
            $scope.maxidFirebase.aritcleid = 100001;
        }else{
            $scope.maxidFirebase.aritcleid = $scope.maxidFirebase.aritcleid  + 1;
        }
        return $scope.maxidFirebase.aritcleid

    }

    function checkTagExist(tagname) {
        var tagresult = _.findWhere($scope.tagsFirebase, {tagname: tagname});

        if (tagresult === undefined) {
            return false;
        }else{
            return tagresult;
        }
    }

    var usersession;

    $q.all([$scope.usersessionFirebase, $scope.usersFirebase, $scope.maxidFirebase, $scope.articlesFirebase, $scope.tagsFirebase]).then(function() {

        var usersdata = $scope.usersFirebase;
        usersession = _.findWhere(usersdata, {email: $scope.usersessionFirebase.email});
        console.log(usersession);

        $scope.newarticleadata = {
            "id": getMaxArticleId(),
            "title": "",
            "description": "",
            "contentbody": "",
            "status": "Draft",
            "created": modelArticle.getDateNow(),
            "updated": modelArticle.getDateNow(),
            "published" : 0,
            "author": usersession.firstname ,
            "editor": usersession.firstname ,
            "clickcount": 0,
            "category" : "Cosmetics",
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
            "categoryid" : 1000,
            "tags": [],
            "revision" : [],
            "lastversioncomment" : "",
            "lastreviewcomment" : "",
            "reviewhistory" : []
        };
<<<<<<< HEAD
    });


=======

        var newstatus ={
            date : modelArticle.getDateNow(),
            status : "Draft",
            version : 1,
            operator : $scope.newarticleadata.author,
            reviewcomment : ''
        };

        $scope.newarticleadata.reviewhistory.push(newstatus);
    });



    $(".tagsinput").tagsInput({
//        'autocomplete': modelTag.getTagList()
    });   //初始化 加载tag标签



>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
    $scope.cssTagsPanel = false;
    $scope.cssmodalshow = false;
    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

    $scope.showEditPreview = function(val){
        return val;
    };

    $scope.conformNewArticle = function(callback) {
        if (callback.$valid) {
            $scope.cssmodalshow = true;
<<<<<<< HEAD
            getMaxArticleId();
        }
    };

    $scope.closeModal = function () {
        $scope.cssmodalshow = false;
    };


    $scope.savedata = function() {
        var temptagslistname = $(".tagsinput").exportTags();
        $scope.newarticleadata.tags=[];
        for(var i=0;i<temptagslistname.length;i++){
             //在tag 数据库查询是否是已经存在的tag
            var newtag ={};

            if(modelTag.checkTagExist(temptagslistname[i])){
            newtag = modelTag.checkTagExist(temptagslistname[i]);
            }else{
                 newtag = {
                     "tagid" : modelTag.getMaxTagID(),
                     "tagname" : temptagslistname[i]
                 }
                 modelTag.createNewTag(newtag);
=======
        }
    };



    $scope.closeModal = function () {
        $scope.cssmodalshow = false;
    };
    $scope.saveNewArtcle = function() {

        //读取文章的Tags
        var temptagslistname = $(".tagsinput").exportTags();
        $scope.newarticleadata.tags = [];

        //在tag 数据库查询是否是已经存在的tag 如果不存在就新增加到firebase里面
        for(var i=0;i<temptagslistname.length;i++){
            var newtag;
            if(checkTagExist(temptagslistname[i])){
                newtag = checkTagExist(temptagslistname[i]);
            }else{
                newtag = {
                    "tagid" : getMaxTagId(),
                    "tagname" : temptagslistname[i]
                };
                $scope.tagsFirebase.push(newtag);
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
            }
            $scope.newarticleadata.tags.push(newtag);
        }

<<<<<<< HEAD
         //增加文章每一次修改版本信息
=======
        //$scope.newarticleadata.category=$(".dk_label")[0].textContent;

        //增加文章每一次修改版本信息
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
        var newrevisionid = $scope.newarticleadata.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
            "title" : $scope.newarticleadata.title,
<<<<<<< HEAD
=======
            "description" : $scope.newarticleadata.description,
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
            "contentbody": $scope.newarticleadata.contentbody,
            "status": $scope.newarticleadata.status,
            "created": $scope.newarticleadata.created,
            "updated": $scope.newarticleadata.updated,
            "published": $scope.newarticleadata.published,
            "author": $scope.newarticleadata.author,
            "editor": $scope.newarticleadata.editor,
            "clickcount":$scope.newarticleadata.clickcount,
            "category": $scope.newarticleadata.category,
            "categoryid": $scope.newarticleadata.categoryid,
            "tags" : $scope.newarticleadata.tags,
<<<<<<< HEAD
            "lastversioncomment":$scope.newarticleadata.versioncomment,
            "lastreviewcomment":$scope.newarticleadata.reviewcomment
        };

         $scope.newarticleadata.revision.push(newrevision);
         $scope.cssmodalshow = false;

         //保存文章
         modelArticle.createNewArticle(angular.copy($scope.newarticleadata));
         $location.path('/');
    }

=======
            "lastversioncomment" : $scope.newarticleadata.lastversioncomment,
            "lastreviewcomment" : $scope.newarticleadata.lastreviewcomment
        };

        $scope.newarticleadata.revision.push(newrevision);
        $scope.cssmodalshow = false;

        //保存文章
//        modelArticle.createNewArticle($scope.newarticleadata);  //使用firebase
        $scope.articlesFirebase.push(angular.copy($scope.newarticleadata));

        $location.path('/');
    };
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1


    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
<<<<<<< HEAD
}
=======
};
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1

