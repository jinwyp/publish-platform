/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.addTemplates("default",{
     imagesPath:CKEDITOR.getUrl(CKEDITOR.plugins.getPath("templates")+"templates/images/"),
     templates:[{
                    title:"Example 1",
                    image:"template1.gif",
                    description:"",
                    html:'<div class="globalContBox"><div class="imgGroupBox clearfix">'+
                        '<div class="imgGroupBox_Left"><img src="app/img/symptomfind/temp_11.jpg" alt="" /></div>'+
                        '<div class="imgGroupBox_Right"><h6>Simple Cough And Cold Home Remedies</h6>'+
                        '<p>If you are not the type of person who feels inclined to reach into the medicine cabinet at the first sign of a sniffle, you may want to try these simple home remedies for relieving symptoms of a bad cough and the common cold. <a href="#">more</a></p>'+
                        '<p><b>More Articles</b></p><ul class="imgGroupCircleUL clearfix"><li><a href="#">What Is A Punctured Lung?</a></li>'+
                        '<li><a href="#">Taming Frizzy Hair</a></li><li><a href="#">Health Hazards At The Movies</a></li></ul></div></div></div>'
         },{
            title:"Example 2",
            image:"template2.gif",
            description:"",
            html:'<div class="globalContBox" style=""><div class="imgGroupColumUL clearfix">'+
                '<li><h6>Health Hazards At The Movies</h6><a href="#" class="linkImg"><img src="app/img/symptomfind/temp_12.jpg" alt="" /></a><p class="linkTxt">Signs and Symptoms Of Early Miscarriage</p></li>'+
                '<li><h6>Getting A Flu Shot</h6><a href="#" class="linkImg"><img src="app/img/symptomfind/temp_13.jpg" alt="" /></a><p class="linkTxt">8 Germ-Filled Things In Your Home That Will Shock You</p></li>'+
                '<li class="last"><h6>Taming Frizzy Hair</h6><a href="#" class="linkImg"><img src="app/img/symptomfind/temp_14.jpg" alt="" /></a><p class="linkTxt">Diabetic Eye Disease: How Diabetes Can Affect Your Vision</p></li>'+
                '</div></div>'
     },{
         title:'Example 3',
         image:'template3.gif',
         description:"",
         html:'<div class="globalTitle GT_blue clearfix"><div class="arrow"></div><h6 class="blue">Img & Text</h6></div>'+
             '<div class="globalContBox"><ul class="horizontal_UL">'+
             '<li><div class="leftImg"><a href="###"><img src="app/img/symptomfind/temp_06.jpg" alt="" /></a></div>'+
             '<div class="rightList"><h6><a href="#">10 Tips For Surviving A Public Restroom Visit</a></h6>'+
             '<p>The public restroom is a delicate topic of conversation for many people. There are men who cringe at the near mention of a public urinal, while many women refuse to use public restrooms for anything aside from washing their hands. Here...<a href="###">more</a></p>'+
             '</div></li><li><div class="leftImg"><a href="###"><img src="app/img/symptomfind/temp_07.jpg" alt="" /></a></div>'+
             '<div class="rightList">'+
             '<h6><a href="#">Reasons Why Your Eye Keeps Twitching</a></h6>'+
             '<p>Almost everyone has experienced some form of eye spasm, often described as sporadic twitching under or around their eyes. The spasms can vary in strength and speed, commonly occurring around the upper eyelids, but sometimes occurring in... <a href="###">more</a></p>'+
             '</div></li>'+
             '<li><div class="leftImg"><a href="###"><img src="app/img/symptomfind/temp_08.jpg" alt="" /></a></div><div class="rightList">'+
             '<h6><a href="#">Infrared Body Wrap For Reducing Fat And Cellulite</a></h6>'+
             '<p>Many people are claiming they have lasting effects of weight loss, and are a safer alternative to cosmetic surgeries like liposuction for slimming down and eliminating cellulite. But the question still remains: Do these new infrared body...<a href="###">more</a></p>'+
             '</div></li>'+
             '<li><div class="leftImg"><a href="###"><img src="app/img/symptomfind/temp_09.jpg" alt="" /></a></div>'+
             '<div class="rightList"><h6><a href="#">Insulin Injections: A Guide For Diabetes Treatment</a></h6>'+
             '<p>Insulin is a hormone that plays a vital role in the body by regulating the amount of sugar in a person is bloodstream and storing any excess glucose for energy. When a person eats, carbohydrates are broken down into sugar that can be... <a href="###">more</a></p>'+
             '</div></li>'+
             '<li class="last"><div class="leftImg"><a href="###"><img src="app/img/symptomfind/temp_10.jpg" alt="" /></a></div>'+
             '<div class="rightList"><h6><a href="#">What Do Bleeding Gums Mean And How To Fix It</a></h6>'+
             '<p>Bleeding gums can indicate more than just a problem with your oral hygiene habits. If left unchecked, poor dental health can lead to serious complications with your health, especially heart problems. <a href="###">more</a></p>'+
             '</div></li></ul></div>'
     },{
         title:'Example 4',
         image:'template4.gif',
         description:'',
         html:'<div class="globalTitle GT_blue clearfix"><div class="arrow"></div><h6 class="blue">TEXT</h6></div>'+
             '<div class="globalContBox"><ul class="horizontal_UL"><li><div class="rightList">'+
             '<h6><a href="#">10 Tips For Surviving A Public Restroom Visit</a></h6>'+
             '<p>The public restroom is a delicate topic of conversation for many people. There are men who cringe at the near mention of a public urinal, while many women refuse to use public restrooms for anything aside from washing their hands. Here...<a href="###">more</a></p>'+
             '</div></li>'+
             '<li><div class="rightList">'+
             '<h6><a href="#">Reasons Why Your Eye Keeps Twitching</a></h6>'+
             '<p>Almost everyone has experienced some form of eye spasm, often described as sporadic twitching under or around their eyes. The spasms can vary in strength and speed, commonly occurring around the upper eyelids, but sometimes occurring in... <a href="###">more</a></p>'+
             '</div></li>'+
             '<li><div class="rightList">'+
             '<h6><a href="#">Infrared Body Wrap For Reducing Fat And Cellulite</a></h6>'+
             '<p>Many people are claiming they have lasting effects of weight loss, and are a safer alternative to cosmetic surgeries like liposuction for slimming down and eliminating cellulite. But the question still remains: Do these new infrared body...<a href="###">more</a></p>'+
             '</div></li>'+
             '<li><div class="rightList">'+
             '<h6><a href="#">Insulin Injections: A Guide For Diabetes Treatment</a></h6>'+
             '<p>Insulin is a hormone that plays a vital role in the body by regulating the amount of sugar in a person is bloodstream and storing any excess glucose for energy. When a person eats, carbohydrates are broken down into sugar that can be... <a href="###">more</a></p>'+
             '</div></li>'+
             '<li class="last"><div class="rightList">'+
             '<h6><a href="#">What Do Bleeding Gums Mean And How To Fix It</a></h6>'+
             '<p>Bleeding gums can indicate more than just a problem with your oral hygiene habits. If left unchecked, poor dental health can lead to serious complications with your health, especially heart problems. <a href="###">more</a></p>'+
             '</div></li></ul></div>'
     },{
         title:'Example 5',
         image:'template1.gif',
         description:'',
         html:'<div class="globalTitle GT_red clearfix"><div class="arrow"></div><h6>List</h6></div>'+
             '<div class="globalContBox"><ul class="vertical_Row2_UL clearfix">'+
             '<li><h6>Health Hazards At The</h6>'+
             '<p><a href="#">www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p>'+
             '</li><li><h6>Health Hazards At The</h6>'+
             '<p><a href="#">www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p>'+
             '</li><li><h6>Health Hazards At The</h6>'+
             '<p><a href="#">www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p>'+
             '</li><li><h6>Health Hazards At The</h6>'+
             '<p><a href="#">www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p>'+
             '</li><li><h6>Health Hazards At The</h6>'+
             '<p><a href="#">www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p>'+
             '</li><li><h6>Health Hazards At The</h6>'+
             '<p><a href="#">www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p>'+
             '</li></ul></div>'
     },{
         title:'Example 6',
         image:'template2.gif',
         description:'',
         html:'<div class="globalTitle GT_red clearfix"><div class="arrow"></div><h6>List</h6></div>'+
             '<div class="globalContBox"><ul class="vertical_Row3_UL clearfix">'+
             '<li><h6>Health Hazards At The</h6><p><a href="#">http://www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p></li>'+
             '<li><h6>Health Hazards At The</h6><p><a href="#">http://www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p></li>'+
             '<li><h6>Health Hazards At The</h6><p><a href="#">http://www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p></li>'+
             '<li><h6>Health Hazards At The</h6><p><a href="#">http://www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p></li>'+
             '<li><h6>Health Hazards At The</h6><p><a href="#">http://www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p></li>'+
             '<li><h6>Health Hazards At The</h6><p><a href="#">http://www.ncbi.nlm.nih.gov/pubmed/19878587.</a></p></li>'+
             '</ul></div>'
     },{
         title:'Example 7',
         image:'template3.gif',
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
         title:'Example 8',
         image:'template4.gif',
         description:'',
         html:''
     }]
});