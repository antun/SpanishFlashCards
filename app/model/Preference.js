Ext.define('SFCT.model.Preference', {
    extend: 'Ext.data.Model',

    cookieName: 'sfc',
    
    config: {
        fields: [
            {name: 'lang', type: 'string'},
            {name: 'level_k_es', type: 'boolean'},
            {name: 'level_1_es', type: 'boolean'},
            {name: 'level_2_es', type: 'boolean'},
            {name: 'level_k_en', type: 'boolean'},
            {name: 'level_1_en', type: 'boolean'},
            {name: 'level_2_en', type: 'boolean'},
            {name: 'level_3_en', type: 'boolean'}
        ]
    },

    serialize: function() {
        var s = 'lang:' + this.get('lang');
        s += '|level_k_es:' + this.get('level_k_es');
        s += '|level_1_es:' + this.get('level_1_es');
        s += '|level_2_es:' + this.get('level_2_es');
        s += '|level_k_en:' + this.get('level_k_en');
        s += '|level_1_en:' + this.get('level_1_en');
        s += '|level_2_en:' + this.get('level_2_en');
        s += '|level_3_en:' + this.get('level_3_en');
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
                switch (cComponentName) {
                    case 'lang':
                        this.set('lang', cComponentVal);
                    break;
                    case 'level_k_es':
                        this.set('level_k_es', cComponentVal);
                    break;
                    case 'level_1_es':
                        this.set('level_1_es', cComponentVal);
                    break;
                    case 'level_2_es':
                        this.set('level_2_es', cComponentVal);
                    break;
                    /* Backwards-compatibility */
                    case 'level_k':
                        this.set('level_k_es', cComponentVal);
                    break;
                    case 'level_1':
                        this.set('level_1_es', cComponentVal);
                    break;
                    case 'level_2':
                        this.set('level_2_es', cComponentVal);
                    break;
                    /* /Backwards-compatibility */
                    case 'level_k_en':
                        this.set('level_k_en', cComponentVal);
                    break;
                    case 'level_1_en':
                        this.set('level_1_en', cComponentVal);
                    break;
                    case 'level_2_en':
                        this.set('level_2_en', cComponentVal);
                    break;
                    case 'level_3_en':
                        this.set('level_3_en', cComponentVal);
                    break;
                }
            }
        } else {
            // Use defaults
            this.setCookieDefaults();
        }
        // If the cookie string is broken, reset defaults.
        for (var i in this.config.fields) {
            var cookiePart = this.config.fields[i];
            if (this.get(cookiePart["name"]) == null) {
                this.setCookieDefaults();
                break;
            }
        }
    },

    setCookieDefaults: function() {
        this.set('lang', 'spanish');
        this.set('level_k_es', true);
        this.set('level_1_es', false);
        this.set('level_2_es', false);
        this.set('level_k_en', true);
        this.set('level_1_en', false);
        this.set('level_2_en', false);
        this.set('level_3_en', false);
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
