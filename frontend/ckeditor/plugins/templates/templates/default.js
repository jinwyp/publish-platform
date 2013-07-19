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
             html:'<div class="globalTitle GT_blue clearfix"><div class="arrow"></div><h6>TITLE</h6></div><div class="globalContBox">'+
                 '<div class="UL_layoutbox clearfix"><div class="UL_layoutbox_left"><h6>Additional Information on Lactose Intolerance</h6>'+
                 '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>'+
                 '<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat</p>'+
                 '<h6>Questions to Ask Your Doctor</h6>'+
                 '<ul class="UL_layoutbox_ULColum clearfix">'+
                 '<li><span>1.</span><p>Lorem ipsum dolor sit ame</p></li><li><span>2.</span><p>Lorem ipsum dolor sit amt</p></li>'+
                 '<li><span>3.</span><p>Lorem ipsum dolor sit amt</p></li><li><span>4.</span><p>Lorem ipsum dolor sit amt</p></li>'+
                 '<li><span>5.</span><p>Lorem ipsum dolor sit amt</p></li><li><span>6.</span><p>Lorem ipsum dolor sit amt</p></li>'+
                 '</ul><a href="###" class="btn_PrintQuestions">Print Question Checklist</a></div>'+
                 '<div class="UL_layoutbox_right"><h6>Related Articles on Lactose Intolerance</h6>'+
                 '<ul class="horizontal_UL mini clearfix">'+
                 '<li><div class="leftImg"><a href="###"><img src="app/img/symptomfind/temp_01.jpg" alt="" /></a></div>'+
                 '<div class="rightList"><h6><a href="#">Guidelines For A Lactose Intolerance Diet</a></h6>'+
                 '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam... <a href="###">more</a></p>'+
                 '</div></li><li><div class="leftImg"><a href="###"><img src="app/img/symptomfind/temp_02.jpg" alt="" /></a></div>'+
                 '<div class="rightList"><h6><a href="#">Non-Dairy Milk Substitutes</a></h6>'+
                 '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam... <a href="###">more</a></p>'+
                 '</div></li><li><div class="leftImg"><a href="###"><img src="app/img/symptomfind/temp_03.jpg" alt="" /></a></div>'+
                 '<div class="rightList"><h6><a href="#">Organic Soy Milk</a></h6>'+
                 '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam... <a href="###">more</a></p>'+
                 '</div></li><li class="last"><div class="leftImg"><a href="###"><img src="app/img/symptomfind/temp_04.jpg" alt="" /></a></div>'+
                 '<div class="rightList"><h6><a href="#">Wheat Allergies</a></h6>'+
                 '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam... <a href="###">more</a></p>'+
                 '</div></li></ul></div></div></div>'
     },{
         title:'Example 3',
         image:'template3.gif',
         description:"",
         html:'<div class="globalContBox"><div class="ParagraphArticle">'+
             '<div class="quote_largespace"><div class="quoteboard"><div class="icon_topright"></div><div class="icon_bottomleft"></div>'+
             '<div class="quote_board clearfix"><div class="qb_contbox"><h3>What can I eat?</h3>'+
             '<p><b>Eat or drink other foods instead of milk and milk products. </b>ou can substitute soy milk and soy cheese for milk and milk products. You can also use nondairy creamers in your coffee. But keep in mind that nondairy creamers do not contain the same vitamins and minerals as milk, and they may contain more fat than milk contains.</p>'+
             '</div><div class="qb_contbox havedot"><h3>Foods to Avoid</h3><p><b>Broccoli, okra, kale, collards, and turnip greens</b></p>'+
             '<p><b>Canned sardines, tuna, and salmon</b></p><p><b>Calcium-fortified juices and cereals</b></p>'+
             '<p><b>Calcium-fortified soy products such as soy milk, tofu, and soybeans</b></p><p><b>Almonds</b></p>'+
             '</div></div></div></div></div></div>'
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
     },{
         title:'Example 9',
         image:'template1.gif',
         description:'',
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
         title:'Example 10',
         image:'template2.gif',
         description:'',
         html:'<div class="globalContBox" style=""><div class="imgGroupColumUL clearfix">'+
             '<li><h6>Health Hazards At The Movies</h6><a href="#" class="linkImg"><img src="app/img/symptomfind/temp_12.jpg" alt="" /></a><p class="linkTxt">Signs and Symptoms Of Early Miscarriage</p></li>'+
             '<li><h6>Getting A Flu Shot</h6><a href="#" class="linkImg"><img src="app/img/symptomfind/temp_13.jpg" alt="" /></a><p class="linkTxt">8 Germ-Filled Things In Your Home That Will Shock You</p></li>'+
             '<li class="last"><h6>Taming Frizzy Hair</h6><a href="#" class="linkImg"><img src="app/img/symptomfind/temp_14.jpg" alt="" /></a><p class="linkTxt">Diabetic Eye Disease: How Diabetes Can Affect Your Vision</p></li>'+
             '</div></div>'
     }]
});