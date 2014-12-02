/**
 * Insere uma imagem do CMS em uma instância do CKEditor.
 */
CKEDITOR.plugins.add('imagemcms', {
    init: function (editor) {

        // Comando
        editor.addCommand('cmdInserirImagem', {
            // Código
            exec: function (editor) {
                abrirImagemRadioCkeditor(editor);
            }
        });

        // Botão "InserirImagem"
        editor.ui.addButton('InserirImagem', {
            icon: this.path + 'icons/imagemcms.png',
            label: 'Inserir Imagem do CMS',
            command: 'cmdInserirImagem',
            toolbar: 'insert'
        });
    }
});
