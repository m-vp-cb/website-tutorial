CKEDITOR.plugins.add( 'cld', {
    icons: 'cld',
    init: function( editor ) {

        editor.addCommand( 'cld', new CKEDITOR.dialogCommand( 'cldDialog' ) );
        editor.ui.addButton( 'Cld', {
            label: 'Insert cloudinary image',
            command: 'cld',
            toolbar: 'insert'
        });
		CKEDITOR.dialog.addIframe( 'cldDialog','Media Manager',this.path + 'cld.html',800,600, function() {
            iframeid=this._.frameId;/*get the iframe*/
        },
        {   
            onOk : function()// Dialog onOk callback.
            {
                var ifrm = document.getElementById(iframeid);
                var doc = ifrm.contentDocument;
                var payload=doc.getElementById('image-info').value;
                var imginfo=doc.getElementById('cld-img').outerHTML;
                console.log(payload);
                console.log(imginfo);
                this._.editor.insertHtml(imginfo);
            },
        } );
    }
});