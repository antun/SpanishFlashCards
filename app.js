Ext.application({
    name: 'SFC',

    appFolder: 'app',

    controllers: [
        'Flashcards'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'flashcardshow'
                }
            ]
        });
    }
});
