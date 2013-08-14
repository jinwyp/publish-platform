
'use strict';

var vcpapp = angular.module('vcpmodule', ['ui.bootstrap', 'firebase']);

var page = {
    c:{}
}
vcpapp.controller(page.c);


vcpapp.directive('enterKeypress', function(){
    return function(scope, element, attrs) {
        element.bind("keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.enterKeypress);
                });
                event.preventDefault();
            }
        });
    };
});
vcpapp.directive( 'addHeaderChild', function(){
     return {
         scope: false,
         restrict:'EA',
         templateUrl:'tpldirective/page_header_child_add.html',
         link: function( scope, element, attrs){
              scope.cssaddheaderchildform = false;
              //显示header child form
              scope.showAddHeaderChildForm = function(){
                  scope.localurl="Homepage";
                  scope.menutype = "local";
                  scope.linkedurl = "";
                  scope.menuname = "";

                  scope.cssaddheaderchildform = true;
              }

              //隐藏header child form
              scope.hideAddHeaderChildForm = function(){
                  scope.cssaddheaderchildform = false;
              }

              //保存header child form
              scope.saveAddHeaderChildForm = function(back){
                  if(back.$valid){
                      if(typeof (scope.sitedataFirebase.headerdata[scope.$index].childdata) == "undefined"){
                          scope.sitedataFirebase.headerdata[scope.$index].childdata = [];
                      }
                      if(scope.header[scope.$index].childdata.length == 0){
                          var childidindex = 1;
                      }else{
                          var childidindex = scope.header[scope.$index].childdata[scope.header[scope.$index].childdata.length - 1].childid + 1;
                      }
                      if(scope.menutype=="other"){
                          scope.linkedpageid=0;
                          scope.linkedpagename ="Homepage";
                      }else{
                          scope.linkedpageid=scope.checkpargeid(scope.localurl);
                          scope.linkedurl = '';
                          scope.linkedpagename = scope.localurl;
                      }
                      var newheaderchilddata = {
                          childid : childidindex,
                          menuname:scope.menuname,
                          menutype:scope.menutype,
                          linkedurl:scope.linkedurl,
                          linkedpageid:scope.linkedpageid,
                          linkedpagename:scope.linkedpagename
                      }
                      scope.sitedataFirebase.headerdata[scope.$index].childdata.push(newheaderchilddata);
                      scope.header[scope.$index].childdata = scope.sitedataFirebase.headerdata[scope.$index].childdata;

                      scope.hideAddHeaderChildForm();
                  }
              }
         }
     }
});

vcpapp.directive( 'addHeader', function(){
    return {
        scope: false,
        restrict:'EA',
        templateUrl:'tpldirective/page_header_add.html',
        link: function ( scope, element, attrs ) {
            scope.cssaddheaderform = false;
            //显示添加header form
            scope.showAddHeaderForm = function(){
                scope.localurl="Homepage";
                scope.menutype = "local";
                scope.linkedurl = "";
                scope.menuname = "";

                scope.cssaddheaderform = true;
            }

            //隐藏添加header form
            scope.hideAddHeaderForm = function(){
                scope.cssaddheaderform = false;
            }

            //保存header nav
            scope.saveAddHeaderForm = function(back){
                 if(back.$valid){
                     if(scope.header.length == 0){
                         var headeridindex=1;
                     }else{
                         var headeridindex=scope.header[scope.header.length-1].headerid+1;
                     }
                     if(scope.menutype=="other"){
                         scope.linkedpageid=0;
                         scope.linkedpagename ="Homepage";
                     }else{
                         scope.linkedpageid=scope.checkpargeid(scope.localurl);
                         scope.linkedurl = '';
                         scope.linkedpagename = scope.localurl;
                     }
                     var newheaderdata={
                         headerid:headeridindex,
                         menuname:scope.menuname,
                         menutype:scope.menutype,
                         linkedurl:scope.linkedurl,
                         linkedpageid:scope.linkedpageid,
                         linkedpagename:scope.linkedpagename,
                         childdata:[]
                     };
                     if(typeof(scope.sitedataFirebase.headerdata) == "undefined"){
                         scope.sitedataFirebase.headerdata=[];
                     }
                     scope.sitedataFirebase.headerdata.push(newheaderdata);
                     scope.header = scope.sitedataFirebase.headerdata;

                     scope.hideAddHeaderForm();
                 }
            }
        }
    };
});

vcpapp.directive( 'addFooter', function () {
    return {
        scope: false,
        restrict:'EA',
        templateUrl:'tpldirective/page_footer_add.html',
        link: function ( scope, element, attrs ) {
            scope.cssaddfooterform = false;
            //显示添加footer form
            scope.showAddFooterForm = function(){
                //初始化默认值
                scope.localurl="Homepage";
                scope.menutype = "local";
                scope.linkedurl = "";
                scope.menuname = "";

                scope.cssaddfooterform = true;
            }

            //隐藏添加footer form
            scope.hideAddFooterForm = function(){
                scope.cssaddfooterform = false;
            }

            //保存footer nav
            scope.saveAddFooterForm = function(back){
                if (back.$valid) {
                    if(scope.footer.length==0){
                        var footeridindex=1;
                    }else{
                        var footeridindex=scope.footer[scope.footer.length-1].footerid+1;
                    }
                    if(scope.menutype=="other"){
                        scope.linkedpageid=0;
                        scope.linkedpagename ="Homepage";
                    }else{
                        scope.linkedpageid=scope.checkpargeid(scope.localurl);
                        scope.linkedurl = '';
                        scope.linkedpagename = scope.localurl;
                    }
                    var newfooterdata={
                        footerid:footeridindex,
                        footername:scope.menuname,
                        footertype:scope.menutype,
                        linkedurl:scope.linkedurl,
                        linkedpageid:scope.linkedpageid,
                        linkedpagename:scope.linkedpagename
                    };
                    if(typeof(scope.sitedataFirebase.footerdata) == "undefined"){
                        scope.sitedataFirebase.footerdata=[];
                    }
                    scope.sitedataFirebase.footerdata.push(newfooterdata);
                    scope.footer = scope.sitedataFirebase.footerdata;

                    scope.hideAddFooterForm();
                }
            }
        }
    };
});

vcpapp.directive( 'editHeaderChild', function(){
    return {
        scope: false,
        restrict:'EA',
        templateUrl:'tpldirective/page_header_child_edit.html',
        link: function(scope, element, attrs){
            scope.csseditheaderchildform = false;

            //显示Edit Header Child Form
            var headerchilddata = '';
            var headerparentdata = '';
            scope.showEditHeaderChildForm = function(obj,parentobj){
                headerchilddata = obj;
                headerparentdata = parentobj;
                scope.csseditheaderchildform = true;

                scope.menuname=obj.menuname;
                scope.menutype=obj.menutype;
                if(scope.menutype == "other"){
                    scope.linkedurl = obj.linkedurl;
                    scope.localurl = "Homepage";
                }else{
                    scope.linkedurl = "";
                    scope.localurl = obj.linkedpagename;
                }
            }

            //隐藏Edit Header Child Form
            scope.hideEditHeaderChildForm = function(){
                scope.csseditheaderchildform = false;
            }

            //保存Header Child
            scope.saveEditHeaderChildForm = function(back){
                if(back.$valid){
                    if(scope.menutype=="other"){
                        scope.linkedpageid=0;
                        scope.linkedpagename ="Homepage";
                    }else{
                        scope.linkedpageid=scope.checkpargeid(scope.localurl);
                        scope.linkedurl = '';
                        scope.linkedpagename = scope.localurl;
                    }
                    headerchilddata.menuname = scope.menuname;
                    headerchilddata.menutype = scope.menutype;
                    headerchilddata.linkedurl = scope.linkedurl;
                    headerchilddata.linkedpageid = scope.linkedpageid;
                    headerchilddata.linkedpagename = scope.linkedpagename;
                    scope.sitedataFirebase.headerdata = scope.get_site.headerdata;
                    scope.header[scope.$index].childdata = scope.sitedataFirebase.headerdata[scope.$index].childdata;

                    scope.hideEditHeaderChildForm();
                }
            }

            //删除Header nav
            scope.deleteHeaderChildNav = function(){
                headerparentdata.splice(scope.$index, 1);
                scope.sitedataFirebase.headerdata = scope.get_site.headerdata;
                scope.header = scope.sitedataFirebase.headerdata;
                scope.header[scope.$index].childdata = scope.sitedataFirebase.headerdata[scope.$index].childdata;

                scope.hideEditHeaderChildForm();
            }
        }
    }
});

vcpapp.directive( 'editHeader', function(){
    return {
        scope: false,
        restrict: 'EA',
        templateUrl: 'tpldirective/page_header_edit.html',
        link: function(scope, element, attrs){
            scope.csseditheaderform = false;
            scope.cssshowediterror = false;
            //显示header edit form
            var headerparentdata = '';
            scope.showEditHeaderForm = function(obj){
                headerparentdata = obj;
                scope.menuname=obj.menuname;
                scope.menutype=obj.menutype;
                if(scope.menutype == "other"){
                    scope.linkedurl = obj.linkedurl;
                    scope.localurl = "Homepage";
                }else{
                    scope.linkedurl = "";
                    scope.localurl = obj.linkedpagename;
                }

                scope.csseditheaderform = true;
            }

            //隐藏header edit form
            scope.hideEditHeaderForm = function(){
                scope.csseditheaderform = false;
            }

            //保存header info
            scope.saveEditHeaderForm = function(back){
                if(back.$valid){
                    if(scope.menutype=="other"){
                        scope.linkedpageid=0;
                        scope.linkedpagename ="Homepage";
                    }else{
                        scope.linkedpageid=scope.checkpargeid(scope.localurl);
                        scope.linkedurl = '';
                        scope.linkedpagename = scope.localurl;
                    }
                    headerparentdata.menuname = scope.menuname;
                    headerparentdata.menutype = scope.menutype;
                    headerparentdata.linkedurl = scope.linkedurl;
                    headerparentdata.linkedpageid = scope.linkedpageid;
                    headerparentdata.linkedpagename = scope.linkedpagename;

                    scope.sitedataFirebase.headerdata = scope.get_site.headerdata;
                    scope.header = scope.sitedataFirebase.headerdata;

                    scope.hideEditHeaderForm();
                }
            }

            //删除header info
            scope.deleteHeaderNav = function(){
                if(scope.header[scope.$index].childdata !== undefined){
                    if(scope.header[scope.$index].childdata.length > 0){
                        scope.cssshowediterror = true;
                        return;
                    }
                }
                scope.header.splice(scope.$index,1);
                scope.sitedataFirebase.headerdata = scope.get_site.headerdata;
                scope.header = scope.sitedataFirebase.headerdata;

                scope.hideEditHeaderForm();
                scope.cssshowediterror = false;
            }
        }
    };
});

vcpapp.directive( 'editFooter', function(){
    return {
        scope: false,
        restrict: 'EA',
        templateUrl:'tpldirective/page_footer_edit.html',
        link: function(scope, element, attrs){
             //显示footer edit
             var footerdata = '';
             scope.showEditFooterForm = function(obj){
                scope.menuname=obj.footername;
                scope.menutype=obj.footertype;
                if(scope.menutype == "other"){
                    scope.linkedurl = obj.linkedurl;
                    scope.localurl = "Homepage";
                }else{
                    scope.linkedurl = "";
                    scope.localurl = obj.linkedpagename;
                }
                footerdata = obj;
                scope.csseditfooterform = true;
             }

             //隐藏footer edit
             scope.hideEditFooterForm = function(){
                  scope.csseditfooterform = false;
             }

             //保存footer edit
             scope.saveEditFooterForm = function(back){
                 if(back.$valid){
                     if(scope.menutype=="other"){
                         scope.linkedpageid=0;
                         scope.linkedpagename ="Homepage";
                     }else{
                         scope.linkedpageid=scope.checkpargeid(scope.localurl);
                         scope.linkedurl = '';
                         scope.linkedpagename = scope.localurl;
                     }
                     footerdata.footername = scope.menuname;
                     footerdata.footertype = scope.menutype;
                     footerdata.linkedurl = scope.linkedurl;
                     footerdata.linkedpageid = scope.linkedpageid;
                     footerdata.linkedpagename = scope.linkedpagename;
                     scope.sitedataFirebase.footerdata = scope.get_site.footerdata;

                     scope.hideEditFooterForm();
                 }
             }

            //删除footer nav
            scope.deleteFooterNav = function(){
                scope.footer.splice(scope.$index,1);
                scope.sitedataFirebase.footerdata = scope.get_site.footerdata;

                scope.hideEditFooterForm();
            }
        }
    }
});

/* Controllers */
page.c.pageListcontroller = function($scope, $location, $http, $q, modelSite, angularFire) {

    var urlmaxid = "https://vcplatform.firebaseIO.com/maxid";
    $scope.maxidFirebase = angularFire(urlmaxid, $scope, 'maxidFirebase', {});

    var urlartilcelist = "https://vcplatform.firebaseIO.com/articles";
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );

    var urltaglist = "https://vcplatform.firebaseIO.com/tags";
    $scope.tagsFirebase = angularFire(urltaglist, $scope, 'tagsFirebase', [] );

    var urlsitedata = "https://vcplatform.firebaseIO.com/sitedata";
    $scope.sitedataFirebase = angularFire(urlsitedata, $scope, 'sitedataFirebase', {} );

    var urlpages = "https://vcplatform.firebaseIO.com/pages";
    $scope.pages = angularFire(urlpages, $scope, 'pages', [] );


    function getMaxBlockId(){
        if($scope.maxidFirebase.blockid == undefined ){
            $scope.maxidFirebase.blockid = 101;
        }else{
            $scope.maxidFirebase.blockid = $scope.maxidFirebase.blockid  + 1;
        }
        return $scope.maxidFirebase.blockid
    }

    function getMaxPageId(){
        if($scope.maxidFirebase.pageid == undefined ){
            $scope.maxidFirebase.pageid = 101;
        }else{
            $scope.maxidFirebase.pageid = $scope.maxidFirebase.pageid  + 1;
        }
        return $scope.maxidFirebase.pageid
    }

    function getMaxTagId(){
        if($scope.maxidFirebase.tagid == undefined ){
            $scope.maxidFirebase.tagid = 100001;
        }else{
            $scope.maxidFirebase.tagid = $scope.maxidFirebase.tagid  + 1;
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


    function fireBaseGetArticlesByTags (taglistdata, blockcategory, quantity) {
        var articlesresultunion = [];
        var articlesresultfinal = [];

        var articlesresulttag = [];
        var articlesresultcategory = [];

        var articlelist = $scope.articlesFirebase;

        if(blockcategory !== 'All'){
            articlesresultcategory = _.filter(articlelist, function(aritcle){
                if (aritcle.category == blockcategory){
                    return true
                }
            });
        }else{
            articlesresultcategory = articlelist;
        }
        console.dir(articlesresultcategory);
        articlesresulttag = _.filter(articlesresultcategory, function(aritcle){
            var singlearticletags = _.filter(aritcle.tags, function(singletag){
                var tagresult = _.where(taglistdata, {tagname: singletag.tagname});
                return tagresult.length;
            });
            return  singlearticletags.length;
        });



//        articlesresultunion = _.union(articlesresulttag, articlesresultcategory);
        articlesresultfinal = _.where(articlesresulttag, {status: "Published"});

        if(articlesresultfinal.length > quantity){
            articlesresultfinal.splice(0, articlesresultfinal.length - quantity);    //判断文章数量
        }


        articlesresultfinal = _.sortBy(articlesresultfinal, function(article){ return -article.updated });

        return articlesresultfinal;
    }

    $scope.csseditfooterform = false;

    $('#tagsinput').tagsInput();

    $scope.newblock = {
        blockid : 100,
        blocktype : 'auto',
        blockstatictype : '',
        blocktitle : "title1",
        blockname : "",
        blocklayout : 10,
        blockquantity : 6,
        blocktag : [],
        blockcategory : 'All',
        blocksortby : 'bydate',
        apiurl : "",
        adsname : "",
        adscode : ""
    };
    $scope.newarticle = undefined;

//    var site = modelSite.getSite();
    var site = {};
	
	// The default page is entered, the display animation
	$scope.cssloading = true; //Block Loading GIF
	$scope.csspagelayout = false; //Loading start: hide PageLayout 
	$scope.csspagelist = false; //Loading end: show PageList
	
    $q.all([$scope.sitedataFirebase, $scope.articlesFirebase, $scope.pages]).then(function() {
        site = $scope.sitedataFirebase ;
        $scope.get_site = site;

        $scope.pagearticletype = site.defaultsettings.articleTypeId;    // left menu default selected page
        $scope.pagefilterarticle = site.defaultsettings.pagefilterArticleType;  //Article Type Page
        $scope.pagefilterlist = site.defaultsettings.pagefilterListType;         //List Type Page
        $scope.layoutfilterlisttype = site.defaultsettings.layoutfilterListType;
        $scope.defaultselectedpageindex = site.defaultsettings.defaulstSelectedPageIndex;    // left menu default selected page
        $scope.defaultselectedlayoutindex = site.defaultsettings.defaulstSelectedLayoutIndex;    // right menu default selected page


        //获取选中的header theme
        $scope.get_headertheme = site.defaultsettings.headerthemeindex;

        if($scope.get_headertheme == -1){
            $scope.cssheaderthemeindex = -1;
            $scope.cssheadermenuhavadata = false;
        }else{
            $scope.cssheaderthemeindex = $scope.get_headertheme;
            $scope.cssheadermenuhavadata = true;
        }

        //获取选中的footer theme
        $scope.get_footertheme = site.defaultsettings.footerthemeindex;

        if($scope.get_footertheme == -1){
            $scope.cssfooterthemeindex = -1;
            $scope.cssfootermenuhavadata = false;
        }else{
            $scope.cssfooterthemeindex = $scope.get_footertheme;
            $scope.cssfootermenuhavadata = true;
        }

        $scope.header = site.headerdata;
        $scope.headerthemes = site.headertheme;

        $scope.footer = site.footerdata;
        $scope.footerthemes = site.footertheme;

        if(typeof(site.headerdata) == "undefined"){
            $scope.header = [];
        }

        if(typeof(site.footerdata) == "undefined"){
            $scope.footer = [];
        }




        $scope.singlepage =  $scope.pages[0];   //默认读取首页

        //载入所有block的文章
        for (var i= $scope.pages.length-1; i>=0; i--)
        {
            for (var j = $scope.pages[i].pagelayoutdata.length-1; j>=0; j--)
            {
                if(typeof($scope.pages[i].pagelayoutdata[j].blocks) == "undefined"  ){
                }
                else{
                    for (var k = $scope.pages[i].pagelayoutdata[j].blocks.length-1; k>=0; k--)
                    {
                        if($scope.pages[i].pagelayoutdata[j].blocks[k].blocktype == 'auto'){
                            var articlesdata = fireBaseGetArticlesByTags($scope.pages[i].pagelayoutdata[j].blocks[k].blocktag,  $scope.pages[i].pagelayoutdata[j].blocks[k].blockcategory, $scope.pages[i].pagelayoutdata[j].blocks[k].blockquantity);
                            $scope.pages[i].pagelayoutdata[j].blocks[k].blockarticles = articlesdata;

//                            console.log(articlesdata, $scope.pages[i].pagelayoutdata[j].blocks[k].blocktag, $scope.pages[i].pagelayoutdata[j].blocks[k].blockquantity );

                        }
                    }
                }
            }
        }

        $scope.localarticles = $scope.articlesFirebase;    // Use FireBase
		 
		 $scope.cssloading = false;  //Block Loading GIF
		 $scope.csspagelayout = true; //Loading end: show PageLayout
		 $scope.csspagelist = true; //Loading end: show PageList

    });



	
    $scope.cssheadermenubutton = false;
    $scope.cssfootermenubutton=false;

    $scope.newpage ={};
//        $scope.localarticles = modelArticle.getArticleList(100);


    $scope.layouts = modelSite.getLayoutList();
    $scope.blocklayouts = modelSite.getBlockLayout();
    $scope.currentlayoutcontainer = {};


    $scope.selectedpageattributeindex = -1;    //默认隐藏所有page的属性面板
    $scope.selectedpageblockindex = -1;



    $scope.cssshowpageaddinput = false;    //添加page的输入框默认不显示

    $scope.cssblocktipadd = false;      //点击当前添加block按钮显示对应block类型菜单
    $scope.cssblocktipedit = false;      //点击当前编辑block按钮显示对应block类型菜单

    $scope.cssblockeditmenuinputbox = false;   //点击当前编辑block的 要输入推荐文章的输入框
    $scope.cssblockeditmenubutton = false;     //点击当前编辑block的 设置的按钮

    $scope.cssheadersetting = false;      //Header设置nav下拉界面
    $scope.cssheadernavindex = 0;      //Header默认菜单的颜色为首页

    $scope.cssfootersetting = false;




    //left side bar
    $scope.isarticle = '';
    $scope.clickpage = function(indexid, page, layout) {

        $(".container").prepend($(".tip_box")); //移动 Tip Box DOM , 防止因为刷新页面而丢失DOM
        $scope.defaultselectedpageindex = indexid;
        $scope.singlepage = page;

        if(page.pagetype === $scope.pagearticletype) {
            $scope.layoutfilterlisttype = {layouttype:1 };
        }else{
            $scope.layoutfilterlisttype = {layouttype:0 };
        }
        $scope.cssshowpageaddinput = false;       //添加page的输入框不显示
        if(page.pagetype == 11){
            $scope.isarticle = 'span9';

        }else{
            $scope.isarticle = '';
        }
    };

    $scope.showeditpageattribute = function() {
        $scope.csspageattribute = true;       //添加page的输入框显示
    };
    $scope.closeeditpageattribute = function() {
        $scope.csspageattribute = false;       //添加page的输入框显示
    };


    //left side bar add page
    $scope.showaddpageinput = function() {
        $scope.newpage.pagename = '';
        $scope.cssshowpageaddinput = true;       //添加page的输入框显示
    };

    $scope.addpage = function() {
        $(".container").prepend($(".tip_box"));  //移动 Tip Box DOM , 防止因为刷新页面而丢失DOM
        $scope.cssblocktipbox = false;

        $scope.cssshowpageaddinput = false;       //添加page的输入框显示
        var newpage = {
            siteid : 1,
            pagename : $scope.newpage.pagename,
            pageid : getMaxPageId(),
            pagetype : 100,
            pagetitle : $scope.newpage.pagetitle,
            pageurl : $scope.newpage.pageurl,
            pageorder : 100,
            pagelayoutid : 10,
            pagelayoutdata:[
                {layoutcontainerclass:"span9", layoutcontainerid:1000 , blocks:[] },
                {layoutcontainerclass:"span3", layoutcontainerid:1001, blocks:[] }
            ]
        };
        $scope.pages.push(newpage);
    };


    //left side bar add page attribute
    $scope.showeditpageattribute = function(indexid) {
        $scope.selectedpageattributeindex = indexid;    //点击显示当前的page 属性面板
    };

    $scope.closeeditpageattribute = function(indexid) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板
    };

    $scope.editsavepage = function(page) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板

    };
    $scope.delpage = function( page) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板
        if(page.pagetype >= 20){
            //首页和内容页面都是无法删除的
            var pageindex = $scope.pages.indexOf(page);
            $scope.pages.splice(pageindex, 1);
        }
    };

    //right side bar
    $scope.clicklayout = function(indexid, layout) {
        $(".container").prepend($(".tip_box")); //移动 Tip Box DOM , 防止因为刷新页面而丢失DOM
        $scope.cssblocktipbox = false;
        $scope.defaultselectedlayoutindex = indexid;

        _.each($scope.pages, function(page){
            if(page.pageid == $scope.singlepage.pageid){
                page.pagelayoutdata = angular.copy(layout.layoutdata);
                $scope.singlepage = page;
            }
        });
    };




    // show Block MouseOver Menu Button
    $scope.showeditblockmenubutton= function(layout) {
        $scope.currentlayoutcontainer = layout;  //移动菜单要赋值当前是哪个layout
        this.cssblockeditmenubutton = true;
    };
    $scope.hideeditblockmenubutton = function() {
        this.cssblockeditmenubutton = false;
        this.cssblockeditmenuinputbox = false;
    };

    $scope.showarticleinput = function(){
        this.cssblockeditmenuinputbox = true;
    };
    $scope.showblocksetting = function(){
        this.cssblockeditmenubutton = false;
    };
    $scope.moveblock = function(){
        this.cssblockeditmenubutton = false;
    };
    $scope.delblock = function(){
        this.cssblockeditmenubutton = false;
    };

    //show add New Blocks Menu BOX
    $scope.showcontenticon = false;//是否显示centent icon
    $scope.showaddblockmenubutton = function() {
        this.cssblockaddmenubutton = true;
        if(this.showautoblockstyle || this.showeditorblockstyle || this.showrssblockstyle){
            this.showcontenticon = false;
        }else{
            this.showcontenticon = true;
        }
    };


    $scope.hideaddblockmenubutton = function() {
        if(this.showautoblockstyle || this.showeditorblockstyle || this.showrssblockstyle){
            this.cssblockaddmenubutton = true;
        }else{
            this.cssblockaddmenubutton = false;
        }
        if(this.showstaticblockstyle || this.showadblockstyle){
            this.cssblockaddmenubutton = true;
            this.showcontenticon = true;
        }else{
            this.showcontenticon = false;
        }
        this.cssblocktipadd = ''; //移除block图标选中的样式
    };

    //关闭Auto block弹出框
    $scope.closeautoblock = function() {
        copythis.showautoblockstyle = false;
        $scope.cssblocktipbox = '';
    }
    //关闭editor block
    $scope.closeeditorblock = function(){
        copythis.showeditorblockstyle = false;
        $scope.cssblocktipbox = '';
    }
    //关闭rss block
    $scope.closerssblock = function(){
        copythis.showrssblockstyle = false;
        $scope.cssblocktipbox = '';
    }
    //关闭static block
    $scope.closestaticblock = function(){
        copythis.showstaticblockstyle = false;
        $scope.cssblocktipbox = '';
    }
    //关闭ad block
    $scope.closeadblock = function(){
        copythis.showadblockstyle = false;
        $scope.cssblocktipbox = '';
    }

    $scope.showautoblockstyle = false;
    $scope.showeditorblockstyle = false;
    $scope.showrssblockstyle = false;
    $scope.showstaticblockstyle = false;
    $scope.showadblockstyle = false;
    var copythis = '';
    $scope.showblocksettingmenu = function( blocktype, event1, layoutcontainer ) {
        $scope.selectblockicon = 0;
        $scope.autoblocklayout = 100;
        $scope.selecteditorblockicon = 0;
        $scope.autoeditorblocklayout = 100;
        $scope.selectrssblockicon = 1;
        $scope.rsseditorblocklayout = 101;
        $scope.newblock.blockname = '';
        if(copythis !== ''){
             copythis.showautoblockstyle = false;
             copythis.showeditorblockstyle = false;
             copythis.showrssblockstyle = false;
             copythis.showstaticblockstyle = false;
             copythis.showadblockstyle = false;
             copythis.cssblockaddmenubutton = false;
             copythis.showcontenticon = false;
        }
        this.cssblocktipadd = false;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipbox = false;
        copythis = this;

        $scope.currentlayoutcontainer = layoutcontainer;
        this.showautoblockstyle = false;
        this.showeditorblockstyle = false;
        this.showrssblockstyle = false;
        switch(blocktype)
        {
            case 'auto':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                this.showautoblockstyle = true;
                this.cssblockaddmenubutton = true;
                this.showcontenticon = false;
                break;
            case 'editor':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                this.showeditorblockstyle = true;
                this.cssblockaddmenubutton = true;
                this.showcontenticon = false;
                break;
            case 'static':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                this.cssblockaddmenubutton = true;
                this.showcontenticon = true;
                this.showstaticblockstyle = true;
                break;
            case 'ads':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                this.cssblockaddmenubutton = true;
                this.showcontenticon = true;
                this.showadblockstyle = true;
                break;
			case 'RSS':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                this.showrssblockstyle = true;
                this.cssblockaddmenubutton = true;
                this.showcontenticon = false;
                break;
            default:
        }


        var blockcontent = $(event1.target).parent().parent();     //获取id 为 blockcontent DIV .
        blockcontent.append($(".tip_box"));
        var blocktypemenu = $(".tip_"+ blocktype);     //获取样式名称拼接 .
        var left =  ( parseInt(blockcontent.width() ) - parseInt( blocktypemenu.width() ) )/2;
        blocktypemenu.css({"left":left+"px", "top":-(blocktypemenu.height()), "position":"absolute"});
    };

    $scope.clickblocklayouttab = function(event1, divid) {
        var heightdiff;
        switch(divid)
        {
            case 'tab-layout':
                heightdiff = 274;
                break;
            case 'tab-filter':
                heightdiff = 249;
                break;
            case 'tab-Sort':
                heightdiff = 101;
                break;
            default:
        }
        var blockcontent2 = $(event1.target).parent().parent().parent().parent().parent();    //获取id 为 blockcontent DIV .
        var blocktypemenu2 = $(".tip_auto");     //获取样式名称拼接
//        var heightdiff = 81 + $("#"+ divid ).height();
        blocktypemenu2.css({"top":-(heightdiff), "position":"absolute"});
//        console.log(blockcontent2.height(), blocktypemenu2.height(), heightdiff);
    };
    //默认选中layout icon
    $scope.selectblockicon = 0;
    $scope.autoblocklayout = 100;
    //选中layout图标事件
    $scope.selectlayout = function(index,blocklayout){
        $scope.selectblockicon = index;
        $scope.autoblocklayout = blocklayout;
    }


    $scope.selecteditorblockicon = 0;  //设定editor选中图标
    $scope.autoeditorblocklayout = 100;    //设定editor layout id

    //选中Editor layout图标事件
    $scope.selecteditorlayout = function(index,blocklayout){
        $scope.selecteditorblockicon = index;
        $scope.autoeditorblocklayout = blocklayout;
    }

    $scope.selectrssblockicon = 1;    //设定rss选中图标
    $scope.rsseditorblocklayout = 101; //设定rss layout id

    //选中RSS layout 图标事件
    $scope.selectrsslayout = function(index,blocklayout){
        $scope.selectrssblockicon = index;
        $scope.rsseditorblocklayout = blocklayout;
    }

    // add a block to page
    $scope.addblocktopage = function(blocktype, layoutcontainer, indexid, blocklayoutid ) {
        var newblock = {
            blockid : getMaxBlockId(),
            blocktype : 'auto',
            blockstatictype : '',
            blockname : "",
            blocklayout : blocklayoutid,
            blockquantity : 0,
            blocktag : [],
            blockcategory : 'All',
            blocksortby : 'date',
            blockarticles : [],
            apiurl : "",
            adsname : "",
            adscode : ""
        };
        switch(blocktype)
        {
            case 'auto':
                newblock.blocktype = 'auto';
                newblock.blockname = $scope.newblock.blockname;
                newblock.blockquantity = Number($scope.newblock.blockquantity);
                newblock.blockcategory = $scope.newblock.blockcategory;

                //检查Tags
                var temptagslistname = $(".tagsinput").exportTags();

                for(var i=0;i<temptagslistname.length;i++){
                    //在tag 数据库查询是否是已经存在的tag
                    var newtag;
                    if( checkTagExist(temptagslistname[i]) ){
                        newtag = checkTagExist(temptagslistname[i]);
                    }else{
                        newtag = {
                            "tagid" : getMaxTagId(),
                            "tagname" : temptagslistname[i]
                        };
                        $scope.tagsFirebase.push(newtag);
                    }
                    newblock.blocktag.push(newtag);
                }

                //通过Tags 获取文章
//                newblock.blockarticles = modelArticle.getArticlesByTags(newblock.blocktag, newblock.blockquantity, newblock.blockcategory);
                newblock.blockarticles = fireBaseGetArticlesByTags(newblock.blocktag, newblock.blockcategory, newblock.blockquantity );     // Use FireBase

                this.showautoblockstyle = false;
                $scope.cssblocktipbox = '';
/*                if (temptagslistname.length == 0 || newblock.blockquantity == ''){
                    newblock.blockarticles = modelArticle.getArticles(newblock.blockquantity);
                }*/

                break;

            case 'editor':
                newblock.blocktype = 'editor';
                newblock.blockname = $scope.newblock.blockname;
                newblock.blockquantity = Number($scope.newblock.blockquantity);
                this.showeditorblockstyle = false;
                $scope.cssblocktipbox = '';
                break;

            case 'statictext':
                newblock.blocktype = 'static';
                newblock.blockstatictype = 'text';
                break;

            case 'staticpic':
                newblock.blocktype = 'static';
                newblock.blockstatictype = 'pic';
                break;

            case 'staticvideo':
                newblock.blocktype = 'static';
                newblock.blockstatictype = 'video';
                break;

            case 'staticslideshow':
                newblock.blocktype = 'static';
                newblock.blockstatictype = 'slideshow';
                break;


            case 'ads':
                newblock.blocktype = 'ads';
                newblock.adsname = $scope.newblock.adsname;
                newblock.adscode = $scope.newblock.adscode;
                break;

            case 'RSS':
                newblock.blocktype = 'RSS';
                newblock.blockname = $scope.newblock.blockname;
                newblock.urlapi = $scope.newblock.urlapi;
                this.showrssblockstyle = false;
                $scope.cssblocktipbox = '';
                break;

            default:
        }
        $(".container").prepend($(".tip_box")); //移动 Tip Box DOM , 防止因为刷新页面而丢失DOM
            _.each($scope.pages, function(page){
                if(page.pageid == $scope.singlepage.pageid){
                    _.each(page.pagelayoutdata, function(layout){
                        if(layout.layoutcontainerid == layoutcontainer.layoutcontainerid){

                            if(typeof(layout.blocks) == "undefined"  ){
                                layout.blocks = [];
                                layout.blocks.push(newblock);
                            }else{
                                layout.blocks.push(newblock);
                            }
//                            console.log(layout.blocks.length);
                        }
                    });
                    $scope.singlepage = page;
                }
            });




//        addSingleBlockToPage(newblock, layoutcontainer, $scope.singlepage );
        this.cssblocktipadd = false;          //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipbox = false;
    };

    $scope.addAritcleToEditorBlock = function(editorblock, layoutcontainer ){
        if(typeof(editorblock.blockarticles) == "undefined"  ){
            editorblock.blockarticles = [];
        }

        if(editorblock.blockarticles.length < editorblock.blockquantity){
            var newaritcle = this.newarticle;
//            modelSite.addArticleToBlock(newaritcle, block, layoutcontainer, $scope.singlepage);
            _.each($scope.pages, function(page){
                if(page.pageid == $scope.singlepage.pageid){

                    _.each(page.pagelayoutdata, function(layout){

                        if(layout.layoutcontainerid == layoutcontainer.layoutcontainerid){
                            _.each(layout.blocks, function(block){
                                if(block.blockid == editorblock.blockid){

                                    if(typeof(block.blockarticles) == "undefined"  ){
                                        block.blockarticles = [];

                                    }
                                    var alreadyhavethisarticle = [];
                                    alreadyhavethisarticle = _.where(block.blockarticles, {id: newaritcle.id});
                                    if(alreadyhavethisarticle.length == 0){
                                        block.blockarticles.push(angular.copy(newaritcle));
                                    }


                                }
                            });
                        }
                    });
                    $scope.singlepage = page;

                }
            })
        }
    };

    // del a block to page
    $scope.delblock = function(delblock, layoutcontainer, indexid ) {
        _.each($scope.pages, function(page){
            if(page.pageid == $scope.singlepage.pageid){
                _.each(page.pagelayoutdata, function(layout){
                    if(layout.layoutcontainerid == layoutcontainer.layoutcontainerid){
                        var newblock = _.findWhere(layout.blocks, {blockid : delblock.blockid});
                        var blockindex = layout.blocks.indexOf(newblock);
                        layout.blocks.splice(blockindex, 1);
//                        console.log(layout.blocks.length);
                    }
                });
                $scope.singlepage = page;
            }
        });


//        modelSite.delBlockFromPage(block, layoutcontainer, $scope.singlepage);
    };

    // update a block setting
    $scope.updateshowblcoksetting = function(block, event1 ) {
        $scope.newblock.blockname = block.blockname;
        var blocktype =  block.blocktype;
        switch(blocktype)
        {
            case 'auto':
                $scope.cssblocktipbox = blocktype;
                break;
            case 'editor':
                $scope.cssblocktipbox = blocktype;
                break;
            case 'static':
                $scope.cssblocktipbox = blocktype;
                break;
            case 'ads':
                $scope.cssblocktipbox = blocktype;
                break;
            default:
        }

        var blockcontent = $(event1.target).parent().parent();     //获取id 为 blockcontent DIV .
        blockcontent.append($(".tip_box"));
        console.log($(".tip_box"));
        var blocktypemenu = $(".tip_"+ blocktype);     //获取样式名称拼接 .
        var left =  ( parseInt(blockcontent.width() ) - parseInt( blocktypemenu.width() ) )/2;
        blocktypemenu.css({"left":left+"px", "top":-(blocktypemenu.height()), "position":"absolute"});
    }




    //显示header 编辑按钮
    $scope.showheadermenusetting = function(){
        $scope.cssheadermenubutton = true;
    };

    //鼠标移走时隐藏 header nav 编辑框
    $scope.hideheadermenusetting = function(){
        $scope.cssheadermenubutton = false;      //Header右上角mouseover按钮
        $scope.cssheadersetting = false;          //Header设置面板是否显示
    };

    //选中header 主题
    $scope.clickheadertheme = function(indexid, themedata){
        $scope.cssheaderthemeindex = indexid;      //Header选中的theme
        $scope.cssheadermenuhavadata = true;      //Header是否有数据已有数据了

        $scope.sitedataFirebase.defaultsettings.headerthemeindex = indexid;
    };

    //显示header nav 编辑框
    $scope.slideshowheadersetting = function(){
        $scope.cssheadersetting = true;
    };

    //查找page id
    $scope.checkpargeid=function(url){
        for(var i=0;i<$scope.pages.length;i++){
            if($scope.pages[i].pagename== url){
                return $scope.pages[i].pageid;
            }
        }
    };

    //显示footer 编辑按钮
    $scope.showfootmenusetting=function(){
        $scope.cssfootermenubutton = true;
        $scope.cssfootersetting = true;
    }

    //鼠标移走时隐藏 footer nav 编辑框
    $scope.hidefootmenusetting=function(){
        $scope.cssfootermenubutton = false;
        $scope.showfooternavsetting = false;
        $scope.cssfootersetting = false; //隐藏footer的设置面板
    }

    //选中footer 主题
    $scope.clickfootertheme = function(indexid, themedata){
        $scope.cssfooterthemeindex = indexid;
        $scope.cssfootermenuhavadata = true;

        $scope.sitedataFirebase.defaultsettings.footerthemeindex = indexid;
    }

    //显示footer nav 编辑框
    $scope.showfooternavsetting = false;
    $scope.slideshowfootersetting = function(){
        $scope.showfooternavsetting = true;
    }
}