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
            handler: function () {
                this.parent.doNext();
            }
        }
        ],

        html: [
        ].join("")
    },

    doNext: function() {
        
        var words = Ext.data.StoreManager.getByKey("SpanishWords");
        var i = Math.round(Math.random() * (words.getCount()-1));
        var nextWord = Ext.data.StoreManager.getByKey("SpanishWords").getAt(i).get("word");
        this.updateWord(nextWord);
    },

    updateWord: function(newWord) {
        var s = '<div style="font-size: 72px; text-align: center">' + newWord+ '</div>';
        this.setHtml(s);
    }
});
