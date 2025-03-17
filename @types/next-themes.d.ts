declare module 'next-themes' {
  import { ReactNode } from 'react';

  export type ThemeProviderProps = {
    children: ReactNode;
    // Add any other props that the ThemeProvider accepts
  };

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export const useTheme: () => { theme: string; setTheme: (theme: string) => void; };
}
