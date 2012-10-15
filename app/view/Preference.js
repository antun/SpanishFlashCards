Ext.define("SFCT.view.Preference", {
    extend: 'Ext.Container',
    
    xtype: 'preferencepanel',
    
    requires: [
        'Ext.TitleBar',
        'Ext.form.FieldSet',
        'Ext.form.Checkbox'
    ],

    config: {
        title: 'Preferences',

        items: [
            {
                title: 'Preferences',
                itemId: 'preferencesScreen',

                styleHtmlContent: true,
                
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Level',

                        items: [
                            {
                                xtype: 'checkboxfield',
                                name: 'level_kCheck',
                                label: 'Kindergarten'

                            },
                            {
                                xtype: 'checkboxfield',
                                name: 'level_1Check',
                                label: 'First Grade'
                            },
                            {
                                xtype: 'checkboxfield',
                                name: 'level_2Check',
                                label: 'Second Grade'
                            }
                        ]
                    }
                ],


                html: [
                ].join("")
            }
        ]
    }
});
