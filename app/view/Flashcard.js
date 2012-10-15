Ext.define("SFCT.view.Flashcard", {
    extend: 'Ext.Container',
    
    xtype: 'flashcardpanel',

    
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        itemId: 'mainScreen',
        title: 'Flashcards',

        styleHtmlContent: true,

        items: [
        {
            docked: 'right',
            xtype: 'button',
            text: 'Next',
            action: 'next'
        }
        ],

        html: [
        ].join("")
    },

    updateWord: function(newWord) {
        var s = '<div style="font-size: 72px; text-align: center">' + newWord+ '</div>';
        this.setHtml(s);
    }
});
