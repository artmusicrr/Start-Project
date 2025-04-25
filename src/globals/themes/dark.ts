import { themeCommons } from './commons';
import { IPropsTheme } from '../types/theme';

export const dark: IPropsTheme = {
  tokens: {
    colors: {
      text: {
        main: '#E8E8F0',
        terciary: '#A3B1E1',
        secondary: '#B0B0C0',
        disabled: '#787890',
        contrast: '#1A1A1A',
      },
      primary_new: {
        base: {
          main: '#1E2A44',
          dark: '#1A1A1A',
          ligth: '#3B4A7A',
          contrast: '#FFFFFF',
        },
        action: {
          main: '#1E2A44',
          hover: '#3B4A7A',
          pressable: '#2A3555',
          disabled: '#787890',
        },
        surface: {
          main: '#3B4A7A',
          hover: '#6A7DB8',
          pressable: '#2A3555',
          disabled: '#787890',
        },
      },
      secondary_new: {
        base: {
          main: '#5A2A3F',
          dark: '#3F1F2D',
          ligth: '#8C4A66',
          contrast: '#E8B7C9',
        },
        action: {
          main: '#5A2A3F',
          hover: '#8C4A66',
          pressable: '#3F1F2D',
          disabled: '#787890',
        },
        surface: {
          main: '#8C4A66',
          hover: '#C17B9A',
          pressable: '#5A2A3F',
          disabled: '#B0B0C0',
        },
      },
      primary: {
        100: '#1E2A44',
        90: '#3B4A7A',
        80: '#6A7DB8',
        70: '#A3B1E1',
      },
      secondary: {
        100: '#FFFFFF',
        90: '#C17B9A',
        80: '#8C4A66',
      },
      terciary: {
        100: '#A3B1E1',
        90: '#6A7DB8',
        80: '#3B4A7A',
        70: '#2A3555',
      },
      feedback: {
        success: {
          base: {
            main: '#388E3C',
            dark: '#26632A',
            ligth: '#81C784',
            contrast: '#1A1A1A',
          },
          action: {
            main: '#388E3C',
            hover: '#4FA053',
            pressable: '#26632A',
            disabled: '#787890',
          },
          surface: {
            main: '#3B4A7A',
            hover: '#6A7DB8',
            pressable: '#2A3555',
            disabled: '#B0B0C0',
          },
        },
        warning: {
          base: {
            main: '#EF6C00',
            dark: '#B35200',
            ligth: '#FFB300',
            contrast: '#1A1A1A',
          },
          action: {
            main: '#EF6C00',
            hover: '#FF8C33',
            pressable: '#B35200',
            disabled: '#787890',
          },
          surface: {
            main: '#8C4A66',
            hover: '#C17B9A',
            pressable: '#5A2A3F',
            disabled: '#B0B0C0',
          },
        },
        error: {
          base: {
            main: '#C62828',
            dark: '#8B1C1C',
            ligth: '#E57373',
            contrast: '#1A1A1A',
          },
          action: {
            main: '#C62828',
            hover: '#D94141',
            pressable: '#8B1C1C',
            disabled: '#787890',
          },
          surface: {
            main: '#8C4A66',
            hover: '#C17B9A',
            pressable: '#5A2A3F',
            disabled: '#B0B0C0',
          },
        },
      },
    },
    commons: { ...themeCommons },
  },
  colors: {
    primary: '#1E2A44',
    secondary: '#5A2A3F',
    terciary: '#A3B1E1',
    success: '#388E3C',
    success_light: '#81C784',
    warning: '#EF6C00',
    attention: '#C62828',
    orange: '#B35200',
    orange_transparent: '#FFB300',
    text: '#E8E8F0',
    blue_dark: '#1E2A44',
    bluish_gray: '#6A7DB8',
    gray_light: '#B0B0C0',
    gray_dark: '#787890',
    ice: '#A3B1E1',
    ice_dark: '#C17B9A',
    gray: '#787890',
    light: '#FFFFFF',
    headerBg: '#1E2A44' /* Azul escuro para o cabeçalho no tema escuro */,
    containerBg: '#323659' /* Azul mais escuro do que o header para os containers */,
    background: '#141928' /* Azul muito escuro para o fundo da página */,
  },
  devices: {
    mobile: {
      sm: 320,
      md: 375,
      lg: 420,
    },
    tablet: {
      sm: 600,
      md: 768,
      lg: 1023,
    },
    desktop: {
      sm: 1024,
      md: 1300,
      lg: 1440,
    },
  },
  sizes: {
    sm: 12,
    md: 14,
    lg: 18,
    he: 15,
  },
};

export default dark;
