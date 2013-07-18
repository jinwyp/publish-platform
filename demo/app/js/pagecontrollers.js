 var vcpapp = angular.module('vcpmodule', [ 'vcpmodule.directive' ]);
 var page = {
     c:{}
 }
 vcpapp.controller(page.c);

/*angular.module('demo', []).
	config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when("/index", {templateUrl:'home.html'})
		.when("/investing", {templateUrl:'investing_tpl.html'})
		.when("/finance", {templateUrl:'finance_tpl.html'})
		.when("/trading", {templateUrl:'trading_tpl.html'})
		.when("/article", {templateUrl:'article_list_tpl.html', controller:ArticleListCtrl})
		.when("/article/:articleid", {templateUrl:'article_detail_tpl.html', controller:ArticleDetailCtrl})
		.otherwise({redirectTo: '/index'});
}]);*/

 page.c.GlobalCtrl = function($scope, modelSite, modelArticle){
    //加载头部内容
    $scope.header = modelSite.getHeader();

    //加载底部内容
    $scope.footer = modelSite.getfooter();
    $scope.footermaxindex=$scope.footer.length-1 < 0 ? 0 : $scope.footer.length-1;
    $scope.cssblocklayoutselected = 0;

    //加载block内容
     var site = modelSite.getSite();
     for (var i=site.pagelist.length-1; i>=0; i--)
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
     }
     $scope.pages = site.pagelist;
     $scope.singlepage =  $scope.pages[0];

     //链接页面

     $scope.showCurrent = function(currentpage, index){
         $scope.singlepage = currentpage;
         $scope.cssblocklayoutselected = index;
     }
}



function ArticleListCtrl($scope){

}

function ArticleDetailCtrl($scope,$routeParams){
	$scope.articleid = $routeParams.articleid;
	for(var i=0;i<$scope.articles.length;i++){
		if($scope.articles[i].id == $scope.articleid){
			$scope.article = $scope.articles[i];
		}
	}
}