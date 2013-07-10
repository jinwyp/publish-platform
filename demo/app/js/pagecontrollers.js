
angular.module('demo', []).
	config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when("/index", {templateUrl:'home.html'})
		.when("/investing", {templateUrl:'investing_tpl.html'})
		.when("/finance", {templateUrl:'finance_tpl.html'})
		.when("/trading", {templateUrl:'trading_tpl.html'})
		.when("/article", {templateUrl:'article_list_tpl.html', controller:ArticleListCtrl})
		.when("/article/:articleid", {templateUrl:'article_detail_tpl.html', controller:ArticleDetailCtrl})
		.otherwise({redirectTo: '/index'});
}]);

function GlobalCtrl($scope){
	$scope.cssblocklayoutselected = 0;
	$scope.header = [
    {"name":"Homepage",
	 "link":"index"},
    {"name":"Investing",
	 "link":"investing"},
	{"name":"Finance",
	 "link":"finance"},
	{"name":"Trading",
	 "link":"trading"},
	{"name":"Article",
	 "link":"article"},
	];
	$scope.articles = [
    {"id":"1001",
     "title":"Acuity Brands' Q3 Earnings Light Up Stock",
	 "contentbody":"Atlanta-based Acuity Brands (NYSE:AYI) delivered better than expected Q3 earnings June 2 thanks to a greater focus on LED products along with a reduced reliance on new construction. The earnings surprise sent its stock up 7.2%. Now trading within 3% of its 52-week high; the question is whether it has any more room to run. ",
	 "created":"07/06/2013",
	 "type":"article",
	 "tag":""},
    {"id":"1002",
     "title":"5 Overused Resume Phrases ",
	 "contentbody":"hen it comes to resumes, recruiters have seen it all. Some are clever and creative, and some contain outright blatant untruths. What hiring managers see most, however, is a parade of the same old tired words and phrases that don't tell them anything useful about the candidates. These words have become standard fare and have been recommended by just about every resume expert in the 1990s. Hiring needs have changed over the past two decades and companies are seeking more specialized experience and skills. Here are five resume phrases to avoid if you want yours to stand out in the crowd.",
     "created":"07/06/2013",
     "type":"term",
     "tag":""},
	{"id":"1003",
     "title":"Market Strategist",
	 "contentbody":"A financial professional whose job is to make predictions about what will happen in the financial markets with the goal of guiding people toward profitable investment decisions. Market strategists use financial and economic data to attempt to anticipate everything from future stock performance to the federal funds rate to the return on 10-year Treasuries to which economic sectors will have the best and worst performance for the year. ",
	 "created":"07/06/2013",
	 "type":"tutorial",
     "tag":""},
	{"id":"1004",
     "title":"Teaching Financial Literacy To Teens",
	 "contentbody":"Financial literacy is the ability to use knowledge and skills to make effective and informed money management decisions. Gaining the knowledge and developing the skills to become financially literate is a lifelong process that begins with something as simple as putting a few pennies in a piggy bank, and evolves to more advanced subjects such as risk and asset allocation.",
	 "created":"07/06/2013",
	 "type":"article",
	 "tag":""},
	{"id":"1005",
     "title":"Unexpected Challenges For Self-Employed Finance Professionals",
	 "contentbody":'Self-employment is very nearly a universal goal across most industries. While not practical in fields like commercial aviation or nuclear engineering, self-employment is certainly an option for financial professionals. Many brokers and investment managers understand quite clearly how much of their revenue they must "share" with their employers, and dream of the the freedom and income-generating possibilities that go with independence. Before taking the leap, though, would-be self-employed financial professionals should consider some of the challenges that go with the do-it-yourself approach.',
	 "created":"07/06/2013",
	 "type":"term",
	 "tag":""},
	{"id":"1006",
     "title":"Rates Are A Risk, But PVR Partners Still An Interesting Distribution Play",
	 "contentbody":"I've been a fan of PVR Partners, LP (NYSE: PVR) (formerly known as Penn Virginia) for quite a while and through the company's migration from an Appalachian coal royalty trust to a more diversified business that now generates about two-thirds of its earnings from midstream natural gas operations. While the company took on a lot of debt to acquire Chief and that business has not ramped up quite as quickly as once hoped, and the company is facing generally slower growth in natural gas than expected, I believe the long-term appeal of this partnership is solid.",
	 "created":"07/06/2013",
	 "type":"tutorial",
	 "tag":"investing"},
    {"id":"1007",
     "title":"How To Survive When Prices Double Every Day And A Half",
	 "contentbody":"Hyperinflation is like fire. We all install smoke alarms, keep fire extinguishers handy, and buy insurance to protect our homes, but most of us will never fall victim to an unplanned fire. However, when a fire does ignite, it can be catastrophic – which is why prudent people simply plan ahead.",
	 "created":"07/06/2013",
	 "type":"tutorial",
	 "tag":"investing"},
	{"id":"1008",
     "title":"New Tax Rules Target The Top Tax Bracket",
	 "contentbody":'In the last half of 2012, the American taxpayer waited nervously for Congress and President Obama to come to some kind of compromise in order to prevent the country from hurtling over the looming fiscal cliff. They were able to do so in the nick of time in the form of the American Taxpayer Relief Act, which substantially updated several major sections of the tax code. Of course, one of the biggest provisions of the act was to raise taxes for just over three-quarters of all taxpayers. But the wealthy were hit the hardest by far, and their tax bills have been increased several times more than those of the lower or middle classes. Single taxpayers with adjusted gross incomes of at least $400,000, Head of Household filers with at least $425,000 and married taxpayers who file jointly with at least $450,000 of income now face much higher tax rates on several different kinds of income. The tax hikes are, however, worse in some areas than others.',
	 "created":"07/06/2013",
	 "type":"term",
	 "tag":"personal-finance"},
	{"id":"1009",
     "title":"Meeting Your Fiduciary Responsibility",
	 "contentbody":"So you volunteered to serve on the board of your local charity or other organization and you consider yourself especially lucky to have secured a seat on the investment committee. Perhaps you initially had reservations about your new appointment, but if you have a keen interest in the financial world, some investments of your own, watch CNBC and read the Wall Street Journal, you may feel that you're qualified. However, while this may be a great way to attend investment committee meetings and receive the latest investment research from the charity's advisor, this job shouldn't be taken lightly.",
	 "created":"07/06/2013",
	 "type":"term",
	 "tag":"investing"},
	{"id":"1010",
     "title":"Create Your Own U.S. Equity Portfolio",
	 "contentbody":"Individuals who invest in stocks tend to fall into one of two groups: one group purchases specific stocks, but with little apparent awareness of how effectively they are capturing the performance characteristics of the entire asset class; the second group opts for managed investments that include mutual funds, index funds, exchange-traded funds (ETF) or privately managed accounts. This second group is probably doing a better job than the first at capturing the overall performance characteristics of the asset class, though that depends on the degree to which their total market exposure is properly diversified.",
	 "created":"07/06/2013",
	 "type":"term",
	 "tag":"investing"},
	{"id":"1011",
     "title":"Big Pharma Faces 'Pay For Delay' Lawsuits",
	 "contentbody":"All parties are still trying to determine where they stand after the Supreme Court ruled June 17, on a case centered on what the Federal Trade Commission calls “pay to delay.” Unless you follow the pharmaceutical and biotech sectors, it’s likely that you’ve never heard of pay to delay. As a consumer, it might give you another reason to move pharmaceutical companies a little higher on your list of most hated industries.",
	 "created":"07/06/2013",
	 "type":"article",
	 "tag":"investing"},
	{"id":"1012",
     "title":"5 Easy Fixes For A High Summer Electric Bill",
	 "contentbody":"Summer has arrived and as the temperatures begin to soar, many consumers can expect their electric bill to do the same. As the hot weather sets in, air conditioners will be working on full blast effectively sending a reasonable electric bill through the ceiling. While there are many ways to reduce your electricity usage, from upgrading to energy conserving appliances to selecting premium grade windows, these are not options that a cash-strapped consumer can readily use. There are some easy and affordable ways to reduce your summer energy bill without having to shell out big bucks on home upgrades. Here is a look at how consumers on a budget can lower their high summer electric bill.",
	 "created":"07/06/2013",
	 "type":"article",
	 "tag":"personal-finance"},
	{"id":"1013",
     "title":"5 Best-Selling Cars Ever",
	 "contentbody":"These simple tips will help you save money this summer, so you can spend it on more exciting things than electricity.",
	 "created":"07/06/2013",
	 "type":"article",
	 "tag":"personal-finance"},
	{"id":"1014",
     "title":"The Father's Day Index 2013: Dad’s Value Is Up! ",
	 "contentbody":"We calculated Dad's value based on typical household tasks.",
	 "created":"07/06/2013",
	 "type":"tutorial",
	 "tag":"personal-finance"},
	{"id":"1015",
     "title":"3 Seemingly Non-Financial Decisions Everyone Should Take More Seriously",
	 "contentbody":"None of these decisions should be considered as being purely financial, but there are severe consequences to ignoring the financial side all together. ",
	 "created":"07/06/2013",
	 "type":"tutorial",
	 "tag":"personal-finance"},
	{"id":"1016",
     "title":"Market Summary For June 21, 2013",
	 "contentbody":"The major U.S. indices moved significantly lower this week, after U.S. Federal Reserve Chairman Ben Bernanke indicated that quantitative easing (QE) would likely end next year. With bond buying currently set at $85 billion per month, the Federal Reserve will begin scaling back the buying with a projected end around mid-2014, according to Bernanke’s comments. Investors began selling equities and bonds in anticipation of the move, while the U.S. dollar reached new highs.",
	 "created":"07/06/2013",
	 "type":"article",
	 "tag":"active-trading"},
	{"id":"1017",
     "title":"Trading GDP Like A Currency Trader",
	 "contentbody":"Economic data releases are essential for a foreign exchange trader. These important economic indicators create volatility, and plenty of speculation is always surrounding them, and The United States' gross domestic product (GDP) is one such report. Not only do forex (FX) traders continue to monitor this important piece of economic data, they use it to either establish a new position or support a current one.",
	 "created":"07/06/2013",
	 "type":"term",
	 "tag":"active-trading"},
	{"id":"1018",
     "title":"Top 8 Most Tradable Currencies",
	 "contentbody":"Although the foreign exchange market is often billed as a banker's game, currencies can sometimes be great diversification for a portfolio that might have hit a bit of a rut. It's a market that can also offer tremendous opportunity when other global forums enter the doldrums. As a result, knowing a little bit about forex, and the fundamentals behind it, can make significant additions to any trader, investor or portfolio manager's arsenal. Let's take a look at eight currencies every trader or investor should know, along with the central banks of their respective nations.",
	 "created":"07/06/2013",
	 "type":"term",
	 "tag":"active-trading"},
	{"id":"1019",
     "title":"What Forex Traders Need To Know About The Yen",
	 "contentbody":"Foreign exchange is not a market for the unprepared or ignorant. To effectively trade foreign currencies on a fundamental basis, traders must be knowledgeable when it comes to the major currencies. This knowledge should include not only the current economic stats for a country, but also the underpinnings of the respective economies and the special factors that can influence the currencies.",
	 "created":"07/06/2013",
	 "type":"tutorial",
	 "tag":"active-trading"},
	{"id":"1020",
     "title":"Trading Forex Trends With MACD And Moving Averages",
	 "contentbody":"While the majority of individual investors and traders focus on traditional investments such as stocks, ETFs, options and bonds, the fact remains that the forex market is by far the most active and liquid market in the world. As more and more individuals become aware of the forex market, and learn not only about how to trade currency pairs but also about the mechanics and capital requirements involved, their level of participation continues to grow. While the interest is genuine and the opportunities are real, traders new to this market must still decide just exactly how they will go about determining when to enter and exit individual trades.",
	 "created":"07/06/2013",
	 "type":"tutorial",
	 "tag":"active-trading"},
    ];

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