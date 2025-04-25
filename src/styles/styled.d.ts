import 'styled-components';
import { IPropsTheme } from '../globals/types/theme';

// Estendendo a interface DefaultTheme do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends IPropsTheme {
    isDark: boolean;
  }
}
