import React, { createContext, useState } from 'react';
import Button from '@components/atoms/Button/Button';
import Form from '@molecules/Form/Form';
import './practice-context-api.css';

export const ThemeContext = createContext('light');

type Theme = 'light' | 'dark';

const PracticeContextAPI = () => {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </Button>
    </>
  );
};

export default PracticeContextAPI;
