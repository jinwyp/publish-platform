/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.addTemplates("default",{
     imagesPath:CKEDITOR.getUrl(CKEDITOR.plugins.getPath("templates")+"templates/images/"),
     templates:[{
                 title:"Image and Title",
                 image:"template1.gif",
                 description:"One main image with a title and text that surround the image.",
                 html:'<h3><img style="margin-right: 10px" height="100" width="100" align="left"/>Type the title here</h3><p>Type the text here</p>'
                },
                {
                    title:"Strange Template",
                    image:"template2.gif",
                    description:"A template that defines two colums, each one with a title, and some text.",
                    html:'<table cellspacing="0" cellpadding="0" style="width:100%" border="0"><tr><td style="width:50%"><h3>Title 1</h3></td><td></td><td style="width:50%"><h3>Title 2</h3></td></tr><tr><td>Text 1</td><td></td><td>Text 2</td></tr></table><p>More text goes here.</p>'
                },
                 {
                     title:"Custom template",
                     image:"template4.gif",
                     description:"add a new template",
                     html:'<div class="ckeditor_templete_01">'+
					 	  '<h6>Financial Careers According To Hollywood</h6>'+
						  '<p>Find out if classic films about Wall Street reflect what it is actually like to work there.</p>'+
						  '<p>Experience and hard work go a long way toward securing a position in this challenging field.</p>'+
						  '<p>For Siemens to produce value, it all comes down to better operating margins and cash flow.</p>'+
						  '<p>Genworth is looking at serious pressure from competition</p>'+
						  '<p>Hartford is transformation is going better than expected, and the shares could still be cheap.</p>'+
						  '</div>'
                 },
                {
                    title:"Text and Table",
                    image:"template3.gif",
                    description:"A title with some text and a table.",
                    html:'<div style="width: 80%"><h3>Title goes here</h3><table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1"><caption style="border:solid 1px black"><strong>Table title</strong></caption><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table><p>Type the text here</p></div>'
                }]
});