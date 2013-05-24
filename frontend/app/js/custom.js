;jQuery(function($){
	
	  
	  
	  
	  //所有Block经过时显示Attribute Panel Icon
	  $(".block_header").hover(function(){
		  $(".attribute_panel").show();
	  }, function() {
		  $(".attribute_panel").hide();
	  });
	  
	  
	  
	  //Header Block
	  $('.block_header').hover(function(){
		  $(".header_panel").show();
		  $(".header_view").addClass("hover_view");
		  }, function() {
		  $(".header_panel").hide();
		  $(".header_view").removeClass("hover_view");
	  });
	  $(".theme_panel a").click(function(){
		  $(this).addClass("select").siblings("a").removeClass("select");
	  });
	  
	  
	   
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
	  
	  
	  
	  //点击每个 Page Layout
	  $(".layout_list li").click(function(){
		  $(this).addClass("active").siblings("li").removeClass("active");
	  });
	  
	  
		
	  //点击每一个Page
	  $(".PageListBox a").click(function(){
		  $(this).addClass("active").siblings("a").removeClass("active");
	  });
	  
	  
	  
	  
	  
	  //点击每个 Page List
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
		  $(".tip_auto").css({"left":$left+"px","top":-($(".tip_auto").height()),"position":"absolute"}).fadeIn(200);
		  $(".tip_editor, .tip_static, .tip_ad").fadeOut(200);
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
		  $(".tip_editor").css({"left":$left+"px","top":-($(".tip_editor").height()),"position":"absolute"}).fadeIn(200);
  		  $(".tip_auto, .tip_static, .tip_ad").fadeOut(200);
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
		  $(".tip_static").css({"left":$left+"px","top":-($(".tip_static").height()),"position":"absolute"}).fadeIn(200);
  		  $(".tip_auto, .tip_editor, .tip_ad").fadeOut(200);
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
		  $(".tip_ad").css({"left":$left+"px","top":-($(".tip_ad").height()),"position":"absolute"}).fadeIn(200);
  		  $(".tip_auto, .tip_editor, .tip_static").fadeOut(200);
		  $(".ico_autoblock, .ico_autoeditor, .ico_staticblock").removeClass("ico_active");
	  });
	  

	  
	  
	  //点击TipBox里的每一个Layout
	  $(".tipbox_laytou a").click(function(){
		  $(this).addClass("selected").siblings("a").removeClass("selected");
	  });

	
});