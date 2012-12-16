Ext.define('SFCT.model.Preference', {
    extend: 'Ext.data.Model',

    cookieName: 'sfc',
    
    config: {
        fields: [
            {name: 'lang', type: 'string', default: 'spanish'},
            {name: 'level_k_es', type: 'boolean', default: true},
            {name: 'level_1_es', type: 'boolean', default: false},
            {name: 'level_2_es', type: 'boolean', default: false},
            {name: 'level_k_en', type: 'boolean', default: true},
            {name: 'level_1_en', type: 'boolean', default: false},
            {name: 'level_2_en', type: 'boolean', default: false},
            {name: 'level_3_en', type: 'boolean', default: false}
        ]
    },

    serialize: function() {
        var nameValuePairs = [];
        for (var i in this.config.fields) {
            var fieldName = this.config.fields[i]['name'];
            nameValuePairs.push(fieldName + ':' + this.get(fieldName));
        }
        var s = nameValuePairs.join('|');
        return s;
    },

    save: function () {
        var s = this.serialize();
        var newCookie = this.cookieName + '=' + escape(s) + ';';
        document.cookie = newCookie;
    },

    load: function () {
        var existingCookie = this.findCookieByName(this.cookieName);
        if (existingCookie != -1) {
            var cComponents = existingCookie.split('|');
            for (var i=0; i<cComponents.length; i++) {
                var cComponentName = cComponents[i].split(':')[0].trim();
                var cComponentVal = cComponents[i].split(':')[1].trim();
                this.set(cComponentName, cComponentVal);
            }
        } else {
            // Use defaults
            this.setCookieDefaults();
        }
        // Sanity-check the set cookie.
        for (var i in this.config.fields) {
            var cookiePart = this.config.fields[i];
            if (this.get(cookiePart["name"]) == null) {
                this.setCookieDefaults();
                break;
            }
        }
    },

    setCookieDefaults: function() {
        console.log("resetting defaults");
        for (var i in this.config.fields) {
            var field = this.config.fields[i];
            // {name: 'lang', type: 'string', default: 'spanish'},
            this.set(field['name'], field['default']);
        }
    },

    findCookieByName: function (needle) {
        var cParts = window.document.cookie.split(';');
        var cookie = -1;
        for (var i=0; i<cParts.length; i++) {
            var c = cParts[i];
            var cName = c.split('=')[0].trim();
            if (cName == needle) {
                cookie = unescape(c.split('=')[1].trim());
                break;
            }
        }
        return cookie;
    }

});
