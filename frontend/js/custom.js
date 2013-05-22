;jQuery(function($){
	
	  // Ajax Load: Header
	  $('.header').load('header_login.html');
	  // Ajax Load: Footer
	  $('.footer').load('footer.html');
	   
	   
	   
	  
	  //展开 Select Layout
	  $(".ico_layout_close").bind("click",function(){
		 var element=$(this);
		  if (element.hasClass("ico_layout_open")){
		   	element.removeClass("ico_layout_open", {duration:300});
		   	$('.layout_list').animate({left:'-82px', opacity:'0.4'},{duration:300, queue:true});
		  }else{
		  	element.addClass("ico_layout_open", {duration:300});
		   	$('.layout_list').animate({left:'0px', opacity:'0.75'},{duration:300, queue:true});
		 }
	  });
	  
	  
	  
		
	  //点击每一个Layout
	  $(".layout_list li").click(function(){
		  $(this).addClass("layout_list_current").siblings("li").removeClass("layout_list_current");
	  });
	  $(".ico_layout_00").click(function(){ $('#ajaxload').load('page.html .pagewrap'); });
	  $(".ico_layout_01").click(function(){ $('.pagewrap').load('page/layout_01.html'); });
	  $(".ico_layout_02").click(function(){ $('.pagewrap').load('page/layout_02.html'); });
	  $(".ico_layout_03").click(function(){ $('.pagewrap').load('page/layout_03.html'); });
	  $(".ico_layout_04").click(function(){ $('.pagewrap').load('page/layout_04.html'); });
	  $(".ico_layout_05").click(function(){ $('.pagewrap').load('page/layout_05.html'); });
	  $(".ico_layout_06").click(function(){ $('.pagewrap').load('page/layout_06.html'); });
	  
	  
	  
	  
	  
	  //点击每个 ListPage
	  $(".PageListBox a").click(function(){
		  $(this).addClass("active").siblings("a").removeClass("active");
	  });
	  $(".listpage_00").click(function(){ $('#ajaxload').load('page.html .pagewrap'); });
	  $(".listpage_01").click(function(){ $('.pagewrap').load('page/listpage_01.html'); });
	  $(".listpage_02").click(function(){ $('.pagewrap').load('page/listpage_02.html'); });
	  $(".listpage_03").click(function(){ $('.pagewrap').load('page/listpage_03.html'); });
	  $(".listpage_04").click(function(){ $('.pagewrap').load('page/listpage_04.html'); });
	  $(".listpage_05").click(function(){ $('.pagewrap').load('page/listpage_05.html'); });
	  $(".listpage_06").click(function(){ $('.pagewrap').load('page/listpage_06.html'); });
	  $(".listpage_07").click(function(){ $('.pagewrap').load('page/listpage_06.html'); });
	  $(".listpage_08").click(function(){ $('.pagewrap').load('page/listpage_07.html'); });
	  
				
	  //Grid ToolTip
	  if ($('.pagewrap').length) {
      	$('.pagewrap').tooltip({
          selector: '.show-grid > div'
        , title: function () { return $(this).width() + 'px' }
      	})
      };
	
});