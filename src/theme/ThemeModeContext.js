import React from 'react';
import {useState} from 'react';

const {Provider, Consumer} = React.createContext();

export default function ThemeModeProvider() {
  const {themeMode, setThemeMode} = useState('light');

  function toggleDarkMode() {
    setThemeMode((prevMode) => {
      return prevMode === 'light' ? 'dark' : 'light';
    });
  }

  return <Provider value={{themeMode, toggleDarkMode}}></Provider>;
}

export {ThemeModeProvider, Consumer as ThemeModeConsumer};
