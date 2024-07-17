import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { IntlProvider } from 'react-intl'

const RootComponent = () => {
  const [locale, setLocale] = useState('es');
  const [messages, setMessages] = useState({});

  useEffect(() => {
      import(`./lang/${locale}.json`)
          .then((messages) => {
              setMessages(messages.default);
              console.log("el diablo");
          })
          .catch((error) => {
              console.error(`Error loading the language file for ${locale}:`, error);
          });
  }, [locale]);

  return (
      <IntlProvider locale={locale} messages={messages} key={locale}>
          <React.StrictMode>
              <App setLocale={setLocale} locale={locale} />
          </React.StrictMode>
      </IntlProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);