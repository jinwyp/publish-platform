/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.addTemplates("default",{
     imagesPath:CKEDITOR.getUrl(CKEDITOR.plugins.getPath("templates")+"templates/images/"),
     templates:[{
<<<<<<< HEAD
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
=======
         title:'Example 1',
         image:'template1.gif',
         description:'',
         html:'<div class="globalContBox"><div class="ParagraphArticle">'+
             '<h6 class="redTitle">Lactose intolerance is the inability to digest lactose, a sugar found in milk and dairy products. </h6>'+
             '<p class="left_20">While most people begin life digesting lactose just fine, about 75 percent of the world’s population goes on to lose this ability during maturation and adulthood. Although there is no cure for lactose intolerance, it can be effectively managed by minimizing lactose in the diet to a tolerable level. </p>'+
             '<div class="subTitle"><h6>TITLE</h6></div>'+
             '<p>Symptoms of lactose intolerance can occur 30 minutes to 2 hours after consuming lactose. The severity of the symptoms depends on how much lactose was ingested and how much lactose a person can handle. Common symptoms of lactose intolerance include:</p>'+
             '<ul class="ParagraphArticle_Global_UL">'+
             '<li>Abdominal pain</li>'+
             '<li>Bloating</li>'+
             '<li>Flatulence</li>'+
             '<li>Diarrhea</li>'+
             '<li>Nausea</li></ul></div></div>'
     },{
         title:'Example 2',
         image:'template2.gif',
         description:'',
         html:'<div class="globalContBox"><div class="ParagraphArticle">'+
             '<div class="subTitle"><h6>TITLE</h6></div>'+
             '<p>Symptoms of lactose intolerance can occur 30 minutes to 2 hours after consuming lactose. The severity of the symptoms depends on how much lactose was ingested and how much lactose a person can handle. Common symptoms of lactose intolerance include:</p>'+
             '<ul class="ParagraphArticle_Global_ULCir"><li><p><b>Age</b></p>'+
             '<p>Most babies and infants produce ample amounts of lactase. After 2 to 12 years of age, at least two distinct groups of people start to emerge: those who continue to produce lactase actively, and those who do not, resulting in lactose intolerance. Even in those who</p></li>'+
             '<li><p><b>Genetics</b></p>'+
             '<p>In addition to the genetics of the common form of lactose intolerance due to inadequate lactase production, a complete deficiency of lactase can be inherited from your parents. This disorder is autosomal recessive, which means that both parents must pass on a mutated form of the lactase encoding gene. Infants with congenital lactose intolerance are unable to tolerate lactose found in breast milk. Therefore, these babies must be fed lactose-free infant formulas.</p></li>'+
             '<li><p><b>Illness or injury</b></p>'+
             '<p>Illness, surgery or injury to the small intestine can result in the decreased production of lactase. Furthermore, gastrointestinal diseases such as celiac disease, gastroenteritis and Crohn is disease can cause a short-term lactose deficiency and symptoms of lactose intolerance. Resolution or treatment of these underlying disorders may restore lactase levels.</p></li>'+
             '</ul></div></div>'
     }]
>>>>>>> 3420f9c74994b2729ad09b0cfaf595a2871cc1a1
});