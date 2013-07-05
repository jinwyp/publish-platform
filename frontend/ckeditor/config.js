/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#f00';
    config.removeButtons = 'Source,Save,Preview,About,Maximize';
    config.toolbarGroups = [
        { name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'forms' },
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        { name: 'links' },
        { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
        { name: 'insert' },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'colors' },
        { name: 'others' },
        '/',
        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        { name: 'tools' },
        { name: 'styles' },
        { name: 'texttransform', groups: ['TransformTextToUppercase','TransformTextToLowercase','TransformTextCapitalize','TransformTextSwitcher']}
    ];
    config.extraPlugins='tableresize,autogrow,wysiwygarea,floating-tools,youtube,wordcount,texttransform,zoom,autosave,' +
        'backgrounds,insertpre,uploadcare,onchange';
    config.removePlugins='resize';

    //控制显示youtube视频
    config.allowedContent = true;

    //字符控制设置
    config.wordcount = {

        // Whether or not you want to show the Word Count
        showWordCount: true,

        // Whether or not you want to show the Char Count
        showCharCount: false,

        // Option to limit the characters in the Editor
        charLimit: 'unlimited',

        // Option to limit the words in the Editor
        wordLimit: '500'
    };

    //Uploadcare
    UPLOADCARE_PUBLIC_KEY = "demopublickey"; //set publick key for Uploadcare
    UPLOADCARE_LOCALE = 'ru'; //set locale if you wish
};


