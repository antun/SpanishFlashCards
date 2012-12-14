Ext.define('SFCT.controller.Preference', {
    extend: 'Ext.app.Controller',

    requires: [
        'SFCT.model.Preference'
    ],

    config: {
        refs: {
            
        },
        control: {
            'preferencepanel selectfield': {
                change: 'handleLanguageChoice'
            },
            'preferencepanel checkboxfield': {
                check: 'handleCheck',
                uncheck: 'handleCheck'
            },
            'preferencepanel': {
                show: 'restorePreferences'
            }
        }
    },

    isDuringSetup: false,
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    handleLanguageChoice: function(x) {
        if (!this.isDuringSetup) {
            this.savePreferences();
            this.restorePreferences();
        }
    },

    handleCheck: function (cbx) {
        if (!this.isDuringSetup) {
            // TODO: Rewrite, since now there will be multiple languages.
            // Make sure at least one is always checked.
            if (!cbx.isChecked()) {
                var allCheckboxes = Ext.ComponentQuery.query('preferencepanel checkboxfield');
                var anyChecked = false;
                for (var i=0; i<allCheckboxes.length; i++) {
                    var c = allCheckboxes[i];
                    if (c.isChecked()) {
                        anyChecked = true;
                        break;
                    }
                }
                if (!anyChecked) {
                    cbx.check(true);
                }
            }
            this.savePreferences();
        }
    },

    savePreferences: function () {
        var prefModel = this.getApplication().prefModel;
        for (var cookieName in this.cookieCheckboxMap) {
            var checkBoxName = this.cookieCheckboxMap[cookieName];
            var isChecked = Ext.ComponentQuery.query('preferencepanel checkboxfield[name="'+checkBoxName+'"]')[0].isChecked();
            prefModel.set(cookieName, isChecked);
        }
        var lang = Ext.ComponentQuery.query('preferencepanel [name="languageSelect"]')[0].getValue();
        prefModel.set('lang', lang);
        prefModel.save();
    },

    cookieCheckboxMap: {
        // TODO: Add isdefault option here.
        'level_k_es' : 'level_k_esCheck',
        'level_1_es' : 'level_1_esCheck',
        'level_2_es' : 'level_2_esCheck',
        'level_k_en' : 'level_k_enCheck',
        'level_1_en' : 'level_1_enCheck',
        'level_2_en' : 'level_2_enCheck',
        'level_3_en' : 'level_3_enCheck'
    },

    getLanguages: function() {
        var languages = Ext.ComponentQuery.query('preferencepanel selectfield[name="languageSelect"]')[0].getOptions();
        return languages;
    },

    restorePreferences: function(obj) {
        this.isDuringSetup = true;
        var prefModel = this.getApplication().prefModel;

        for (var cookieName in this.cookieCheckboxMap) {
            var checkBoxName = this.cookieCheckboxMap[cookieName];
            if (prefModel.get(cookieName) === true) {
                Ext.ComponentQuery.query('preferencepanel checkboxfield[name="'+checkBoxName+'"]')[0].check();
            } else {
                Ext.ComponentQuery.query('preferencepanel checkboxfield[name="'+checkBoxName+'"]')[0].uncheck();
            }
        }

        var languages = this.getLanguages();
        for (var i in languages) {
            var itemId = 'levelSet_' + languages[i]["value"];
            Ext.ComponentQuery.query('preferencepanel [itemId="'+itemId+'"]')[0].hide();
        }
        var currentLanguage = prefModel.get('lang');
        var query = 'preferencepanel [itemId="levelSet_'+currentLanguage+'"]';
        Ext.ComponentQuery.query(query)[0].show();

        var selectBox = Ext.ComponentQuery.query('preferencepanel [name="languageSelect"]')[0];
        selectBox.setValue(currentLanguage);

        this.isDuringSetup = false;
    }
});
