/**
 * Created with JetBrains WebStorm.
 * User: ywang
 * Date: 7/8/13
 * Time: 4:16 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict'

/*  Factory  */
vcpapp.factory('modelArticle', function(){
    var articlelist = [];

    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("articlesData")) == null || JSON.parse(localStorage.getItem("articlesData")).length == 0){
            articlelist = [];
        }else{
            articlelist = JSON.parse(localStorage.getItem("articlesData"));
        }
    }

    var factory = {};

    factory.getArticlesByTags = function (taglistdata, quantity) {
        var articlesresult = [];

        articlesresult = _.filter(articlelist, function(element1){

            var singlearticletags = _.filter(element1.tags, function(element2){
                var tagresult = _.where(taglistdata, element2);
                return tagresult.length;
            });
//            console.log(element1, singlearticletags);
            return  singlearticletags.length;
        });

        if(articlesresult.length > quantity){
            articlesresult.splice(0, articlesresult.length - quantity);    //判断文章数量
        }
        return articlesresult;
    };

    factory.getArticles = function (quantity) {
        var articlesresult = articlelist;
        if(articlesresult.length > quantity){
            articlesresult.splice(0, articlesresult.length - quantity);    //判断文章数量
            console.log(articlesresult.length, quantity);
        }

        return articlesresult;
    };

    return factory;

});




vcpapp.factory('modelTag', function(){
    var taglist = [];

    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("tagsData")) == null || JSON.parse(localStorage.getItem("tagsData")).length == 0){
            taglist = [];
        }else{
            taglist = JSON.parse(localStorage.getItem("tagsData"));
        }
    }

    var factory = {};

    //Tags
    factory.getMaxTagID = function () {

        var tagmaxid;
        if(taglist.length==0){
            tagmaxid=10001;
        }else{
            tagmaxid = taglist[taglist.length-1].tagid + 1;
        }
        return tagmaxid;
    };

    factory.checkTagExist = function (tagname) {
        var tagresult = _.findWhere(taglist, {tagname: tagname});
        if (tagresult === undefined) {
            return false;
        }else{
//            console.log(tagresult);
            return tagresult;
        }
    };

    factory.createNewTag = function (tagdata) {
        taglist.push(tagdata);
        localStorage.setItem("tagsData",JSON.stringify(taglist));
        return tagdata;
    };
    return factory;

});






vcpapp.factory('modelSite', function(){

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
    var blocklayout = [
        {id: 100, layoutname: '一列纯文字', fitforblocktype : 0, order:1, layoutimage:'app/img/ico_layout_03.png'},
        {id: 101, layoutname: '两列纯文字', fitforblocktype : 0, order:2, layoutimage:'app/img/ico_layout_04.png'},
        {id: 102, layoutname: '两列图文字', fitforblocktype : 0, order:3, layoutimage:'app/img/ico_layout_01.png'},
        {id: 103, layoutname: '两列图文字', fitforblocktype : 0, order:3, layoutimage:'app/img/ico_layout_02.png'}

    ];


    var sitedata = {};

    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("siteData")) == null || JSON.parse(localStorage.getItem("siteData")).length == 0){
            sitedata = {
                userinfo : {},
                siteid : 1,
                sitename : 'NewSite',

                pagelist : [
                    { siteid:1, pagename:'Homepage', pageid:101, pagetype:10, pagetitle:"Homepage", pageurl:"homepage",  pageorder:1, pagelayoutid:10,
                        pagelayoutdata:[
                            {layoutcontainerclass:"span9", layoutcontainerid:1000 , blocks:[
                                {blockid:100, blocktype:'auto', blockstatictype:'', blockname:"Today hot",blocklayout:10, blockquantity:6, blocktag:[], blockcategory:[], blocksortby:'date' , blockarticles:[
  /*                                  {"id": 1000, "title": "multiple partial views in angularjs111.",  "status": "needreview",
                                        "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",  "author": "Eric",  "editor": "iFan", "clickcount":1023,
                                        "category": "Today", "categoryid":1000,
                                        "tags": [
                                            { "tagid":10000, "name":"computer" },
                                            { "tagid":10001, "name":"videocard" }
                                        ]
                                    },
                                    {"id": 1002, "title": "222222222.",  "status": "needreview",
                                        "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",  "author": "Eric",  "editor": "iFan", "clickcount":1023,
                                        "category": "Today", "categoryid":1000,
                                        "tags": [
                                            { "tagid":10000, "name":"computer" },
                                            { "tagid":10001, "name":"videocard" }
                                        ]
                                    }*/
                                ]
                                }
                            ]
                            },
                            {layoutcontainerclass:"span3", layoutcontainerid:1001, blocks:[] }
                        ]
                    },

                    { siteid:1, pagename:'Article', pageid:103, pagetype:11, pagetitle:"article", pageurl:"article", pageorder:0, pagelayoutid:10, pagelayoutdata:[] }
                ],

                headerdata:[],

                footerdata:[
                    /*{footerid:1,footername:'foot1',footertype:'local',linkedurl:'',linkedpageid:101,linkedpagename:'Homepage'},
                     {footerid:2,footername:'foot2',footertype:'other',linkedurl:'http://www.1.com',linkedpageid:0,linkedpagename:''}*/
                ],

                headertheme:[
                    {headerthemeid:1,name:'black',css:'theme_01', image:'app/img/header_theme_01.jpg'},
                    {headerthemeid:2,name:'red',css:'theme_02', image:'app/img/header_theme_02.jpg'},
                    {headerthemeid:3,name:'blue',css:'theme_03', image:'app/img/header_theme_03.jpg' },
                    {headerthemeid:3,name:'blue',css:'theme_04', image:'app/img/header_theme_04.jpg'}
                ],

                defaultsettings:{
                    defaulstSelectedPageIndex : 1,
                    defaulstSelectedLayoutIndex : 0,
                    articleTypeId : 11,

                    pagefilterArticleType : {pagetype:1},
                    pagefilterListType : {pagetype:2},
                    layoutfilterListType :{layouttype:0}
                },

                footertheme:[
                    {footerthemeid:1,name:'black',css:'theme_01', image:'app/img/footer_theme_01.jpg'},
                    {footerthemeid:2,name:'red',css:'theme_02', image:'app/img/footer_theme_02.jpg'},
                    {footerthemeid:3,name:'blue',css:'theme_03', image:'app/img/footer_theme_03.jpg' },
                    {footerthemeid:4,name:'green',css:'theme_04', image:'app/img/footer_theme_04.jpg'}
                ]
            };

        }else{
            sitedata = JSON.parse(localStorage.getItem("siteData"));
        }
    }


    var factory = {};
    factory.getSite = function () {
        return  sitedata;
    };

    factory.getPageList = function () {
        _.each(sitedata.pagelist, function(page){
            _.each(page.pagelayoutdata, function(layout){
                _.each(layout.blocks, function(block){
                    block.blockarticles =
                })
            })
        })

        return  sitedata.pagelist;
    };


    factory.addSinglePage = function (pagedata) {
        localStorage.setItem("siteData",JSON.stringify(sitedata));
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
        localStorage.setItem("siteData",JSON.stringify(sitedata));
    };

    factory.addSingleBlockToPage = function (newblock, pagelayout, pagedata) {

        var pageindex = sitedata.pagelist.indexOf(pagedata);
        var layoutindex = sitedata.pagelist[pageindex].pagelayoutdata.indexOf(pagelayout);

        pagelayout.blocks.push(newblock);

        sitedata.pagelist[pageindex].pagelayoutdata[layoutindex] = pagelayout;
        localStorage.setItem("siteData",JSON.stringify(sitedata));
    };

    factory.addArticleToBlock = function (newartcle, block, pagelayout, pagedata) {
        var pageindex = sitedata.pagelist.indexOf(pagedata);
        var layoutindex = sitedata.pagelist[pageindex].pagelayoutdata.indexOf(pagelayout);
        var blockindex = sitedata.pagelist[pageindex].pagelayoutdata[layoutindex].blocks.indexOf(block) ;
        sitedata.pagelist[pageindex].pagelayoutdata[layoutindex].blocks[blockindex].blockarticles.push(newartcle);

    };

    factory.delBlockFromPage = function (block, pagelayout, pagedata) {
        var pageindex = sitedata.pagelist.indexOf(pagedata);
        var layoutindex = sitedata.pagelist[pageindex].pagelayoutdata.indexOf(pagelayout);
        var blockindex = sitedata.pagelist[pageindex].pagelayoutdata[layoutindex].blocks.indexOf(block) ;
        sitedata.pagelist[pageindex].pagelayoutdata[layoutindex].blocks.splice(blockindex, 1);
        localStorage.setItem("siteData",JSON.stringify(sitedata));
    }


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

    //blcoklayout 修改
    factory.getBlockLayout = function () {
        return blocklayout;
    };


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