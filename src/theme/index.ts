import { theme as custom } from "./presets/custom";

import {
  Palette,
  PaletteColor,
  PaletteOptions,
  Shadows,
  TransitionsOptions,
} from "@mui/material/styles";
import {
  Typography,
  TypographyOptions,
} from "@mui/material/styles/createTypography";
import { ZIndexOptions } from "@mui/material/styles/zIndex";
import { ThemeOptions as SystemThemeOptions } from "@mui/system";


declare module "@mui/material/styles" {
  interface Palette {
    upvote?: PaletteColor;
    downvote?: PaletteColor;
    containerPrimary?: PaletteColor;
    containerSecondary?: PaletteColor;
  }
  interface PaletteOptions {
    upvote?: PaletteColor;
    downvote?: PaletteColor;
    containerPrimary?: PaletteColor;
    containerSecondary?: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    upvote: true;
    downvote: true;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    upvote: true;
    downvote: true;
  }
}

export interface AppTheme {
  dark?: {
    palette: DeepPartial<Palette>;
    typography?: DeepPartial<Typography>;
    customShadows?: any;
  };
  light: {
    palette: DeepPartial<Palette>;
    typography?: DeepPartial<Typography>;
    customShadows?: any;
  };
}

type ThemeColorsType = {
  [key: string]: AppTheme;
};

export const color: ThemeColorsType = {
  0: custom,
};

export interface ThemeOptions extends Omit<SystemThemeOptions, "zIndex"> {
  mixins?: any;
  components?: any;
  palette?: PaletteOptions;
  shadows?: Shadows;
  transitions?: TransitionsOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
  unstable_strictMode?: boolean;
}




export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};