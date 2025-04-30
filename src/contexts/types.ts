import { ReactNode } from 'react';

type ThemeMode = 'light' | 'dark';

export interface AppPreferences {
  fontSize: 'small' | 'medium' | 'large';
}

// Definindo o tipo para o contexto
export interface AppContextType {
  preferences: AppPreferences;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
}

export interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
