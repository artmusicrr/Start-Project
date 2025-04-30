import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from '../globals/themes/light';
import darkTheme from '../globals/themes/dark';
import { ThemeContextType, ThemeProviderProps } from './types';

// Tipos para o tema
type ThemeMode = 'light' | 'dark';

// Criando o contexto com valor inicial undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Estado para o tema com persistência no localStorage
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    // Tenta recuperar o tema salvo
    const savedTheme = localStorage.getItem('theme');

    // Se existir um tema salvo, retorna ele
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme as ThemeMode;
    }

    // Se não existir um tema salvo, verifica preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // Valor padrão
    return 'light';
  });
  // Determina o tema atual com base no modo e adiciona a propriedade isDark necessária
  const currentTheme = {
    ...(themeMode === 'dark' ? darkTheme : lightTheme),
    isDark: themeMode === 'dark',
  };

  // Efeito para aplicar a classe do tema no body
  useEffect(() => {
    document.body.dataset.theme = themeMode;
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  // Função para alternar entre temas
  const toggleTheme = () => {
    setThemeMode(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  // Valor que será disponibilizado pelo contexto
  const value = {
    themeMode,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook personalizado para facilitar o uso do contexto
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }

  return context;
};
