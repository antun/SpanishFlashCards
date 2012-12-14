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
        if (prefModel.get('lang') == 'spanish') {
            if (prefModel.get('level_k_es')) {
                allWords = allWords.concat(Ext.data.StoreManager.getByKey("SpanishWordsK").getRange());
            }
            if (prefModel.get('level_1_es')) {
                allWords = allWords.concat(Ext.data.StoreManager.getByKey("SpanishWordsFirst").getRange());
            }
            if (prefModel.get('level_2_es')) {
                allWords = allWords.concat(Ext.data.StoreManager.getByKey("SpanishWordsSecond").getRange());
            }
        } else if (prefModel.get('lang') == 'english') {
            if (prefModel.get('level_k_en')) {
                allWords = allWords.concat(Ext.data.StoreManager.getByKey("EnglishWordsK").getRange());
            }
            if (prefModel.get('level_1_en')) {
                allWords = allWords.concat(Ext.data.StoreManager.getByKey("EnglishWordsFirst").getRange());
            }
            if (prefModel.get('level_2_en')) {
                allWords = allWords.concat(Ext.data.StoreManager.getByKey("EnglishWordsSecond").getRange());
            }
            if (prefModel.get('level_3_en')) {
                allWords = allWords.concat(Ext.data.StoreManager.getByKey("EnglishWordsThird").getRange());
            }
        }
        var i = Math.round(Math.random() * (allWords.length-1));

        var nextWord = allWords[i].get("word");
        this.getFlashcardsView().updateWord(nextWord);
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.doNext();        
    }
});
