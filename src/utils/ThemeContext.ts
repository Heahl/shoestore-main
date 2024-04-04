import { createContext, type Dispatch, type SetStateAction } from 'react';

interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    setTheme: () => {
      throw new Error('setTheme function has not been initialized');
    },
  });