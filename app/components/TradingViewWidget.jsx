"use client"
import { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "description": "",
          "proName": "FX:GBPJPY"
        },
        {
          "description": "",
          "proName": "BITSTAMP:ETHUSD"
        },
        {
          "description": "",
          "proName": "BINANCE:XRPUSD"
        },
        {
          "description": "",
          "proName": "CRYPTOCAP:XRP"
        },
        {
          "description": "",
          "proName": "OANDA:GBPUSD"
        },
        {
          "description": "",
          "proName": "OANDA:EURNZD"
        },
        {
          "description": "",
          "proName": "BIST:XAUUSD1!"
        },
        {
          "description": "",
          "proName": "TVC:USOIL"
        },
        {
          "description": "",
          "proName": "OANDA:USDJPY"
        }
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: true,
      displayMode: "regular",
      locale: "en"
    });
    document.getElementById('tradingview-widget-container').appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container bg-white flex flex-row" id="tradingview-widget-container" ></div>
  );
};

export default TradingViewWidget;
