import { createTheme } from '@mui/material/styles';
import { AppTheme } from '..';

const { palette } = createTheme();

export const theme: AppTheme = {
  light: {
    palette: {
      mode: 'light',
      primary: palette.augmentColor({
        color: {
          main: '#6316db',
          light: '#01B142',
          contrastText: '#ffffff',
          '900': '#006146',
          '800': '#EDEDEC',
          '100': '#EBFBC7',
        },
      }),
      secondary: palette.augmentColor({
        color: {
          main: '#E66C3D',
          contrastText: '#ffffff',
        },
      }),
      text: {
        primary: '#000',
        secondary: '#707070',
      },
      background: {
        default: '#f9f9f9',
        paper: '#ffffff',
      },
      error: palette.augmentColor({
        color: {
          main: '#FF4D4D',
          contrastText: '#ffffff',
        },
      }),
      success: palette.augmentColor({
        color: {
          main: '#4CAF50',
          contrastText: '#ffffff',
        },
      }),
      info: palette.augmentColor({
        color: {
          main: '#2196F3',
          contrastText: '#ffffff',
        },
      }),
      warning: palette.augmentColor({
        color: {
          main: '#FFC107',
          contrastText: '#000000',
        },
      }),
      divider: '#0000002f',
      upvote: palette.augmentColor({
        color: {
          main: '#58B224',
          contrastText: '#ffffff',
        },
      }),
      downvote: palette.augmentColor({
        color: {
          main: '#FF4D4D',
          contrastText: '#ffffff',
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          main: '#E0E0E0',
          contrastText: '#1c0062',
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          main: '#f2f2f2',
          contrastText: '#1d192b',
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
