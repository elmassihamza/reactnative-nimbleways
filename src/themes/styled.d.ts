import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    colors: {
      primary: string;
      secondary: string;
      border: string;
      white: string;
    };
  }
}
