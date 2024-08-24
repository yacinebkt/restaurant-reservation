import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';
import { color as ThemeColors } from './index';

import { ConfigProvider } from 'antd';

export const ThemeContext = React.createContext({
  toggleColorMode: () => {},
  shuffleColorTheme: () => {},
});

type MyThemeProviderProps = {
  children?: React.ReactNode;
};

export default function MyThemeProvider(props: MyThemeProviderProps) {
  const [mode] = React.useState<'light' | 'dark'>('light');
  const [theme] = React.useState<0>(0);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        // add toggle color theme
      },
      shuffleColorTheme: () => {
        // add  shuffle color theme
      },
    }),
    []
  );

  const _theme = React.useMemo(
    () =>
      createTheme({
        ...(ThemeColors[theme][mode] as ThemeOptions),
      }),
    [mode, theme]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={_theme}>
        <GlobalStyles styles={{}} />
        <CssBaseline enableColorScheme />

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#6316db',
              borderRadius: 2,
              colorBgContainer: '#fff',

            },
          }}
        >
          {props.children}
        </ConfigProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
