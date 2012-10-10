Ext.define('SFC.view.flashcard.Show' ,{
    extend: 'Ext.container.Container',
    alias : 'widget.flashcardshow',

    layout: 'fit',

    title : 'Flashcard TODO',

    store: 'SpanishWords',

    items : [
        {
            itemId: 'wordPanel',
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'center'
            },
            title: 'Spanish Flashcards for Atticus',
            tools: [
                {
                    /*
                    xtype: 'button',
                    action: 'next',
                    text: 'Change word',
                    scale: 'large',
                    handler: function() {
                        // WORKS:
                        // var nextWord = Ext.data.StoreManager.getByKey("SpanishWords").getAt(1).get("word");
                        // this.ownerCt.getComponent("flashWord").body.update(nextWord)
                    }
                    */
                }
            ],
            items: [
                {
                    xtype: 'panel',
                    bodyStyle: 'text-align: center; display: table;  font-size: 96px; background:#ffc;',
                    itemId: 'flashWord',
                    flex: '1',
                    html: ''
                },
                {
                    xtype: 'button',
                    itemId: 'nextButton',
                    action: 'next',
                    text: 'Siguiente palabra'
                }
            ]
        }

    ],

    initComponent: function() {
        this.callParent(arguments);
    },

    updateWord: function(newWord) {
        var s = '<div style="display: table-cell; vertical-align: middle;">' + newWord+ '</div>';
        var o = this.getComponent("wordPanel").getComponent("flashWord");
        o.update(s);
    }
});
