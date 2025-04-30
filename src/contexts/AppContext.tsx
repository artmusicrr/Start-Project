import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AppPreferences, AppContextType } from './types';

// Criando o contexto com um valor inicial
const AppContext = createContext<AppContextType | undefined>(undefined);

// Definindo as props do provider
interface AppProviderProps {
  children: ReactNode;
}

// Criando o Provider que vai encapsular a aplicação
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Estado para as preferências do usuário com persistência
  const [preferences, setPreferences] = useState<AppPreferences>(() => {
    // Tenta recuperar as preferências salvas
    const savedPreferences = localStorage.getItem('appPreferences');

    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        return { fontSize: parsed.fontSize || 'medium' };
      } catch (error) {
        console.error('Erro ao carregar preferências:', error);
      }
    }

    return { fontSize: 'medium' };
  });

  // Função para alterar o tamanho da fonte
  const setFontSize = (size: 'small' | 'medium' | 'large') => {
    setPreferences(prev => {
      const newPreferences = { ...prev, fontSize: size };
      localStorage.setItem('appPreferences', JSON.stringify(newPreferences));
      return newPreferences;
    });
  };

  // Valor que será disponibilizado pelo contexto
  const value = {
    preferences,
    setFontSize,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Hook personalizado para facilitar o uso do contexto
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }

  return context;
};
