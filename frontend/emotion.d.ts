import '@emotion/react';
import { Theme as CustomTheme } from 'utils/theme';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
