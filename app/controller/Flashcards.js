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
            'button[action=next]': {
                click: this.doNextWord,
                render: this.doNextWord
            }
        });
    },

    doNextWord: function(button) {
        var words = Ext.data.StoreManager.getByKey("SpanishWords");
        var i = Math.round(Math.random() * (words.getCount()-1));
        var nextWord = Ext.data.StoreManager.getByKey("SpanishWords").getAt(i).get("word");
        // Ext.ComponentQuery.query("#flashWord")[0].body.update(nextWord);
        var v = button.up('flashcardshow');
        v.updateWord(nextWord);
        /*
        var b = Ext.ComponentQuery.query("#nextButton")[0];
        console.log(b);
        */
    }

});
