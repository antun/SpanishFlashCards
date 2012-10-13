Ext.define("SFCT.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Flashcards',
                iconCls: 'star',
                itemId: 'mainScreen',

                styleHtmlContent: true,

                items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Atticus\'s Spanish Flash Cards'
                },
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
                ].join(""),

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
            }
            /*,
            {
                title: 'Preferences',
                iconCls: 'settings',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
            */
        ]
    }
});
