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


    /* articlelist = [
     {  "id": 1000, "title": "???? multiple partial views in angularjs111.", "contentbody": "<b>111111</b>", "status": "needreview",
     "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",  "author": "Eric",  "editor": "iFan", "clickcount":1023, "category": "Today", "categoryid":1000,
     "tags": [
     { "tagid":10000, "tagname":"computer" },
     { "tagid":10001, "tagname":"videocard" }
     ],
     "revision" : [
     {
     "versionid" :  1 ,
     "versionnum" :  1 ,
     "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
     "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
     "author": "Eric",  "editor": "iFan", "clickcount":1023,
     "category": "Today", "categoryid":1000,
     "tags": []
     },
     {
     "versionid" :  2 ,
     "versionnum" :  2 ,
     "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
     "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
     "author": "Eric",  "editor": "iFan", "clickcount":1023,
     "category": "Today", "categoryid":1000,
     "tags": [
     { "tagid":10000, "tagname":"computer" },
     { "tagid":10001, "tagname":"videocard" }
     ]
     }
     ]
     },

     {  "id": 1001, "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
     "created": "1370361600000", "updated": "1370361600000", "published": "1370361600000",  "author": "Eric",  "editor": "iFan", "clickcount":13, "category": "Today", "categoryid":1000,
     "tags": [],
     "revision" : [
     {
     "versionid" :  1 ,
     "versionnum" :  1 ,
     "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
     "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
     "author": "Eric",  "editor": "iFan", "clickcount":1023,
     "category": "Today", "categoryid":1000,
     "tags": [
     { "tagid":10000, "tagname":"computer" },
     { "tagid":10001, "tagname":"videocard" }
     ]
     },
     {
     "versionid" :  2 ,
     "versionnum" :  2 ,
     "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
     "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
     "author": "Eric",  "editor": "iFan", "clickcount":1023,
     "category": "Today", "categoryid":1000,
     "tags": [
     { "tagid":10000, "tagname":"computer" },
     { "tagid":10001, "tagname":"videocard" }
     ]
     }
     ]
     },

     {  "id": 1002, "title": "?????? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
     "created": "1370188800000", "updated": "1370361600000", "published": "1370188800000",  "author": "Eric",  "editor": "iFan",  "clickcount":975, "category": "Today", "categoryid":1000,
     "tags": [],
     "revision" : [
     {
     "versionid" :  1 ,
     "versionnum" :  1 ,
     "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
     "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
     "author": "Eric",  "editor": "iFan", "clickcount":1023,
     "category": "Today", "categoryid":1000,
     "tags": [
     { "tagid":10000, "tagname":"computer" },
     { "tagid":10001, "tagname":"videocard" }
     ]
     },
     {
     "versionid" :  2 ,
     "versionnum" :  2 ,
     "title": "???? multiple partial views in angularjs.", "contentbody": "", "status": "needreview",
     "created": "1370707200000", "updated": "1370707200000", "published": "1370707200000",
     "author": "Eric",  "editor": "iFan", "clickcount":1023,
     "category": "Today", "categoryid":1000,
     "tags": [
     { "tagid":10000, "tagname":"computer" },
     { "tagid":10001, "tagname":"videocard" }
     ]
     }
     ]
     }
     ];

     */
    var articlelist = [];

    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("articlesData")) == null || JSON.parse(localStorage.getItem("articlesData")).length == 0){
            articlelist = [];
        }else{
            articlelist = JSON.parse(localStorage.getItem("articlesData"));
        }
    }

    var factory = {};

    factory.getArticlesByTags = function (taglistdata, quantity, blockcategory) {
        var articlesresultfinal = [];
        var articlesresult = [];
        var articlesresult2 = [];

        articlesresult = _.filter(articlelist, function(aritcle){

            var singlearticletags = _.filter(aritcle.tags, function(singletag){
                var tagresult = _.where(taglistdata, {tagname: singletag.tagname});

                return tagresult.length;
            });

            return  singlearticletags.length;
        });

        articlesresult2 = _.filter(articlelist, function(element1){

            if (element1.category.toString() == blockcategory){
//                console.log(blockcategory, element1.category);
                return true
            }
        });

        articlesresultfinal = _.union(articlesresult, articlesresult2)

        if(articlesresultfinal.length > quantity){
            articlesresultfinal.splice(0, articlesresultfinal.length - quantity);    //判断文章数量
        }
        return articlesresultfinal;
    };


    factory.getArticleList = function (quantity) {
        var articlesresult2 = _.clone(articlelist);

        if(articlesresult2.length > quantity){
            articlesresult2.splice(0, articlesresult2.length - quantity);    //判断文章数量
        }

        return articlesresult2;
    };

    factory.getArticleById = function (articleid) {
        for(var i = 0;i < articlelist.length; i++){
            if (articlelist[i].id == articleid) {
                return articlelist[i];
            }
        }
    };

    factory.getMaxArticleID = function () {
        var articlemaxid;
        if(articlelist.length==0){
            articlemaxid=1001;
        }else{
            articlemaxid = articlelist[0].id + 1;
        }
        return articlemaxid;
    };

    factory.saveArticle = function (articledata) {
        for(var i = articlelist.length; i--;){
            if (articlelist[i].id == articledata.id) {
                articlelist[i] = articledata;
                localStorage.setItem("articlesData",JSON.stringify(articlelist));
                return ;
            }
        }
    };

    factory.delArticleById = function (articleid) {
        for(var i = articlelist.length; i--;){
            if (articlelist[i].id == articleid) {
                articlelist.splice(i, 1);
                localStorage.setItem("articlesData",JSON.stringify(articlelist));
                return;
            }
        }
    };

    factory.createNewArticle = function (articledata) {
        articlelist.push(articledata);
        localStorage.setItem("articlesData",JSON.stringify(articlelist));
        return ;
    };

    factory.getDateNow = function () {
        var newdate = new Date().getTime();
        return newdate;
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

    factory.getTagList = function () {
        return taglist;
    };

    factory.getMaxTagID = function () {
        //factory.getTagList();
        var tagmaxid;
        try{
            if(taglist.length==0){
                tagmaxid=10001;
            }else{
                tagmaxid = taglist[taglist.length-1].tagid + 1;
            }
        }catch(e){
            tagmaxid=10001;
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





vcpapp.factory('modelSite',  function(){

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
    var selectheadertheme='';
    var  selectfootertheme='';
    if(window.localStorage){
        if (JSON.parse(localStorage.getItem("siteData")) == null || JSON.parse(localStorage.getItem("siteData")).length == 0){
            sitedata = {
                userinfo : {},
                siteinfo : {},

                pagelist : [
                    { siteid:1, pagename:'Homepage', pageid:101, pagetype:10, pagetitle:"Homepage", pageurl:"homepage",  pageorder:1, pagelayoutid:10,
                        pagelayoutdata:[
                            {layoutcontainerclass:"span9", layoutcontainerid:1000 , blocks:[
                                /*{blockid:100, blocktype:'auto', blockstatictype:'', blockname:"Today hot",blocklayout:10, blockquantity:4, blocktag:[], blockcategory:[], blocksortby:'date' , blockarticles:[
                                ]
                                }*/
                            ]
                            },
                            {layoutcontainerclass:"span3", layoutcontainerid:1001, blocks:[] }
                        ]
                    },

                    { siteid:1, pagename:'Article', pageid:103, pagetype:11, pagetitle:"article", pageurl:"article", pageorder:0, pagelayoutid:10, pagelayoutdata:[] }
                ],

                headerdata:[],

                footerdata:[],

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
        if(JSON.parse(localStorage.getItem("headertheme")) == null || JSON.parse(localStorage.getItem("headertheme")).length == 0){
            selectheadertheme ='';
        }else{
            selectheadertheme = JSON.parse(localStorage.getItem("headertheme"));
        }
        if(JSON.parse(localStorage.getItem("footertheme")) == null || JSON.parse(localStorage.getItem("footertheme")).length == 0){
            selectfootertheme ='';
        }else{
            selectfootertheme = JSON.parse(localStorage.getItem("footertheme"));
        }
    }



    var factory = {};

    factory.getSite = function () {
        return  sitedata;
    };
    factory.updateSite= function(sitedata1){
        localStorage.setItem("siteData",JSON.stringify(sitedata1));
        return;
    };
    factory.saveSiteInfo= function(sitedata){
        sitedata.siteinfo =  angular.copy(sitedata);
        localStorage.setItem("siteData",JSON.stringify(sitedata));
        return;
    };

    factory.saveUserInfo= function(userdata){
        sitedata.userinfo =  userdata;
        localStorage.setItem("siteData",JSON.stringify(sitedata));
        return;
    };


    factory.addSinglePage = function (pagedata) {
        localStorage.setItem("siteData",JSON.stringify(sitedata));
        return  sitedata.pagelist.push(pagedata);
    };

    factory.updateSinglePage= function(pagedata){
        localStorage.setItem("siteData",JSON.stringify(sitedata));
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

/*    factory.updateBlockArticles = function (block, pagelayout, pagedata, blockarticles) {
        var pageindex = sitedata.pagelist.indexOf(pagedata);
        var layoutindex = sitedata.pagelist[pageindex].pagelayoutdata.indexOf(pagelayout);
        var blockindex =  pagelayout.blocks.indexOf(block);
        pagelayout.blocks[blockindex].blockarticles = blockarticles;

        sitedata.pagelist[pageindex].pagelayoutdata[layoutindex] = pagelayout;
        localStorage.setItem("siteData",JSON.stringify(sitedata));

        console.log(pagelayout.blocks[blockindex].blockarticles);
    };*/

    factory.addArticleToBlock = function (newartcle, block, pagelayout, pagedata) {
        var pageindex = sitedata.pagelist.indexOf(pagedata);
        var layoutindex = sitedata.pagelist[pageindex].pagelayoutdata.indexOf(pagelayout);
        console.log(pageindex, layoutindex, block)
        var blockindex = sitedata.pagelist[pageindex].pagelayoutdata[layoutindex].blocks.indexOf(block) ;

        sitedata.pagelist[pageindex].pagelayoutdata[layoutindex].blocks[blockindex].blockarticles.push(newartcle);
        localStorage.setItem("siteData",JSON.stringify(sitedata));

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
        localStorage.setItem("siteData",JSON.stringify(sitedata));
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
        sitedata.headerdata.push(menudata);
        localStorage.setItem("siteData",JSON.stringify(sitedata));
        return;
    };

    factory.addHeaderChildMenu = function (menuindex,childmenudata) {
        sitedata.headerdata[menuindex].childdata.push(childmenudata);
        localStorage.setItem("siteData",JSON.stringify(sitedata));
        return;
    };

    factory.editHeaderMenu = function (pagedata) {
        sitedata.headerdata.push(pagedata);
        localStorage.setItem("siteData",JSON.stringify(sitedata));
        return;
    };

    factory.editHeaderChildMenu = function (id,pagedata) {
        sitedata.headerdata[id].childdata.push(pagedata);
        localStorage.setItem("siteData",JSON.stringify(sitedata));
        return;
    };

    factory.getfoottheme=function(){
        return sitedata.footertheme;
    };

    factory.getfooter=function(){
        return sitedata.footerdata;
    };

    factory.addfooterMenu = function (menudata) {
        sitedata.footerdata.push(menudata);
        localStorage.setItem("siteData",JSON.stringify(sitedata));
        return;
    };

    factory.savesitedata = function(menudata){
        localStorage.setItem("siteData",JSON.stringify(menudata));
        return;
    }

    factory.setheadertheme = function(headertheme){
        localStorage.setItem("headertheme" , JSON.stringify(headertheme));
    }

    factory.setfootertheme = function(footertheme){
        localStorage.setItem("footertheme" , JSON.stringify(footertheme));
    }

    factory.getselectheadertheme = function(){
        return selectheadertheme;
    }

    factory.getselectfootertheme = function(){
        return selectfootertheme;
    }


    return factory;
}
);