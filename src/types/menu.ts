import { ReactNode } from 'react';
import { ChipProps } from '@mui/material';

export type NavItemType = {
  breadcrumbs?: boolean;
  caption?: ReactNode | string;
  children?: NavItemType[];
  chip?: ChipProps;
  color?: 'primary' | 'secondary' | 'default' | undefined;
  disabled?: boolean;
  external?: boolean;
  id?: string;
  search?: string;
  target?: boolean;
  title?: ReactNode | string;
  description?: ReactNode | string;
  type?: string;
  url?: string | undefined;
  icon?: any;
  disabledInNavigation?: boolean;
  hideChildren?: boolean;
  permission?: string;
  permissions?: string[];
};

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type MenuProps = {
  openItem: string[];
  openComponent: string;
  drawerOpen: boolean;
  componentDrawerOpen: boolean;
};
