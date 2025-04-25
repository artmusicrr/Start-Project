import { themeCommons } from "./commons";
import { IPropsTheme } from "../types/theme";

export const light: IPropsTheme = {
  tokens: {
    colors: {
      text: {
        main: "#1E2A44", // Azul escuro para texto principal
        secondary: "#5A2A3F", // Rosa escuro para texto secundário
        terciary: "#A3B1E1", // Azul claro (para HELP)
        disabled: "#A3B1E1", // Azul claro para texto desabilitado
        contrast: "#F5F5F5", // Fundo claro
      },
      primary_new: {
        base: {
          main: "#3B4A7A", // Azul médio
          dark: "#1E2A44",
          ligth: "#6A7DB8",
          contrast: "#FFFFFF",
        },
        action: {
          main: "#3B4A7A",
          hover: "#6A7DB8",
          pressable: "#2A3555",
          disabled: "#D6DDF2",
        },
        surface: {
          main: "#A3B1E1", // Azul claro
          hover: "#D6DDF2",
          pressable: "#6A7DB8",
          disabled: "#F5F5F5",
        },
      },
      secondary_new: {
        base: {
          main: "#8C4A66", // Rosa médio
          dark: "#5A2A3F",
          ligth: "#C17B9A",
          contrast: "#F5D7E2",
        },
        action: {
          main: "#8C4A66",
          hover: "#C17B9A",
          pressable: "#5A2A3F",
          disabled: "#F5D7E2",
        },
        surface: {
          main: "#C17B9A", // Rosa claro
          hover: "#F5D7E2",
          pressable: "#8C4A66",
          disabled: "#F5F5F5",
        },
      },
      primary: {
        100: "#3B4A7A",
        90: "#6A7DB8",
        80: "#A3B1E1",
        70: "#D6DDF2",
      },
      secondary: {
        100: "#FFFFFF",
        90: "#C17B9A",
        80: "#8C4A66",
      },
      terciary: {
        100: "#A3B1E1",
        90: "#D6DDF2",
        80: "#6A7DB8",
        70: "#3B4A7A",
      },
      feedback: {
        success: {
          base: {
            main: "#81C784",
            dark: "#388E3C",
            ligth: "#C8E6C9",
            contrast: "#1E2A44",
          },
          action: {
            main: "#81C784",
            hover: "#98D39B",
            pressable: "#388E3C",
            disabled: "#D6DDF2",
          },
          surface: {
            main: "#C8E6C9",
            hover: "#A3B1E1",
            pressable: "#81C784",
            disabled: "#F5F5F5",
          },
        },
        warning: {
          base: {
            main: "#FFB300",
            dark: "#EF6C00",
            ligth: "#FFE5B3",
            contrast: "#1E2A44",
          },
          action: {
            main: "#FFB300",
            hover: "#FFC107",
            pressable: "#EF6C00",
            disabled: "#F5D7E2",
          },
          surface: {
            main: "#FFE5B3",
            hover: "#F5D7E2",
            pressable: "#FFB300",
            disabled: "#F5F5F5",
          },
        },
        error: {
          base: {
            main: "#E57373",
            dark: "#C62828",
            ligth: "#F9BABA",
            contrast: "#1E2A44",
          },
          action: {
            main: "#E57373",
            hover: "#EF8A8A",
            pressable: "#C62828",
            disabled: "#F5D7E2",
          },
          surface: {
            main: "#F9BABA",
            hover: "#F5D7E2",
            pressable: "#E57373",
            disabled: "#F5F5F5",
          },
        },
      },
    },
    commons: { ...themeCommons },
  },
  colors: {
    primary: "#3B4A7A",
    secondary: "#8C4A66",
    terciary: "#A3B1E1",
    success: "#81C784",
    success_light: "#C8E6C9",
    warning: "#FFB300",
    attention: "#E57373",
    orange: "#EF6C00",
    orange_transparent: "#FFE5B3",
    text: "#1E2A44",
    blue_dark: "#1E2A44",
    bluish_gray: "#6A7DB8",
    gray_light: "#D6DDF2",
    gray_dark: "#5A2A3F",
    ice: "#F5F5F5",
    ice_dark: "#F5D7E2",
    gray: "#A3B1E1",
    light: "#FFFFFF",
    headerBg: "#A3B1E1",      /* Azul claro para o cabeçalho no tema claro */
    containerBg: "#F5F5F5",   /* Fundo claro para os containers */
    background: "#FFFFFF",    /* Branco para o fundo da página */
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

export default light;