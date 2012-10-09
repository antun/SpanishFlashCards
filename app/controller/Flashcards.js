Ext.define('SFC.controller.Flashcards', {
    extend: 'Ext.app.Controller',

    views: [
        'flashcard.Show'
    ],

    stores: [
        'SpanishWords'
    ],

    init: function() {
        console.log('Initialized Flashcards! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'button[action=next]': {
                click: this.doNextWord
            },
            'panel': {
                tap: this.doNextWord
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },

    doNextWord: function() {
        var words = Ext.data.StoreManager.getByKey("SpanishWords");
        var i = Math.round(Math.random() * (words.getCount()-1));
        var nextWord = '<div style="display: table-cell; vertical-align: middle;">' + Ext.data.StoreManager.getByKey("SpanishWords").getAt(i).get("word") + '</div>';

        Ext.ComponentQuery.query("#flashWord")[0].body.update(nextWord);
    }

});
