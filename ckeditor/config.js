/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    var link = baseUrl();

    config.filebrowserBrowseUrl = link+'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/ckfinder.html',
    config.filebrowserImageBrowseUrl = link+'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/ckfinder.html?type=Imagens',
    config.filebrowserFlashBrowseUrl = link+'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/ckfinder.html?type=Flash',
    config.filebrowserUploadUrl = link+'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Arquivos',
    config.filebrowserImageUploadUrl = link+'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Imagens',
    config.filebrowserFlashUploadUrl = link+'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
    config.extraPlugins = 'youtube','justify';
    config.allowedContent = true;
    // config.extraPlugins = 'oembed';

    config.toolbarGroups = [
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
        { name: 'links' },
        { name: 'insert' },
        { name: 'forms' },
        { name: 'tools' },
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'others' },
        '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align'] },
        { name: 'colors' },
        { name: 'about' }
    ];

    // Use the classes 'AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify'
    config.justifyClasses = [ 'AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify' ];
};
