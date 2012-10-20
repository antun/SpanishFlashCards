Ext.define('SFCT.model.Word', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'word', type: 'auto'},
            {name: 'english', type: 'auto'}
        ]
    }
});