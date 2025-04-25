import { themeCommons } from "../themes/commons";

export interface IPropsTheme {
  tokens: {
    colors: {
      text: {
        main: string;
        secondary: string;
        terciary: string;
        disabled: string;
        contrast: string;
      };
      primary_new: {
        base: {
          main: string;
          dark: string;
          ligth: string;
          contrast: string;
        };
        action: {
          main: string;
          hover: string;
          pressable: string;
          disabled: string;
        };
        surface: {
          main: string;
          hover: string;
          pressable: string;
          disabled: string;
        };
      };
      secondary_new: {
        base: {
          main: string;
          dark: string;
          ligth: string;
          contrast: string;
        };
        action: {
          main: string;
          hover: string;
          pressable: string;
          disabled: string;
        };
        surface: {
          main: string;
          hover: string;
          pressable: string;
          disabled: string;
        };
      };
      primary: {
        100: string;
        90: string;
        80: string;
        70: string;
      };
      secondary: {
        100: string;
        90: string;
        80: string;
      };
      terciary: {
        100: string;
        90: string;
        80: string;
        70: string;
      };
      feedback: {
        success: {
          base: {
            main: string;
            dark: string;
            ligth: string;
            contrast: string;
          };
          action: {
            main: string;
            hover: string;
            pressable: string;
            disabled: string;
          };
          surface: {
            main: string;
            hover: string;
            pressable: string;
            disabled: string;
          };
        };
        warning: {
          base: {
            main: string;
            dark: string;
            ligth: string;
            contrast: string;
          };
          action: {
            main: string;
            hover: string;
            pressable: string;
            disabled: string;
          };
          surface: {
            main: string;
            hover: string;
            pressable: string;
            disabled: string;
          };
        };
        error: {
          base: {
            main: string;
            dark: string;
            ligth: string;
            contrast: string;
          };
          action: {
            main: string;
            hover: string;
            pressable: string;
            disabled: string;
          };
          surface: {
            main: string;
            hover: string;
            pressable: string;
            disabled: string;
          };
        };
      };
    };
    commons: typeof themeCommons;
  };
  colors: {
    primary: string;
    secondary: string;
    terciary: string;
    success: string;
    success_light: string;
    warning: string;
    attention: string;
    orange: string;
    orange_transparent: string;
    text: string;
    blue_dark: string;
    bluish_gray: string;
    gray_light: string;
    gray_dark: string;
    ice: string;
    ice_dark: string;
    gray: string;
    light: string;
    headerBg: string;
    containerBg: string;
    background: string;
  };
  devices: {
    mobile: {
      sm: number;
      md: number;
      lg: number;
    };
    tablet: {
      sm: number;
      md: number;
      lg: number;
    };
    desktop: {
      sm: number;
      md: number;
      lg: number;
    };
  };
  sizes: {
    sm: number;
    md: number;
    lg: number;
    he: number;
  };
}
