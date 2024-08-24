import { createTheme } from '@mui/material/styles';
import { AppTheme } from '..';

const { palette } = createTheme();

export const theme: AppTheme = {
  light: {
    palette: {
      upvote: palette.augmentColor({
        color: {
          main: '#2e7d32',
          contrastText: '#32009a',
        },
      }),
      downvote: palette.augmentColor({
        color: {
          main: '#d32f2f',
          contrastText: '#fff',
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          main: '#fff',
          contrastText: '#black',
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          main: '#fff',
          contrastText: '#black',
        },
      }),
    },
    customShadows: {
      button: `0 2px 0 rgb(0 0 0 / 5%)`,
      text: `0 -1px 0 rgb(0 0 0 / 12%)`,
      z1: `0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 12%), 0px 1px 3px rgb(0 0 0 / 20%)`,
      primary: `0 0 0 2px rgb(0 0 0 / 5%)`,
      secondary: `0 0 0 2px rgb(0 0 0 / 5%)`,
      error: `0 0 0 2px rgb(0 0 0 / 5%)`,
      warning: `0 0 0 2px rgb(0 0 0 / 5%)`,
      info: `0 0 0 2px rgb(0 0 0 / 5%)`,
      success: `0 0 0 2px rgb(0 0 0 / 5%)`,
      grey: `0 0 0 2px rgb(0 0 0 / 5%)`,
      primaryButton: `0 14px 12px rgb(0 0 0 / 5%)`,
      secondaryButton: `0 14px 12px rgb(0 0 0 / 5%)`,
      errorButton: `0 14px 12px rgb(0 0 0 / 5%)`,
      warningButton: `0 14px 12px rgb(0 0 0 / 5%)`,
      infoButton: `0 14px 12px rgb(0 0 0 / 5%)`,
      successButton: `0 14px 12px rgb(0 0 0 / 5%)`,
      greyButton: `0 14px 12px rgb(0 0 0 / 5%)}`,
    },
  },
};
