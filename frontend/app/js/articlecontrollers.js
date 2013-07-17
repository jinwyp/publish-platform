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



/* Controllers */
vcpapp.controller.articleList = function ($scope, $filter, angularFire, modelArticle, modelTag) {

    var urlartilcelist = 'https://vcplatform.firebaseIO.com/articles';
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );

    $scope.articlesFirebase.then(function() {
        $scope.articlestotaldata = $scope.articlesFirebase;



//    $scope.articlestotaldata = modelArticle.getArticleList();     // use firebase for database

    var copytotaldata = [];
    copytotaldata = $scope.articlestotaldata;
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
    }

    $scope.loadinit('updated','desc');
    //页面总数
    var count=10;
    var pagecount=$scope.articlestotaldata.length/count;
    $scope.noOfPages =parseInt(pagecount)== pagecount ? pagecount : parseInt(pagecount)+1;
    if($scope.noOfPages==0){
        $scope.noOfPages=1;
    }

    //当前页数
    $scope.currentPage = 1;
    $scope.articlesdata = [];
    //获取选中数据
    $scope.loadcurrentpagedata = function(){
        $scope.articlesdata.length = 0;
        if($scope.noOfPages != 0){
            if($scope.currentPage > $scope.noOfPages){
                $scope.currentPage = $scope.noOfPages;
            }
        }
        var j = 0;
        for(var i = (($scope.currentPage-1)*count);i < $scope.articlestotaldata.length;i ++){
            $scope.articlesdata[j] = $scope.articlestotaldata[i];
            j++;
            if($scope.articlesdata.length > (count-1)){
                return;
            }
        }
    }
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
    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

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
    }

    //显示List详细内容
    $scope.loadhtml = function(val) {
        return val;
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

        var pagecount1=$scope.articlestotaldata.length/count;
        $scope.noOfPages =parseInt(pagecount1)== pagecount1 ? pagecount1 : parseInt(pagecount1)+1;
        if($scope.noOfPages==0){
            $scope.noOfPages=1;
        }
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
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
    };


    $scope.hideediticon = function($index){
        if($scope.cssarticleindex == $index){
            this.isshowediticon = true;
        }else{
            this.isshowediticon = false;
        }
    };


    });


    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
}






vcpapp.controller.articleDetail = function ($scope, $routeParams, modelArticle, angularFire) {
    var urlmaxid = 'https://vcplatform.firebaseIO.com/maxid';
    $scope.maxidFirebase = angularFire(urlmaxid, $scope, 'maxidFirebase', {});



    var urltaglist = 'https://vcplatform.firebaseIO.com/tags';
    $scope.tagsFirebase = angularFire(urltaglist, $scope, 'tagsFirebase', [] );

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
        $scope.cssmodalshow = false;   //关闭弹出提示框 Modal
    };
    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

    $scope.delArticle = function(articleid) {
        $scope.cssmodalshow = false;  //关闭弹出提示框 Modal
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

    $scope.savedata = function(){
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
    var newrevisionid = $scope.articledata.revision.length + 1;
    var newrevision = {
        "versionid" :  newrevisionid ,
        "versionnum" :  newrevisionid ,
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
    };

    $scope.ispublish=false;
    $scope.publisharticle=function(feed){
        $scope.articledata.versioncomment='';
        $scope.articledata.published=modelArticle.getDateNow();
        $scope.articledata.status='publish';
        if (feed.$valid) {
            $scope.showcomments=true;
        }
        //modelArticle.saveArticle($scope.articledata);
    };

    //显示Edit预览内容
    $scope.showeditpreview = function(val){
        return val;
    };

    $scope.displayversioninfo=function(data){
       // var data=$scope.articledata.revision[index];
        $scope.articledata.title=data.title;
        $scope.articledata.contentbody=data.contentbody;
        $scope.articledata.tags=data.tags;
        var tagstr = '';
        for(var i=0;i<$scope.articledata.tags.length;i++){
            tagstr += $scope.articledata.tags[i].tagname+',';
        }
        $('.tagsinput').importTags(tagstr);
    };

    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
};







vcpapp.controller.articleCreateNew = function ($scope, $routeParams, $location, modelArticle, angularFire ) {
    var urluser = "https://vcplatform.firebaseIO.com/user";
    $scope.userFirebase = angularFire(urluser, $scope, 'userFirebase', {});

    var urlmaxtagid = "https://vcplatform.firebaseIO.com/maxtagid";
    $scope.maxtagidFirebase = angularFire(urlmaxtagid, $scope, 'maxtagidFirebase', {});

    var urlmaxarticleid = "https://vcplatform.firebaseIO.com/maxarticleid";
    $scope.maxarticleidFirebase = angularFire(urlmaxarticleid, $scope, 'maxarticleidFirebase', {});

    var urltaglist = "https://vcplatform.firebaseIO.com/tags";
    $scope.tagsFirebase = angularFire(urltaglist, $scope, 'tagsFirebase', [] );

    var urlartilcelist = "https://vcplatform.firebaseIO.com/articles";
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );


    function getMaxTagId(){
        if($scope.maxtagidFirebase.id == undefined ){
            $scope.maxtagidFirebase.id = 100001;
        }else{
            $scope.maxtagidFirebase.id = $scope.maxtagidFirebase.id  + 1;
            console.log($scope.maxtagidFirebase);
        }
        return $scope.maxtagidFirebase.id
    }

    function getMaxArticleId(){
        if($scope.maxarticleidFirebase.id == undefined ){
            $scope.maxarticleidFirebase.id = 10000001;
        }else{
            $scope.maxarticleidFirebase.id = $scope.maxarticleidFirebase.id + 1;
            console.log($scope.maxarticleidFirebase);
        }
        return $scope.maxarticleidFirebase.id
    }

    function checkTagExist(tagname) {
        var tagresult = _.findWhere($scope.tagsFirebase, {tagname: tagname});

        if (tagresult === undefined) {
            return false;
        }else{
            return tagresult;
        }
    }


    $scope.newarticleadata = {
        "id": getMaxArticleId(),
        "title": "",
        "contentbody": "",
        "status": "draft",
        "created": modelArticle.getDateNow(),
        "updated": modelArticle.getDateNow(),
        "published": modelArticle.getDateNow(),
        "author": $scope.userFirebase.then(function() {return $scope.userFirebase.firstname }),
        "editor": $scope.userFirebase.then(function() {return $scope.userFirebase.firstname }),
        "clickcount":0,
        "category": "Cosmetics",
        "categoryid":1000,
        "tags": [],
        "revision" : [],
        "lastversioncomment" : "",
        "lastreviewcomment" : "",
        "reviewhistory" : []
    };






    $(".tagsinput").tagsInput({
//        'autocomplete': modelTag.getTagList()
    });   //初始化 加载tag标签




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
                    "tagid" : getMaxArticleId(),
                    "tagname" : temptagslistname[i]
                };
                $scope.tagsFirebase.push(newtag);
            }
            $scope.newarticleadata.tags.push(newtag);
        }

        //$scope.newarticleadata.category=$(".dk_label")[0].textContent;

        //增加文章每一次修改版本信息
        var newrevisionid = $scope.newarticleadata.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
            "title" : $scope.newarticleadata.title,
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
            "lastversioncomment":$scope.newarticleadata.versioncomment,
            "lastreviewcomment":$scope.newarticleadata.reviewcomment
        };

        $scope.newarticleadata.revision.push(newrevision);
        $scope.cssmodalshow = false;

        //保存文章
//        modelArticle.createNewArticle($scope.newarticleadata);  //使用firebase
        $scope.articlesFirebase.push($scope.newarticleadata);

        $location.path('/');
    };


    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
};

