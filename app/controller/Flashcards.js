Ext.define('SFCT.controller.Flashcards', {
    extend: 'Ext.app.Controller',
    itemId: 'flashcardsController',
    
    config: {
        refs: {
            flashcardsView: '.flashcardpanel'
        },
        control: {
            'button[action=next]': {
                tap: 'doNext'
            }
            
        }
    },
    
    doNext: function(btn) {
        var prefModel = this.getApplication().prefModel;
        var allWords = [];
        if (prefModel.get('level_k')) {
            allWords = allWords.concat(Ext.data.StoreManager.getByKey("SpanishWordsK").getRange());
        }
        if (prefModel.get('level_1')) {
            allWords = allWords.concat(Ext.data.StoreManager.getByKey("SpanishWordsFirst").getRange());
        }
        if (prefModel.get('level_2')) {
            allWords = allWords.concat(Ext.data.StoreManager.getByKey("SpanishWordsSecond").getRange());
        }
        var words = Ext.data.StoreManager.getByKey("SpanishWordsK");
        var i = Math.round(Math.random() * (allWords.length-1));

        var nextWord = allWords[i].get("word");
        this.getFlashcardsView().updateWord(nextWord);
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.doNext();        
    }
});
