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

 page.c.GlobalCtrl = function($scope, modelSite){
    $scope.header = modelSite.getHeader();

    $scope.footer = modelSite.getfooter();
    $scope.footermaxindex=$scope.footer.length-1 < 0 ? 0 : $scope.footer.length-1;
    $scope.cssblocklayoutselected = 0;


	$scope.todayhot = function(item) {
		return item.tag == '';
    };

	$scope.showCurrent = function(indexid) {
		$scope.cssblocklayoutselected = indexid;
	}

	$scope.slideshow = function(param1){ 
		$('#'+param1).slideBox();
		return true;
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