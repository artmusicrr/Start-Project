import { themeCommons } from './commons';
import { IPropsTheme } from '../types/theme';

export const dark: IPropsTheme = {
  tokens: {
    colors: {
      text: {
        main: '#DDE4F0', // Um cinza-azulado claro, suave para os olhos
        terciary: '#A8B5E0', // Azul-roxo claro para elementos terciários
        secondary: '#B8C2E0', // Tom secundário mais claro e harmonioso
        disabled: '#6A748F', // Cinza-azulado mais escuro para desabilitados
        contrast: '#1F2633', // Fundo escuro para contraste
      },
      primary_new: {
        base: {
          main: '#2A3249', // Azul escuro suave
          dark: '#1F2633', // Tom mais escuro para profundidade
          ligth: '#4A567A', // Tom mais claro para variação
          contrast: '#DDE4F0', // Texto claro para contraste
        },
        action: {
          main: '#2A3249',
          hover: '#4A567A',
          pressable: '#1F2633',
          disabled: '#6A748F',
        },
        surface: {
          main: '#3E465F', // Tom de superfície mais claro que o fundo
          hover: '#5A6688',
          pressable: '#2A3249',
          disabled: '#6A748F',
        },
      },
      secondary_new: {
        base: {
          main: '#483A5A', // Roxo escuro suave
          dark: '#322640',
          ligth: '#6A5A82',
          contrast: '#D4CCE8', // Contraste claro para o roxo
        },
        action: {
          main: '#483A5A',
          hover: '#6A5A82',
          pressable: '#322640',
          disabled: '#6A748F',
        },
        surface: {
          main: '#6A5A82',
          hover: '#8E7AA6',
          pressable: '#483A5A',
          disabled: '#B8C2E0',
        },
      },
      primary: {
        100: '#2A3249',
        90: '#4A567A',
        80: '#6E7A9C',
        70: '#A8B5E0',
      },
      secondary: {
        100: '#DDE4F0',
        90: '#8E7AA6',
        80: '#6A5A82',
      },
      terciary: {
        100: '#A8B5E0',
        90: '#6E7A9C',
        80: '#4A567A',
        70: '#2A3249',
      },
      feedback: {
        success: {
          base: {
            main: '#3B8A5A', // Verde escuro suave
            dark: '#2A6140',
            ligth: '#70B38A',
            contrast: '#1F2633',
          },
          action: {
            main: '#3B8A5A',
            hover: '#4FA66F',
            pressable: '#2A6140',
            disabled: '#6A748F',
          },
          surface: {
            main: '#3E465F',
            hover: '#5A6688',
            pressable: '#2A3249',
            disabled: '#B8C2E0',
          },
        },
        warning: {
          base: {
            main: '#D97706', // Laranja escuro suave
            dark: '#A65E04',
            ligth: '#F4A261',
            contrast: '#1F2633',
          },
          action: {
            main: '#D97706',
            hover: '#E68A1F',
            pressable: '#A65E04',
            disabled: '#6A748F',
          },
          surface: {
            main: '#6A5A82',
            hover: '#8E7AA6',
            pressable: '#483A5A',
            disabled: '#B8C2E0',
          },
        },
        error: {
          base: {
            main: '#B34747', // Vermelho escuro suave
            dark: '#8A3232',
            ligth: '#D47B7B',
            contrast: '#1F2633',
          },
          action: {
            main: '#B34747',
            hover: '#C45C5C',
            pressable: '#8A3232',
            disabled: '#6A748F',
          },
          surface: {
            main: '#6A5A82',
            hover: '#8E7AA6',
            pressable: '#483A5A',
            disabled: '#B8C2E0',
          },
        },
      },
    },
    commons: { ...themeCommons },
  },
  colors: {
    primary: '#2A3249',
    secondary: '#483A5A',
    terciary: '#A8B5E0',
    success: '#3B8A5A',
    success_light: '#70B38A',
    warning: '#D97706',
    attention: '#B34747',
    orange: '#A65E04',
    orange_transparent: '#F4A261',
    text: '#DDE4F0',
    blue_dark: '#1F2633',
    bluish_gray: '#6E7A9C',
    gray_light: '#B8C2E0',
    gray_dark: '#6A748F',
    ice: '#A8B5E0',
    ice_dark: '#8E7AA6',
    gray: '#6A748F',
    light: '#DDE4F0',
    headerBg: '#2A3249', // Azul escuro suave para o cabeçalho
    containerBg: '#3E465F', // Um tom mais claro para os containers
    background: '#1F2633', // Fundo escuro, mas não tão próximo do preto
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
