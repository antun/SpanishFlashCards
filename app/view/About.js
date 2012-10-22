Ext.define("SFCT.view.About", {
    extend: 'Ext.Container',
    
    xtype: 'aboutpanel',
    
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        title: 'About',
        styleHtmlContent: true,
        scrollable: true,

        html: [
            '<p>This app was created to help my son with his Spanish reading. He is in a Spanish immersion program at our local school in San Francisco.</p>',
            '<p>Questions, comments, problems or requests? <a href="http://www.antunkarlovac.com/" target="_blank">Contact me</a>.</p>',
            '<p>Source code is available on <a href="https://github.com/antun/SpanishFlashCards" target="_blank">GitHub</a>.</p>',
            '<p>If you find this useful, please consider donating to our  wonderful school, <a href="http://danielwebster-sf.com/" target="_blank">Daniel Webster Elementary</a>, via the link below:</p>',
            '<div align="center"><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"> <input name="cmd" type="hidden" value="_s-xclick" /> <input name="hosted_button_id" type="hidden" value="Z37ZU8XN6UDK4" /> <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" type="image" /> <img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" border="0" alt="" width="1" height="1" /> </form></div>',
            '<p>Donations go straight to the PTA, not me.</p>'
        ].join('')
    }
});
