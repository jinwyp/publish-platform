'use strict';

var vcpapp = angular.module('vcpmodule', ['ui.bootstrap']);

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

/* Controllers */
page.c.pageListcontroller = function($scope, $location, $http, modelSite, modelArticle, modelTag) {

    $("#kinMaxShow").kinMaxShow();
    function initialize(){

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
            blockcategory : 'Health and leisure',
            blocksortby : 'bydate',
            apiurl : "",
            adsname : "",
            adscode : ""
        };
        $scope.newarticle = undefined;

        var site = modelSite.getSite();

        //载入所有block的文章
        for (var i=site.pagelist.length-1; i>=0; i--)
        {
            for (var j = site.pagelist[i].pagelayoutdata.length-1; j>=0; j--)
            {
                for (var k = site.pagelist[i].pagelayoutdata[j].blocks.length-1; k>=0; k--)
                {
                    if(site.pagelist[i].pagelayoutdata[j].blocks[k].blocktype == 'auto'){
                        var articles = modelArticle.getArticlesByTags(site.pagelist[i].pagelayoutdata[j].blocks[k].blocktag, site.pagelist[i].pagelayoutdata[j].blocks[k].blockquantity, site.pagelist[i].pagelayoutdata[j].blocks[k].blockcategory);
                        site.pagelist[i].pagelayoutdata[j].blocks[k].blockarticles = articles;
                        /*
                        console.log(articles, site.pagelist[i].pagelayoutdata[j].blocks[k].blocktag, site.pagelist[i].pagelayoutdata[j].blocks[k].blockquantity );

                        if (site.pagelist[i].pagelayoutdata[j].blocks[k].blocktag.length == 0 ){
                            var articles2 = modelArticle.getArticles(site.pagelist[i].pagelayoutdata[j].blocks[k].blockquantity);

                            site.pagelist[i].pagelayoutdata[j].blocks[k].blockarticles = articles2;   //如果没有选择tags则获取所有文章
                        }
*/
                    }
                }
            }
        }


        $scope.get_site = modelSite.getSite();

        $scope.pages = site.pagelist;

        $scope.singlepage =  $scope.pages[0];   //默认读取首页
        $scope.newpage ={};
        $scope.localarticles = modelArticle.getArticleList(100);

        $scope.layouts = modelSite.getLayoutList();
        $scope.blocklayouts = modelSite.getBlockLayout();
        $scope.currentlayoutcontainer = {};

        $scope.header = modelSite.getHeader();
        $scope.headerthemes = modelSite.getHeaderTheme();

        $scope.pagearticletype = site.defaultsettings.articleTypeId;    // left menu default selected page
        $scope.pagefilterarticle = site.defaultsettings.pagefilterArticleType;  //Article Type Page
        $scope.pagefilterlist = site.defaultsettings.pagefilterListType;         //List Type Page
        $scope.layoutfilterlisttype = site.defaultsettings.layoutfilterListType;

        $scope.defaultselectedpageindex = site.defaultsettings.defaulstSelectedPageIndex;    // left menu default selected page
        $scope.selectedpageattributeindex = -1;    //默认隐藏所有page的属性面板

        $scope.selectedpageblockindex = -1;

        $scope.defaultselectedlayoutindex = site.defaultsettings.defaulstSelectedLayoutIndex;    // right menu default selected page

        $scope.cssshowpageaddinput = false;    //添加page的输入框默认不显示

        $scope.cssblocktipadd = false;      //点击当前添加block按钮显示对应block类型菜单
        $scope.cssblocktipedit = false;      //点击当前编辑block按钮显示对应block类型菜单

        $scope.cssblockeditmenuinputbox = false;   //点击当前编辑block的 要输入推荐文章的输入框
        $scope.cssblockeditmenubutton = false;     //点击当前编辑block的 设置的按钮


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
        $scope.footermaxindex=$scope.footer.length-1 < 0 ? 0 : $scope.footer.length-1;
    }

    initialize();

    //left side bar
    $scope.clickpage = function(indexid, page) {
        $(".container").prepend($(".tip_box")); //移动 Tip Box DOM , 防止因为刷新页面而丢失DOM
        $scope.defaultselectedpageindex = indexid;
        $scope.singlepage = page;

        if(page.pagetype === $scope.pagearticletype) {
            $scope.layoutfilterlisttype = {layouttype:1 };
        }else{
            $scope.layoutfilterlisttype = {layouttype:0 };
        }

        $scope.cssshowpageaddinput = false;       //添加page的输入框不显示
    };

    $scope.showaddpageinput = function() {
        $scope.cssshowpageaddinput = true;       //添加page的输入框显示
    };
    $scope.showeditpageattribute = function() {
        $scope.csspageattribute = true;       //添加page的输入框显示
    };
    $scope.closeeditpageattribute = function() {
        $scope.csspageattribute = false;       //添加page的输入框显示
    };


    //left side bar add page
    $scope.showaddpageinput = function() {
        $scope.cssshowpageaddinput = true;       //添加page的输入框显示
    };

    $scope.addpage = function() {
        $(".container").prepend($(".tip_box"));  //移动 Tip Box DOM , 防止因为刷新页面而丢失DOM
        $scope.cssblocktipbox = false;

        $scope.cssshowpageaddinput = false;       //添加page的输入框显示
        var newpage = {
            siteid : 1,
            pagename : $scope.newpage.pagename,
            pageid : 103,
            pagetype : 20,
            pagetitle : $scope.newpage.pagetitle,
            pageurl : $scope.newpage.pageurl
        };
        modelSite.addSinglePage(newpage);
        $scope.layouts = modelSite.getLayoutList();
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
        modelSite.updateSinglePage(page);
    };
    $scope.delpage = function( page) {
        $scope.selectedpageattributeindex = -1;    //关闭当前的page 属性面板
        modelSite.delSinglePage(page);
    };

    //right side bar
    $scope.clicklayout = function(indexid, layout) {
        $(".container").prepend($(".tip_box")); //移动 Tip Box DOM , 防止因为刷新页面而丢失DOM
        $scope.cssblocktipbox = false;
        $scope.defaultselectedlayoutindex = indexid;
        modelSite.saveSinglePageLayout($scope.singlepage, angular.copy(layout));

    };




    // show Block MouseOver Menu Button
    $scope.showeditblockmenubutton= function() {
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
    $scope.showaddblockmenubutton = function() {
        this.cssblockaddmenubutton = true;
    };
    $scope.hideaddblockmenubutton = function() {
        this.cssblockaddmenubutton = false;
        this.cssblocktipadd = false;
    };

    $scope.showblocksettingmenu = function( blocktype, event1, layoutcontainer ) {
        this.cssblocktipadd = false;      //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipbox = false;
        $scope.currentlayoutcontainer = layoutcontainer;
        switch(blocktype)
        {
            case 'auto':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                break;
            case 'editor':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                break;
            case 'static':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                break;
            case 'ads':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                break;
			case 'RSS':
                this.cssblocktipadd = blocktype;      //点击当前block按钮显示对应block类型菜单
                $scope.cssblocktipbox = blocktype;
                break;
            default:
        }


        var blockcontent = $(event1.target).parent().parent();     //获取id 为 blockcontent DIV .
        blockcontent.append($(".tip_box"));
        var blocktypemenu = $(".tip_"+ blocktype)     //获取样式名称拼接 .
        var left =  ( parseInt(blockcontent.width() ) - parseInt( blocktypemenu.width() ) )/2;
        blocktypemenu.css({"left":left+"px", "top":-(blocktypemenu.height()), "position":"absolute"});
//        console.log(blockcontent.height(), blocktypemenu.height());
    };

    $scope.clickblocklayouttab = function(event1, divid) {
        var heightdiff;
        switch(divid)
        {
            case 'tab-layout':
                heightdiff = 306;
                break;
            case 'tab-filter':
                heightdiff = 210;
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

    // add a block to page
    $scope.addblocktopage = function(blocktype, layoutcontainer, indexid ) {

        var newblock = {
            blockid : 200,
            blocktype : 'auto',
            blockstatictype:'',
            blockname : "",
            blocklayout : 10,
            blockquantity : 0,
            blocktag : [],
            blockcategory : 'Health and leisure',
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
                    if(  modelTag.checkTagExist(temptagslistname[i]) ){
                        newtag = modelTag.checkTagExist(temptagslistname[i]);
                    }else{
                        newtag = {
                            "tagid" : modelTag.getMaxTagID(),
                            "tagname" : temptagslistname[i]
                        }
                        modelTag.createNewTag(newtag);
                    }
                    newblock.blocktag.push(newtag);
                }

                //通过Tags 获取文章
                newblock.blockarticles = modelArticle.getArticlesByTags(newblock.blocktag, newblock.blockquantity, newblock.blockcategory);

/*                if (temptagslistname.length == 0 || newblock.blockquantity == ''){
                    newblock.blockarticles = modelArticle.getArticles(newblock.blockquantity);
                }*/

                break;

            case 'editor':
                newblock.blocktype = 'editor';
                newblock.blockname = $scope.newblock.blockname;
                newblock.blockquantity = Number($scope.newblock.blockquantity);
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
                break;

            default:
        }

        modelSite.addSingleBlockToPage(newblock, layoutcontainer, $scope.singlepage );
        this.cssblocktipadd = false;          //点击当前block按钮显示对应block类型菜单
        $scope.cssblocktipbox = false;
    };

    $scope.addaritcletoeditorblock = function(block, layoutcontainer ){
        if(block.blockarticles.length < block.blockquantity){
            var newaritcle = this.newarticle;
            console.log(block);
            modelSite.addArticleToBlock(newaritcle, block, layoutcontainer, $scope.singlepage);
        }
        console.log(this.newarticle);
    }

    // del a block to page
    $scope.delblock = function(block, layoutcontainer, indexid ) {
        modelSite.delBlockFromPage(block, layoutcontainer, $scope.singlepage);
    }

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
        var blocktypemenu = $(".tip_"+ blocktype)     //获取样式名称拼接 .
        var left =  ( parseInt(blockcontent.width() ) - parseInt( blocktypemenu.width() ) )/2;
        blocktypemenu.css({"left":left+"px", "top":-(blocktypemenu.height()), "position":"absolute"});
    }

    $scope.check = function( ) {
        console.log(this.blockarticles);
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
    $scope.headerlocalurl='';

    //show header menu and theme
    $scope.showheadermenusetting = function(){
        //$scope.cssheadermenuhavadata = false;      //Header是否有数据
//       $scope.cssheadersetting = false;          //Header设置面板是否显示
        $scope.cssheadermenubutton = true;      //Header右上角mouseover按钮     //所有Header Block经过时显示Attribute Panel Icon
    }

    $scope.hideheadermenusetting = function(){
        $scope.cssheadermenubutton = false;      //Header右上角mouseover按钮
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
        $scope.footercommonfunction();
        if(isheader){
            $scope.showli=$scope.csstitleform ? param1 : -1;
            $scope.showerror=false;
            headerflag=param;
            headerparentid=param1;
        }else{
            $scope.footerli=$scope.csstitleform ? param1 : -1;
        }
        $scope.newheaderdata.menutype='local';
        $scope.newheaderdata.menuname="";
        $scope.newheaderdata.linkedurl="";
        $("#delete")[0].value='Cancel';
        $scope.headerlocalurl="Homepage";
        $("#urltype1").attr("checked",false);
        $("#urltype2").attr("checked",true);
        setupLabel();
        insertdata=true;
    }
    $scope.newheaderdata ={};
    $scope.checkpargeid=function(){
        for(var i=0;i<$scope.pages.length;i++){
            if($scope.pages[i].pagename== $scope.headerlocalurl){
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
            $scope.newheaderdata.linkedpagename=$scope.newheaderdata.linkedurl;
            $scope.newheaderdata.linkedpageid=0;
        }else{
            $scope.newheaderdata.menutype='local';
            $scope.newheaderdata.linkedurl=$scope.headerlocalurl;
            $scope.newheaderdata.linkedpagename= $scope.headerlocalurl;
            $scope.newheaderdata.linkedpageid=$scope.checkpargeid();
        }
        $scope.csstitleform=false;
        $scope.footercommonfunction();
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
                    modelSite.savesitedata($scope.get_site);
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
                    modelSite.savesitedata($scope.get_site);
                }
            }
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
                footerclass.footername=$scope.newheaderdata.menuname;
                footerclass.footertype=$scope.newheaderdata.menutype;
                footerclass.linkedurl=$scope.newheaderdata.linkedurl;
                footerclass.linkedpageid=$scope.newheaderdata.linkedpageid;
                footerclass.linkedpagename=$scope.newheaderdata.linkedpagename;
                modelSite.savesitedata($scope.get_site);
            }
            $scope.footermaxindex=$scope.footer.length-1 < 0 ? 0 : $scope.footer.length-1;
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
        $scope.footercommonfunction();
        $scope.showa=$scope.csstitleform ? parentindex : -1;
        $scope.showerror=false;
        parentmenuindex=parentindex;
        childmenuindex='';
        childmenudata='';
        headclass=obj;
        ishead=true;
        $scope.newheaderdata.menuname=obj.menuname;
        $scope.newheaderdata.menutype=obj.menutype;
        $scope.assignmentform(obj);
    }
    $scope.footerlia=-1;
    var footerclass='';
    var footerindex='';
    //edit footer menu
    $scope.openfooterinfo=function(evt,obj,index){
        insertdata=false;
        var blockcontent = $(evt.target).parent().parent();
        blockcontent.prepend($(".newlink_panel"));
        $scope.csstitleform=true;
        ishead=false;
        footerindex=index;
        footerclass=obj;
        $scope.footercommonfunction();
        $scope.footerlia=$scope.csstitleform ? obj : -1;
        $scope.newheaderdata.menuname=obj.footername;
        $scope.newheaderdata.menutype=obj.footertype;
        $scope.assignmentform(obj);
    }

    var headchildclass='';
    //edit child menu
    $scope.openchildinfo=function(childindex,obj,childdata,evt){
        insertdata=false;
        var blockcontent = $(evt.target).parent().parent();
        blockcontent.append($(".newlink_panel"));
        headerflag=false;
        ishead=true;
        headchildclass=obj;
        $scope.csstitleform=true;
        $scope.footercommonfunction();
        $scope.showchilda=$scope.csstitleform ? obj : -1;
        $scope.showerror=false;
        childmenuindex=childindex;
        childmenudata=childdata;
        $("#delete")[0].value='Delete';
        $scope.newheaderdata.menuname=obj.menuname;
        $scope.newheaderdata.menutype=obj.menutype;
        $scope.assignmentform(obj);
    }
    //delete menu
    $scope.deleteparentmenu=function(evt){
        if(ishead){
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
        }else{
            if($("#delete")[0].value=='Delete'){
                $scope.footer.splice(footerindex,1);
                $scope.csstitleform=false;
            }else{
                $scope.csstitleform=false;
            }
        }
        modelSite.savesitedata($scope.get_site);
        $scope.footermaxindex=$scope.footer.length-1 < 0 ? 0 : $scope.footer.length-1;
        $("body").append($(".newlink_panel"));//delete before remove form position,it is must step
        $scope.footercommonfunction();
    }
    $scope.showfootmenusetting=function(){
        $scope.cssfootermenubutton=true;
    }
    $scope.hidefootmenusetting=function(){
        $scope.cssfootermenubutton = false;
    }
    $scope.clickfootertheme = function(indexid, themedata){
        $scope.cssfooterthemeindex = indexid;
        $scope.cssfootermenuhavadata = true;
    }
    $scope.slideshowfootersetting = function(){
        $scope.cssfootersetting = true;
    }
    $scope.footercommonfunction=function(){
        $scope.showli=-1;
        $scope.showa=-1;
        $scope.showchilda=-1;
        $scope.footerli=-1;
        $scope.footerlia=-1;
    }
    $scope.assignmentform=function(obj){
        $("#delete")[0].value='Delete';
        if($scope.newheaderdata.menutype=="other"){
            $("#urltype1").attr("checked",true);
            $("#urltype2").attr("checked",false);
            $scope.newheaderdata.linkedurl=obj.linkedurl;
        }else{
            $scope.newheaderdata.linkedurl="";
            $("#urltype1").attr("checked",false);
            $("#urltype2").attr("checked",true);
            $scope.headerlocalurl=obj.linkedpagename;
        }
        setupLabel();
    }
}