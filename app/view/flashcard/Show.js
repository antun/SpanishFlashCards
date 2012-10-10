Ext.define('SFC.view.flashcard.Show' ,{
    extend: 'Ext.container.Container',
    alias : 'widget.flashcardshow',

    layout: 'fit',

    title : 'Flashcard TODO',

    store: 'SpanishWords',

    items : [
        {
            itemId: 'flashWord',
            xtype: 'panel',
            layout: 'fit',
            title: 'Spanish Flashcards for Atticus',
            html: '<div style="display: table-cell; vertical-align: middle;">palabra</div>',
            bodyStyle: 'text-align: center; display: table;  font-size: 96px; background:#ffc;',
            tools: [
                {
                    xtype: 'button',
                    action: 'next',
                    text: 'Change word',
                    scale: 'large',
                    handler: function() {
                        // WORKS:
                        // var nextWord = Ext.data.StoreManager.getByKey("SpanishWords").getAt(1).get("word");
                        // this.ownerCt.getComponent("flashWord").body.update(nextWord)
                    }
                }
            ]
        }

    ],

    initComponent: function() {
        this.callParent(arguments);
    },

    updateWord: function(newWord) {
        var s = '<div style="display: table-cell; vertical-align: middle;">' + newWord+ '</div>';
        this.getComponent("flashWord").body.update(s);
    }
});
