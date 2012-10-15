Ext.define('SFCT.model.Preference', {
    extend: 'Ext.data.Model',

    cookieName: 'sfc',
    
    config: {
        fields: [
            {name: 'lang', type: 'string'},
            {name: 'level_k', type: 'boolean'},
            {name: 'level_1', type: 'boolean'},
            {name: 'level_2', type: 'boolean'}
        ]
    },

    serialize: function() {
        var s = "lang:spanish";
        s += '|level_k:' + this.get('level_k');
        s += '|level_1:' + this.get('level_1');
        s += '|level_2:' + this.get('level_2');
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
                    case 'level_k':
                        this.set('level_k', cComponentVal);
                    break;
                    case 'level_1':
                        this.set('level_1', cComponentVal);
                    break;
                    case 'level_2':
                        this.set('level_2', cComponentVal);
                    break;
                }
            }
        } else {
            // Use defaults
            this.set('lang', 'spanish');
            this.set('level_k', true);
            this.set('level_1', false);
            this.set('level_2', false);
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
