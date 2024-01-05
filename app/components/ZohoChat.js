'use client'
import React, { useEffect } from 'react';

function ZohoChat() {
  useEffect(() => {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      widgetcode: "siq6e8889663ec033c6bb111609546973337343aff15691605a1605dfcccad1a465",
      values: {},
      ready: function () {},
    };

    const d = document;
    let s;
    s = d.createElement('script');
    s.type = 'text/javascript';
    s.id = 'zsiqscript';
    s.defer = true;
    // Update the script URL to the latest version
    s.src = 'https://salesiq.zoho.com/widget';

    let t;
    t = d.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);

    // Implement the ready function to initialize the widget
    window.$zoho.salesiq.ready = function () {
      console.log('Zoho Sales IQ is ready!');
      // Additional initialization code if needed
    };
  }, []);

  return (
    <React.Fragment>
      <div id='zsiqwidget'></div>
    </React.Fragment>
  );
}

export default ZohoChat;
