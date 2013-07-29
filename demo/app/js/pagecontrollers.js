var vcpapp = angular.module('vcpmodule', [ 'vcpmodule.directive', 'firebase' ]);
var page = {
    c:{}
}
vcpapp.controller(page.c);


page.c.GlobalCtrl = function($scope, $q, angularFire){

    var urlartilcelist = "https://vcplatform.firebaseIO.com/articles";
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );

    var urlsitedata = "https://vcplatform.firebaseIO.com/sitedata";
    $scope.sitedataFirebase = angularFire(urlsitedata, $scope, 'sitedataFirebase', {} );

    var urlpages = "https://vcplatform.firebaseIO.com/pages";
    $scope.pages = angularFire(urlpages, $scope, 'pages', [] );

    var site = {};
    $q.all([$scope.sitedataFirebase, $scope.articlesFirebase, $scope.pages]).then(function() {

        site = $scope.sitedataFirebase;

        $scope.header = site.headerdata;

        //加载底部内容
        $scope.footer = site.footerdata;
        $scope.footermaxindex=$scope.footer.length-1 < 0 ? 0 : $scope.footer.length-1;
        $scope.cssblocklayoutselected = 0;






    //加载block内容
//    var site = modelSite.getSite();

     $scope.serachlinkdom = function(currentpage){
         for(var i = 0; i < $scope.pages.length; i++){
             if($scope.pages[i].pagename == currentpage){
                 return $scope.pages[i];
             }
         }
     }

     var copysinglepage='';

     if($scope.header.length > 0){
         $scope.singlepage = $scope.serachlinkdom($scope.header[0].linkedurl);
         copysinglepage = $scope.singlepage;
     }

     //链接页面
     $scope.showCurrent = function(currentpage, index){
         //debugger;
         $scope.showdetails = false;
         $scope.showlist = true;
         $scope.singlepage = $scope.serachlinkdom(currentpage);
         if($scope.singlepage == undefined){
             $scope.singlepage = copysinglepage;
             window.open(currentpage);
         }else{
             copysinglepage = $scope.singlepage;
         }
         $scope.cssblocklayoutselected = index;
     };

    });
     $scope.showheader = '';
     $scope.showtags = '';
     $scope.showdetails = false;
     $scope.showlist = true;
     $scope.showblockname ='';
     $scope.showdate = '';

     //显示详细信息
     $scope.showarticledetail = function(content,blockname){
         $scope.showheader = content.title;
         $scope.showtags = content.tags;
         $scope.showdate = content.created;
         $scope.showdetails = true;
         $scope.showlist = false;
         $scope.showblockname = blockname;
         document.getElementById("articledetail").innerHTML =content.contentbody;
     }

     //显示列表页面
     $scope.hidearticledetail = function(){
         $scope.showdetails = false;
         $scope.showlist = true;
     }
}