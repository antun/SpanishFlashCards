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
        var fontSize = '72';
        // This will get the div contents: console.log(c.element.dom.firstChild);
        // Very crude fix to avoid long words spilling outside visible area
        if (newWord.length > 7) {
            fontSize = '58';
        }
        var s = '<div style="font-size: '+fontSize+'px">' + newWord+ '</div>';
        var c = Ext.ComponentQuery.query('#wordContainer')[0];
        c.setHtml(s);
    }
});
