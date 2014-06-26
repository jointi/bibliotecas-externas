/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
    var link = baseUrl();
    config.filebrowserBrowseUrl = link+'templates/amanda/assets/js/plugins/ckeditor/ckfinder/ckfinder.html',
    config.filebrowserImageBrowseUrl = link+'templates/amanda/assets/js/plugins/ckeditor/ckfinder/ckfinder.html?type=Images',
    config.filebrowserFlashBrowseUrl = link+'templates/amanda/assets/js/plugins/ckeditor/ckfinder/ckfinder.html?type=Flash',
    config.filebrowserUploadUrl = link+'templates/amanda/assets/js/plugins/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Fil­es',
    config.filebrowserImageUploadUrl = link+'templates/amanda/assets/js/plugins/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Ima­ges',
    config.filebrowserFlashUploadUrl = link+'templates/amanda/assets/js/plugins/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'
	config.extraPlugins = 'youtube';
        //config.extraPlugins = 'oembed';
config.allowedContent = true;

 config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ] },
		{ name: 'colors' },
		{ name: 'about' }
	];

	
};
 	

