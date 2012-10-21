Ext.define("SFCT.view.Flashcard", {
    extend: 'Ext.Container',
    
    xtype: 'flashcardpanel',

    
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        itemId: 'mainScreen',
        title: 'Flashcards',

        layout: 'fit',

        items: [
            {
                xtype: 'container',
                itemId: 'wordContainer',
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'container',
                        itemId: 'wordContainer'
                    }
                ],
                style: 'text-align: center'
            },
            {
                xtype: 'button',
                docked: 'right',
                text: 'Next',
                action: 'next'
            }
        ]
    },

    updateWord: function(newWord) {
        var s = '<div style="font-size: 72px">' + newWord+ '</div>';
        var c = Ext.ComponentQuery.query('#wordContainer')[0];
        c.setHtml(s);
    }
});
