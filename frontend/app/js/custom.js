;jQuery(function($){
	
	   
	   
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
	  $(".PageListBox a").click(function(){
		  $(this).addClass("active").siblings("a").removeClass("active");
	  });
	  $(".ico_layout_00").click(function(){ $('#ajaxload').load('page.html .pagewrap'); });
	  $(".ico_layout_01").click(function(){ $('.pagewrap').load('page/layout_01.html'); });
	  $(".ico_layout_02").click(function(){ $('.pagewrap').load('page/layout_02.html'); });
	  $(".ico_layout_03").click(function(){ $('.pagewrap').load('page/layout_03.html'); });
	  $(".ico_layout_04").click(function(){ $('.pagewrap').load('page/layout_04.html'); });
	  $(".ico_layout_05").click(function(){ $('.pagewrap').load('page/layout_05.html'); });
	  $(".ico_layout_06").click(function(){ $('.pagewrap').load('page/layout_06.html'); });
	  
	  
	  
	  
	  
	  
	  //点击每个 ListPage
//	  $(".PageListBox a").click(function(){
//		  $(this).addClass("active").siblings("a").removeClass("active");
//	  });
	  $(".listpage_00").click(function(){ $('#ajaxload').load('page.html .pagewrap'); });
	  
	  for(i=1;i<9;i++) {
	  	eval('$(".listpage_0'+i+'").click(function(){ $(".pagewrap").load("page/listpage_0'+i+'.html"); })');
	  }
	  
	  
	  
	  
	  
	  
	  //点击 AutoBlock Icon
	  $(".ico_autoblock").click(function(e) {
		  e.preventDefault();
		  $(this).addClass("ico_active");
		  $parent = $(this).parent().parent();
		  $parent.append($(".tip_auto"));
		  $offset = $parent.offset();
		  $left =  (parseInt($parent.width()) - parseInt($(".tip_auto").width()))/2;
		  $(".tip_auto").css({"left":$left+"px","top":-($(".tip_auto").height()),"position":"absolute"}).show();
		  $(".tip_editor, .tip_static, .tip_ad").hide();
		  $(".ico_autoeditor, .ico_staticblock, .ico_adblock").removeClass("ico_active");
  
	  });
	  
	  //点击 Editor Icon
	  $(".ico_autoeditor").click(function(e) {
		  e.preventDefault();
		  $(this).addClass("ico_active");
		  $parent = $(this).parent().parent();
		  $parent.append($(".tip_editor"));
		  $offset = $parent.offset();
		  $left =  (parseInt($parent.width()) - parseInt($(".tip_editor").width()))/2;
		  $(".tip_editor").css({"left":$left+"px","top":-($(".tip_editor").height()),"position":"absolute"}).show();
  		  $(".tip_auto, .tip_static, .tip_ad").hide();
		  $(".ico_autoblock, .ico_staticblock, .ico_adblock").removeClass("ico_active");
	  });
	  
	  
	  //点击 Static Icon
	  $(".ico_staticblock").click(function(e) {
		  e.preventDefault();
		  $(this).addClass("ico_active");
		  $parent = $(this).parent().parent();
		  $parent.append($(".tip_static"));
		  $offset = $parent.offset();
		  $left =  (parseInt($parent.width()) - parseInt($(".tip_static").width()))/2;
		  $(".tip_static").css({"left":$left+"px","top":-($(".tip_static").height()),"position":"absolute"}).show();
  		  $(".tip_auto, .tip_editor, .tip_ad").hide();
		  $(".ico_autoeditor, .ico_autoeditor, .ico_adblock").removeClass("ico_active");
	  });
	  
	  
	  //点击 AD Icon
	  $(".ico_adblock").click(function(e) {
		  e.preventDefault();
		  $(this).addClass("ico_active");
		  $parent = $(this).parent().parent();
		  $parent.append($(".tip_ad"));
		  $offset = $parent.offset();
		  $left =  (parseInt($parent.width()) - parseInt($(".tip_ad").width()))/2;
		  $(".tip_ad").css({"left":$left+"px","top":-($(".tip_ad").height()),"position":"absolute"}).show();
  		  $(".tip_auto, .tip_editor, .tip_static").hide();
		  $(".ico_autoblock, .ico_autoeditor, .ico_staticblock").removeClass("ico_active");
	  });
	  

	  
	  
	  //点击TipBox里的每一个Layout
	  $(".tipbox_laytou a").click(function(){
		  $(this).addClass("tipbox_selected").siblings("a").removeClass("tipbox_selected");
	  });
	  
				
	  //Grid ToolTip
	  //if ($('.pagewrap').length) {
      //	$('.pagewrap').tooltip({
      //    selector: '.show-grid > div'
      //  , title: function () { return $(this).width() + 'px' }
      //	})
      // };
	
});