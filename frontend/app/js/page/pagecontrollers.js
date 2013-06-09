'use strict';

var pageapp = angular.module('pagemodule', []);

pageapp.directive('enterKeypress', function(){
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


var page = {
    m:{},
    c:{}
};

pageapp.controller(page.c);

pageapp.factory('modelSite', function(){

    var sitedata = {
        siteid:1,
        sitename:'NewSite',

        pagelist : [
            { siteid:1, pagename:'Homepage', pageid:101, pagetype:10, pagetitle:"Homepage", pageurl:"homepage",  pageorder:1, pagelayoutid:10,
                pagelayoutdata:[
                    {layoutcontainerclass:"span9", layoutcontainerid:1000 , blocks:[
                            {blockid:100, blocktype:1, blockname:"name1",blocklayout:10, blockquantity:6, blocktag:[], blockcategory:[], blocksortby:'date' } ,
                            {blockid:101, blocktype:1, blockname:"name2" } ,
                            {blockid:102, blocktype:1, blockname:"name3" }
                        ]
                    },
                    {layoutcontainerclass:"span3", layoutcontainerid:1000, blocks:[] }
                ]
            },
            { siteid:1, pagename:'Channel2', pageid:102,  pagetype:20, pagetitle:"Ch2", pageurl:"ch2", pageorder:6,  pagelayoutid:10, pagelayoutdata:[] },
            { siteid:1, pagename:'Channel3', pageid:103,  pagetype:20, pagetitle:"Ch3", pageurl:"ch3", pageorder:10, pagelayoutid:10, pagelayoutdata:[] },


            { siteid:1, pagename:'Article', pageid:103, pagetype:11, pagetitle:"article", pageurl:"article", pageorder:0, pagelayoutid:10, pagelayoutdata:[] }
        ],

        headerdata:[],

        footerdata:[
            {footerid:1,footername:'foot1',footertype:'local',linkedurl:'',linkedpageid:101,linkedpagename:'Homepage'},
            {footerid:2,footername:'foot2',footertype:'other',linkedurl:'http://www.1.com',linkedpageid:0,linkedpagename:''}
        ],

        headertheme:[
            {headerthemeid:1,name:'black',css:'theme_01', image:'app/img/header_theme_01.jpg'},
            {headerthemeid:2,name:'red',css:'theme_02', image:'app/img/header_theme_02.jpg'},
            {headerthemeid:3,name:'blue',css:'theme_03', image:'app/img/header_theme_03.jpg' },
            {headerthemeid:3,name:'blue',css:'theme_04', image:'app/img/header_theme_04.jpg'}
        ],


        defaultsettings:{
            defaulstSelectedPageIndex:1,
            defaulstSelectedLayoutIndex:0,
            articleTypeId:11,

            pagefilterArticleType:{pagetype:1},
            pagefilterListType:{pagetype:2},
            layoutfilterListType:{layouttype:0}
        },
        footertheme:[
            {footerthemeid:1,name:'black',css:'theme_01', image:'app/img/header_theme_01.jpg'},
            {footerthemeid:2,name:'red',css:'theme_02', image:'app/img/header_theme_02.jpg'},
            {footerthemeid:3,name:'blue',css:'theme_03', image:'app/img/header_theme_03.jpg' },
            {footerthemeid:4,name:'green',css:'theme_04', image:'app/img/header_theme_04.jpg'}
        ]
    };

    var layoutdata = [
        {layoutid: 10, layoutname: '两列1', layouttype : 1, layoutorder:1, layoutcss:'ico_layout_00', layoutimage:'app/img/layout_templete.png', layoutdata:[
            {layoutcontainerclass:"span9", layoutcontainerid:1000, blocks:[]},
            {layoutcontainerclass:"span3", layoutcontainerid:1001, blocks:[]}
            ]},

        {layoutid: 10, layoutname: '两列2', layouttype : 1, layoutorder:2, layoutcss:'ico_layout_01', layoutimage:'app/img/layout_templete_01.png', layoutdata:[
            {layoutcontainerclass:"span3", layoutcontainerid:1002, blocks:[]},
            {layoutcontainerclass:"span9", layoutcontainerid:1003, blocks:[]}
        ]},
        {layoutid: 10, layoutname: '三列1', layouttype : 0, layoutorder:3, layoutcss:'ico_layout_02', layoutimage:'app/img/layout_templete_02.png', layoutdata:[
            {layoutcontainerclass:"span4", layoutcontainerid:1005, blocks:[]},
            {layoutcontainerclass:"span4", layoutcontainerid:1006, blocks:[]},
            {layoutcontainerclass:"span4", layoutcontainerid:1007, blocks:[]}
        ]}
    ];
    //read local header data
    if(window.localStorage){
        sitedata.headerdata=JSON.parse(localStorage.getItem("newData")) == null ? [] : JSON.parse(localStorage.getItem("newData"));
    }
    var factory = {};
    factory.getSite = function () {
        return  sitedata;
    };

    factory.getPageList = function () {
        return  sitedata.pagelist;
    };

    factory.getSinglePage = function (selectedpage) {
        var pageindex = sitedata.pagelist.indexOf(selectedpage);
        return  sitedata.pagelist[pageindex];
    };

    factory.addSinglePage = function (pagedata) {
        return  sitedata.pagelist.push(pagedata);
    };

    factory.updateSinglePage= function(pagedata){
        return;
    };

    factory.delSinglePage= function( pagedata){
        if(pagedata.pagetype >= 20){
            //首页和内容页面都是无法删除的
            var pageindex = sitedata.pagelist.indexOf(pagedata);
            sitedata.pagelist.splice(pageindex, 1);
        }
        return;
    };

    factory.addSingleBlockToPage = function (newblock, pagelayout, pagedata) {

        var pageindex = sitedata.pagelist.indexOf(pagedata);
        var layoutindex = sitedata.pagelist[pageindex].pagelayoutdata.indexOf(pagelayout);

        pagelayout.blocks.push(newblock);

        sitedata.pagelist[pageindex].pagelayoutdata[layoutindex] = pagelayout;
        return  ;
    };



    //layout 修改
    factory.getLayoutList = function() {
        return  layoutdata;
    }

    factory.saveSinglePageLayout = function( selectedpage, layout) {
        var pageindex = sitedata.pagelist.indexOf(selectedpage);
//        console.log(pageindex, sitedata.pagelist[pageindex].pagename);
        sitedata.pagelist[pageindex].pagelayoutdata = layout.layoutdata ;
        return  ;
    }

    //header Theme
    factory.getHeaderTheme=function(){
        return sitedata.headertheme;
    }

    //header 修改
    factory.getHeader=function(){
        return sitedata.headerdata;
    }
    factory.addHeaderMenu = function (menudata) {
        return  sitedata.headerdata.push(menudata);
    };
    factory.addHeaderChildMenu = function (menuindex,childmenudata) {
        return  sitedata.headerdata[menuindex].childdata.push(childmenudata);
    };

    factory.editHeaderMenu = function (pagedata) {
        return  sitedata.headerdata.push(pagedata);
    };
    factory.editHeaderChildMenu = function (id,pagedata) {
        return  sitedata.headerdata[id].childdata.push(pagedata);
    };

    factory.getfoottheme=function(){
        return sitedata.footertheme;
    };
    factory.getfooter=function(){
        return sitedata.footerdata;
    };
    factory.addfooterMenu = function (menudata) {
        return  sitedata.footerdata.push(menudata);
    };
    return factory;
});


/* Controllers */
page.c.Pagelist = function($scope, $location, $http, $routeParams, modelSite) {

    $scope.site = {};
    $scope.pages = [];
    $scope.singlepage = {};
    $scope.newpage ={};
    $scope.layouts = [];
    $scope.header=[];
    $scope.newheaderdata ={};
    $scope.headerthemes ={};
    $scope.footerthemes={};

    initialize();

    function initialize(){
        $scope.site = modelSite.getSite();
        $scope.pages = modelSite.getPageList();
        $scope.singlepage =  $scope.pages[0];   //默认读取首页

        $scope.layouts = modelSite.getLayoutList();
        $scope.header = modelSite.getHeader();
        $scope.headerthemes = modelSite.getHeaderTheme();

        $scope.pagearticletype = $scope.site.defaultsettings.articleTypeId;    // left menu default selected page
        $scope.pagefilterarticle = $scope.site.defaultsettings.pagefilterArticleType;
        $scope.pagefilterlist = $scope.site.defaultsettings.pagefilterListType;
        $scope.layoutfilterlisttype = $scope.site.defaultsettings.layoutfilterListType;

        $scope.defaultselectedpageindex = $scope.site.defaultsettings.defaulstSelectedPageIndex;    // left menu default selected page
        $scope.selectedpageattributeindex = -1;    //默认隐藏所有page的属性面板

        $scope.selectedpageblockindex = -1;    

        $scope.defaultselectedlayoutindex = $scope.site.defaultsettings.defaulstSelectedLayoutIndex;    // right menu default selected page

        $scope.cssshowpageaddinput = false;    //添加page的输入框默认不显示
        $scope.cssblockbutton = -1;    //添加block的menu的四个按钮mouseover时才显示

        $scope.cssblockiconactive = false;      //点击当前block按钮的选中的样式
        $scope.cssblocktipindexauto = -1;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipindexeditor = -1;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipindexstatic = -1;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipindexads = -1;      //点击当前block按钮显示对应block类型菜单

        $scope.cssheadermenuhavadata = false;      //Header是否有数据
        $scope.cssheadermenubutton = false;      //Header右上角mouseover按钮显示
        $scope.cssheadersetting = false;      //Header设置nav下拉界面
        $scope.cssheaderthemeindex = -1;      //Header默认主题Theme 选择哪一个
        $scope.cssheadernavindex = 0;      //Header默认菜单的颜色为首页

        $scope.cssfootermenuhavadata = false;
        $scope.cssfootermenubutton=false;
        $scope.cssfootersetting=false;
        $scope.cssfooterthemeindex=-1;
        $scope.footerthemes=modelSite.getfoottheme();
        $scope.footer=modelSite.getfooter();
    }



    //left side bar
    $scope.clickpage = function(indexid, page) {
        $scope.defaultselectedpageindex = indexid;
        $scope.singlepage = page;

        if(page.pagetype === $scope.pagearticletype) {
            $scope.layoutfilterlisttype = {layouttype:1 };
        }else{
            $scope.layoutfilterlisttype = {layouttype:0 };
        }

        $scope.cssshowpageaddinput = false;       //添加page的输入框不显示
    }

    $scope.showaddpageinput = function() {
        $scope.cssshowpageaddinput = true;       //添加page的输入框显示
    }
    $scope.showeditpageattribute = function() {
        $scope.csspageattribute = true;       //添加page的输入框显示
    }
    $scope.closeeditpageattribute = function() {
        $scope.csspageattribute = false;       //添加page的输入框显示
    }


    //left side bar add page
    $scope.showaddpageinput = function() {
        $scope.cssshowpageaddinput = true;       //添加page的输入框显示
    }

    $scope.addpage = function() {
        $scope.cssshowpageaddinput = false;       //添加page的输入框显示
        var newpage = {
            siteid:1,
            pagename:$scope.newpage.pagename,
            pageid:103,
            pagetype:20,
            pagetitle:$scope.newpage.pagetitle,
            pageurl:$scope.newpage.pageurl
        }
        modelSite.addSinglePage(newpage);
    }


    //left side bar add page attribute
    $scope.showeditpageattribute = function(indexid) {
        $scope.selectedpageattributeindex = indexid;    //点击显示当前的page 属性面板
    }

    $scope.closeeditpageattribute = function(indexid) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板
    }

    $scope.editsavepage = function(page) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板
        modelSite.updateSinglePage(page);
    }
    $scope.delpage = function( page) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板
        modelSite.delSinglePage(page);
    }

    //right side bar
    $scope.clicklayout = function(indexid, layout) {
        $scope.defaultselectedlayoutindex = indexid;
        modelSite.saveSinglePageLayout($scope.singlepage, layout);
    }

    //add blocks
    $scope.showblockmenubutton = function( indexid) {
        $scope.cssblockbutton = indexid;      //显示当前block的menu按钮
    }
    $scope.hideblockmenubutton = function( indexid) {
        $scope.cssblockbutton = -1;           //显示当前block的menu按钮

    }
    $scope.showblockautomenu = function( indexid, blocktype, event1) {
        $scope.cssblockiconactive = blocktype;      //点击当前block按钮的选中的样式
        $scope.cssblocktipindexauto = -1;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipindexeditor = -1;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipindexstatic = -1;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipindexads = -1;      //点击当前block按钮显示对应block类型菜单
        switch(blocktype)
        {
            case 'auto':
                $scope.cssblocktipindexauto = indexid;      //点击当前block按钮显示对应block类型菜单
                break;
            case 'editor':
                $scope.cssblocktipindexeditor = indexid;      //点击当前block按钮显示对应block类型菜单
                break;
            case 'static':
                $scope.cssblocktipindexstatic = indexid;      //点击当前block按钮显示对应block类型菜单
                break;
            case 'ads':
                $scope.cssblocktipindexads = indexid;      //点击当前block按钮显示对应block类型菜单
                break;
            default:
        }
        var blockcontent = $(event1.target).parent().parent();
        var blocktypemenu = blockcontent.find(".tip_"+blocktype);     //获取样式名称拼接
        var left =  ( parseInt(blockcontent.width() ) - parseInt( blocktypemenu.width() ) )/2;
        blocktypemenu.css({"left":left+"px","top":-(blocktypemenu.height()),"position":"absolute"});
    }
    $scope.clickblocklayouttab = function( event1) {
        //重新计算高度,因为block tab 页面切换了  此处有问题,因为使用了bootstrap的tab切换
        var blockcontent1 = $(event1.target).parent().parent().parent().parent().parent();
        var blocktypemenu1 = blockcontent1.find(".tip_auto");     //获取样式名称拼接
        console.log(blockcontent1.width(), blocktypemenu1.width(), blocktypemenu1.height());
        console.log(blocktypemenu1);
        blocktypemenu1.css({"top":-(blocktypemenu1.height()),"position":"absolute"});
    }
    $scope.addblocktopage = function(layoutcontainer ) {
        var newblock = {
            blockid:200,
            blocktype:1,
            blockname:"name1",
            blocklayout:10,
            blockquantity:6,
            blocktag:[],
            blockcategory:[],
            blocksortby:'date'
        }
        modelSite.addSingleBlockToPage(newblock, layoutcontainer, $scope.singlepage );
        $scope.cssblocktipindexauto = -1;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipindexeditor = -1;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipindexstatic = -1;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipindexads = -1;      //点击当前block按钮显示对应block类型菜单
    }

    //header
    var headerflag=false;
    var headerparentid='';
    var parentmenuindex='';
    var childmenudata='';
    var childmenuindex='';
    var classidhtml='';
    $scope.showli=-1;
    $scope.showa=-1;
    $scope.showchilda=-1;
    $scope.showerror=false;
    $scope.headerlocalurl=$scope.pages[0];

    //show header menu and theme
    $scope.showheadermenusetting = function(){
        //$scope.cssheadermenuhavadata = false;      //Header是否有数据
       // $scope.cssheadersetting = false;          //Header设置面板是否显示
        $scope.cssheadermenubutton = true;      //Header右上角mouseover按钮     //所有Header Block经过时显示Attribute Panel Icon
    }

    $scope.hideheadermenusetting = function(){
       // $scope.cssheadermenubutton = false;      //Header右上角mouseover按钮
    }

    $scope.clickheadertheme = function(indexid, themedata){
        //点击Nav 的每个Theme
        $scope.cssheaderthemeindex = indexid;      //Header选中的theme
        $scope.cssheadermenuhavadata = true;      //Header是否有数据已有数据了y
    }

    $scope.slideshowheadersetting = function(){
        //点击Nav Block的设置图标
        $scope.cssheadersetting = true;
    }

    //insert header data form
    var insertdata=false;
    var ishead=false;
    $scope.footerli=-1;
    $scope.showheaderform=function(param1,param,evt,isheader){
        var blockcontent = $(evt.target).parent().parent();
        blockcontent.append($(".newlink_panel"));
        $scope.csstitleform=true;
        ishead=isheader;
        $scope.showa=-1;
        $scope.showchilda=-1;
        if(isheader){
            $scope.footerli=-1;
            $scope.showli=$scope.csstitleform ? param1 : -1;
            $scope.showerror=false;
            headerflag=param;
            headerparentid=param1;
        }else{
            $scope.showli=-1;
            $scope.footerli=$scope.csstitleform ? param1 : -1;
        }
        $scope.newheaderdata.menutype='other';
        $scope.newheaderdata.menuname="";
        $scope.newheaderdata.linkedurl="";
        $("#delete")[0].value='Cancel';
        $("#urltype1").attr("checked",true);
        $("#urltype2").attr("checked",false);
        setupLabel();
        insertdata=true;
    }
    $scope.newheaderdata ={};
    $scope.checkpargeid=function(){
        for(var i=0;i<$scope.pages.length;i++){
            if($scope.pages[i].pagename==$(".dk_label")[0].textContent){
                return $scope.pages[i].pageid;
            }
        }
    }
    //save data
    $scope.saveheaderinfo=function(){
        if($scope.newheaderdata.menuname == ""){
            return;
        }
        if($scope.newheaderdata.menutype=="other"){
            $scope.newheaderdata.menutype='other';
            if($scope.newheaderdata.linkedurl==""){
                return;
            }
            $scope.newheaderdata.linkedurl=$scope.newheaderdata.linkedurl;
            $scope.newheaderdata.linkedpagename='';
            $scope.newheaderdata.linkedpageid=0;
        }else{
            $scope.newheaderdata.menutype='local';
            $scope.newheaderdata.linkedurl='';
            $scope.newheaderdata.linkedpagename=$(".dk_label")[0].textContent;
            $scope.newheaderdata.linkedpageid=$scope.checkpargeid();
        }
        $scope.csstitleform=false;
        $scope.showli=-1;
        $scope.showa=-1;
        $scope.showchilda=-1;
        $scope.footerli=-1;
        if(ishead){
            if(headerflag){
                if(insertdata){
                    if($scope.header.length==0){
                        var headeridindex=1;
                    }else{
                        var headeridindex=$scope.header[$scope.header.length-1].headerid+1;
                    }
                    var newheaderdata={
                        headerid:headeridindex,
                        menuname:$scope.newheaderdata.menuname,
                        menutype:$scope.newheaderdata.menutype,
                        linkedurl:$scope.newheaderdata.linkedurl,
                        linkedpageid:$scope.newheaderdata.linkedpageid,
                        linkedpagename:$scope.newheaderdata.linkedpagename,
                        childdata:[]
                    };
                    modelSite.addHeaderMenu(newheaderdata);
                }else{
                    headclass.menuname=$scope.newheaderdata.menuname;
                    headclass.menutype=$scope.newheaderdata.menutype;
                    headclass.linkedurl=$scope.newheaderdata.linkedurl;
                    headclass.linkedpageid=$scope.newheaderdata.linkedpageid;
                    headclass.linkedpagename=$scope.newheaderdata.linkedpagename;
                }
            }else{
                if(insertdata){
                    if($scope.header[headerparentid].childdata.length==0){
                        var childidindex=1;
                    }else{
                        var childidindex=$scope.header[headerparentid].childdata[$scope.header[headerparentid].childdata.length-1].childid+1;
                    }
                    var newheaderdata={
                        childid:childidindex,
                        menuname:$scope.newheaderdata.menuname,
                        menutype:$scope.newheaderdata.menutype,
                        linkedurl:$scope.newheaderdata.linkedurl,
                        linkedpageid:$scope.newheaderdata.linkedpageid,
                        linkedpagename:$scope.newheaderdata.linkedpagename
                    };
                    modelSite.addHeaderChildMenu(headerparentid,newheaderdata);
                }else{
                    headchildclass.menuname=$scope.newheaderdata.menuname;
                    headchildclass.menutype=$scope.newheaderdata.menutype;
                    headchildclass.linkedurl=$scope.newheaderdata.linkedurl;
                    headchildclass.linkedpageid=$scope.newheaderdata.linkedpageid;
                    headchildclass.linkedpagename=$scope.newheaderdata.linkedpagename;
                }
            }
        /*    if(window.localStorage){
                localStorage.setItem("newData",JSON.stringify($scope.header));
            }*/
        }else{
            if(insertdata){
                if($scope.footer.length==0){
                    var footeridindex=1;
                }else{
                    var footeridindex=$scope.footer[$scope.footer.length-1].footerid+1;
                }
                var newfooterdata={
                    footerid:footeridindex,
                    footername:$scope.newheaderdata.menuname,
                    footertype:$scope.newheaderdata.menutype,
                    linkedurl:$scope.newheaderdata.linkedurl,
                    linkedpageid:$scope.newheaderdata.linkedpageid,
                    linkedpagename:$scope.newheaderdata.linkedpagename
                };
                modelSite.addfooterMenu(newfooterdata);
            }else{

            }
        }
    }
    var headclass='';
    //edit parent menu
    $scope.openheaderinfo=function(parentindex,obj,evt){
        insertdata=false;
        headerflag=true;
        var blockcontent = $(evt.target).parent().parent();
        blockcontent.prepend($(".newlink_panel"));
        $scope.csstitleform=true;
        $scope.showa=$scope.csstitleform ? parentindex : -1;
        $scope.showli=-1;
        $scope.showchilda=-1;
        $scope.showerror=false;
        parentmenuindex=parentindex;
        childmenuindex='';
        childmenudata='';
        $("#delete")[0].value='Delete';
        headclass=obj;
        $scope.newheaderdata.menuname=obj.menuname;
        $scope.newheaderdata.menutype=obj.menutype;
        if($scope.newheaderdata.menutype=="other"){
            $("#urltype1").attr("checked",true);
            $("#urltype2").attr("checked",false);
            $scope.newheaderdata.linkedurl=obj.linkedurl;
        }else{
            $scope.newheaderdata.linkedurl="";
            $("#urltype1").attr("checked",false);
            $("#urltype2").attr("checked",true);
            $(".dk_label")[0].textContent=obj.linkedpagename;
        }
        setupLabel();
    }
    var headchildclass='';
    //edit child menu
    $scope.openchildinfo=function(childindex,obj,childdata,evt){
        insertdata=false;
        var blockcontent = $(evt.target).parent().parent();
        blockcontent.append($(".newlink_panel"));
        headerflag=false;
        headchildclass=obj;
        $scope.csstitleform=true;
        $scope.showchilda=$scope.csstitleform ? obj : -1;
        $scope.showa=-1;
        $scope.showli=-1;
        $scope.showerror=false;
        childmenuindex=childindex;
        childmenudata=childdata;
        $("#delete")[0].value='Delete';
        $scope.newheaderdata.menuname=obj.menuname;
        $scope.newheaderdata.menutype=obj.menutype;
        if($scope.newheaderdata.menutype=="other"){
            $("#urltype1").attr("checked",true);
            $("#urltype2").attr("checked",false);
            $scope.newheaderdata.linkedurl=obj.linkedurl;
        }else{
            $scope.newheaderdata.linkedurl="";
            $("#urltype1").attr("checked",false);
            $("#urltype2").attr("checked",true);
            $(".dk_label")[0].textContent=obj.linkedpagename;
        }
        setupLabel();
    }
    //delete menu
    $scope.deleteparentmenu=function(evt){
        if($("#delete")[0].value=='Delete'){
            if(childmenuindex===''){
                if($scope.header[parentmenuindex].childdata.length>0){
                    $scope.showerror=true;
                    return;
                }else{
                    $scope.header.splice(parentmenuindex,1);
                    $scope.csstitleform=false;
                }
                childmenuindex='';
                childmenudata='';
            }else{
                childmenudata.splice(childmenuindex,1);
                $scope.csstitleform=false;
            }
        }else{
            $scope.csstitleform=false;
        }
        if(window.localStorage){
            localStorage.setItem("newData",JSON.stringify($scope.header));
        }
        $("body").append($(".newlink_panel"));//delete before remove form position,it is must step
        $scope.showli=-1;
        $scope.showa=-1;
        $scope.showchilda=-1;
        $scope.footerli=-1;
    }
    $scope.showfootmenusetting=function(){
        $scope.cssfootermenubutton=true;
    }
    $scope.hideheadermenusetting=function(){
       // $scope.cssfootermenubutton=false;
    }
    $scope.clickfootertheme = function(indexid, themedata){
        $scope.cssfooterthemeindex = indexid;
        $scope.cssfootermenuhavadata = true;
    }
    $scope.slideshowfootersetting = function(){
        $scope.cssfootersetting = true;
    }
}