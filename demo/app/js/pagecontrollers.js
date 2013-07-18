 var vcpapp = angular.module('vcpmodule', [ 'vcpmodule.directive' ]);
 var page = {
     c:{}
 }
 vcpapp.controller(page.c);


 page.c.GlobalCtrl = function($scope, modelSite, modelArticle){
    //加载头部内容
    $scope.header = modelSite.getHeader();

    //加载底部内容
    $scope.footer = modelSite.getfooter();
    $scope.footermaxindex=$scope.footer.length-1 < 0 ? 0 : $scope.footer.length-1;
    $scope.cssblocklayoutselected = 0;

    //加载block内容
     var site = modelSite.getSite();
 /*    for (var i=site.pagelist.length-1; i>=0; i--)
     {
         for (var j = site.pagelist[i].pagelayoutdata.length-1; j>=0; j--)
         {
             for (var k = site.pagelist[i].pagelayoutdata[j].blocks.length-1; k>=0; k--)
             {
                 if(site.pagelist[i].pagelayoutdata[j].blocks[k].blocktype == 'auto'){
                     var articles = modelArticle.getArticlesByTags(site.pagelist[i].pagelayoutdata[j].blocks[k].blocktag, site.pagelist[i].pagelayoutdata[j].blocks[k].blockquantity, site.pagelist[i].pagelayoutdata[j].blocks[k].blockcategory);
                     site.pagelist[i].pagelayoutdata[j].blocks[k].blockarticles = articles;
                 }
             }
         }
     }*/
     $scope.serachlinkdom = function(currentpage){
         for(var i = 0; i < $scope.pages.length; i++){
             if($scope.pages[i].pagename == currentpage){
                 return $scope.pages[i];
             }
         }
     }

     $scope.pages = site.pagelist;
     if($scope.header.length > 0){
         $scope.singlepage = $scope.serachlinkdom($scope.header[0].linkedurl);
     }

     //链接页面

     $scope.showCurrent = function(currentpage, index){
         $scope.singlepage = $scope.serachlinkdom(currentpage);
         $scope.cssblocklayoutselected = index;
     }


     $scope.showheader = '';
     $scope.showtags = '';
     $scope.showdetails = false;
     $scope.showlist = true;
     $scope.showblockname ='';

     $scope.showarticledetail = function(content,blockname){
         $scope.showheader = content.title;
         $scope.showtags = content.tags;
         $scope.showdetails = true;
         $scope.showlist = false;
         $scope.showblockname = blockname;
         document.getElementById("articledetail").innerHTML =content.contentbody;
     }

     $scope.hidearticledetail = function(){
         $scope.showdetails = false;
         $scope.showlist = true;
     }
}