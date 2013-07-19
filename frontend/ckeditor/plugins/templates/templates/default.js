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
            image:"template1.gif",
            description:"",
            html:'<div class="globalContBox" style=""><div class="imgGroupColumUL clearfix">'+
                '<li><h6>Health Hazards At The Movies</h6><a href="#" class="linkImg"><img src="app/img/symptomfind/temp_12.jpg" alt="" /></a><p class="linkTxt">Signs and Symptoms Of Early Miscarriage</p></li>'+
                '<li><h6>Getting A Flu Shot</h6><a href="#" class="linkImg"><img src="app/img/symptomfind/temp_13.jpg" alt="" /></a><p class="linkTxt">8 Germ-Filled Things In Your Home That Will Shock You</p></li>'+
                '<li class="last"><h6>Taming Frizzy Hair</h6><a href="#" class="linkImg"><img src="app/img/symptomfind/temp_14.jpg" alt="" /></a><p class="linkTxt">Diabetic Eye Disease: How Diabetes Can Affect Your Vision</p></li>'+
                '</div></div>'
     }]
});