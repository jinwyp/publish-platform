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
        { name: 'styles' }
    ];
    config.extraPlugins='tableresize,autogrow,wysiwygarea';
    config.removePlugins='resize';
    config.fullPage=true;
    config.allowedContent=false;



    //fullPage: true,
      //  allowedContent: true,
      //  extraPlugins: 'wysiwygarea'
};
