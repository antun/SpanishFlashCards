Ext.define("SFCT.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        tabBarPosition: 'bottom',

        items: [
        {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Atticus\'s Flash Cards'
        },
            {
                xtype: 'flashcardpanel',
                iconCls: 'star'
            },
            {
                xtype: 'preferencepanel',
                iconCls: 'settings'
            },
            {
                xtype: 'aboutpanel',
                iconCls: 'info'
            }
        ]
    }
});
