/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    var link = baseUrl();

    config.language = 'pt-BR';
    config.filebrowserBrowseUrl = link + 'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/ckfinder.html',
            config.filebrowserImageBrowseUrl = link + 'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/ckfinder.html?type=Imagens',
            config.filebrowserFlashBrowseUrl = link + 'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/ckfinder.html?type=Flash',
            config.filebrowserUploadUrl = link + 'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Arquivos',
            config.filebrowserImageUploadUrl = link + 'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Imagens',
            config.filebrowserFlashUploadUrl = link + 'vendor/jointi/bibliotecas-externas/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash',
            config.extraPlugins = 'youtube', 'justify';
    config.allowedContent = true;
    config.extraPlugins = 'timestamp';

    config.toolbar = [
        {name: 'document', groups: ['mode', 'document', 'doctools'], items: ['Source']},
        {name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']},
        {name: 'editing', groups: ['find', 'selection', 'spellchecker'], items: ['Find', 'Replace', '-', 'SelectAll']},
        '/',
        {name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']},
        {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
        {name: 'links', items: ['Link', 'Unlink']},
        {name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar', 'Iframe']},
        '/',
        {name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize']},
        {name: 'colors', items: ['TextColor', 'BGColor']},
        {name: 'tools', items: ['Maximize', 'ShowBlocks', 'Timestamp']}
    ];

    // Use the classes 'AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify'
    config.justifyClasses = ['AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify'];
};
