Ext.define('SFCT.controller.Preference', {
    extend: 'Ext.app.Controller',

    requires: [
        'SFCT.model.Preference'
    ],

    config: {
        refs: {
            
        },
        control: {
            'preferencepanel fieldset checkboxfield': {
                check: 'handleCheck',
                uncheck: 'handleCheck'
            },
            'preferencepanel': {
                show: 'restorePreferences'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    handleCheck: function (cbx) {
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
    },

    savePreferences: function () {
        var level_kChecked =  Ext.ComponentQuery.query('preferencepanel checkboxfield[name="level_kCheck"]')[0].isChecked();
        var level_1Checked =  Ext.ComponentQuery.query('preferencepanel checkboxfield[name="level_1Check"]')[0].isChecked();
        var level_2Checked =  Ext.ComponentQuery.query('preferencepanel checkboxfield[name="level_2Check"]')[0].isChecked();
        
        var prefModel = this.getApplication().prefModel;
        prefModel.set('level_k', level_kChecked);
        prefModel.set('level_1', level_1Checked);
        prefModel.set('level_2', level_2Checked);
        prefModel.save();
    },

    restorePreferences: function(obj) {
        var prefModel = this.getApplication().prefModel;
        var level_kChecked =  prefModel.get('level_k');
        var level_1Checked =  prefModel.get('level_1');
        var level_2Checked =  prefModel.get('level_2');
        if (level_kChecked) {
            Ext.ComponentQuery.query('preferencepanel checkboxfield[name="level_kCheck"]')[0].check();
        } else {
            Ext.ComponentQuery.query('preferencepanel checkboxfield[name="level_kCheck"]')[0].uncheck();
        }
        if (level_1Checked) {
            Ext.ComponentQuery.query('preferencepanel checkboxfield[name="level_1Check"]')[0].check();
        } else {
            Ext.ComponentQuery.query('preferencepanel checkboxfield[name="level_1Check"]')[0].uncheck();
        }
        if (level_2Checked) {
            Ext.ComponentQuery.query('preferencepanel checkboxfield[name="level_2Check"]')[0].check();
        } else {
            Ext.ComponentQuery.query('preferencepanel checkboxfield[name="level_2Check"]')[0].uncheck();
        }
    }
});
