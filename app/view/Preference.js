Ext.define("SFCT.view.Preference", {
    extend: 'Ext.Container',
    
    xtype: 'preferencepanel',
    
    requires: [
        'Ext.TitleBar',
        'Ext.form.FieldSet',
        'Ext.form.Checkbox',
        'Ext.field.Select'
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
                        xtype: 'selectfield',
                        name: 'languageSelect',
                        label: 'Language',
                        options: [
                            {text: 'Spanish',  value: 'spanish'},
                            {text: 'English', value: 'english'}
                        ]
                    },
                    
                    {
                        xtype: 'fieldset',
                        title: 'Level (Spanish)',
                        itemId: 'levelSet_spanish',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                name: 'level_k_esCheck',
                                label: 'Kindergarten'

                            },
                            {
                                xtype: 'checkboxfield',
                                name: 'level_1_esCheck',
                                label: 'First Grade'
                            },
                            {
                                xtype: 'checkboxfield',
                                name: 'level_2_esCheck',
                                label: 'Second Grade'
                            }
                        ]
                    },

                    {
                        xtype: 'fieldset',
                        title: 'Level (English)',
                        itemId: 'levelSet_english',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                name: 'level_k_enCheck',
                                label: 'Kindergarten'

                            },
                            {
                                xtype: 'checkboxfield',
                                name: 'level_1_enCheck',
                                label: 'First Grade'
                            },
                            {
                                xtype: 'checkboxfield',
                                name: 'level_2_enCheck',
                                label: 'Second Grade'
                            },
                            {
                                xtype: 'checkboxfield',
                                name: 'level_3_enCheck',
                                label: 'Third Grade'
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
