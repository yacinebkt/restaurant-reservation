import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, useMediaQuery, AppBarProps, Box } from '@mui/material';
import InIconButton from '@/components/buttons/InIconButton';
import AppBarStyled from './AppBarStyled';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useAuth } from '@/modules/Auth/contexts';
import LogoutIcon from '@mui/icons-material/Logout';
import Localization from './Localization';

interface Props {
  open: boolean;
  handleDrawerToggle?: () => void;
}

const Header = ({ open, handleDrawerToggle }: Props) => {
  const { removeUserData } = useAuth();
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const handleLogout = () => {
    removeUserData();
  };

  const mainHeader: ReactNode = (
    <Toolbar>
      <Box className="flex justify-between w-full gap-3 items-center">
        <InIconButton
          aria-label="open drawer"
          title={open ? 'Close' : 'Open'}
          onClick={handleDrawerToggle}
          color="primary"
          variant="text"
        >
          {!open ? <MenuOpenIcon className="rotate-180" /> : <MenuOpenIcon />}
        </InIconButton>

        <Box className="flex gap-4 justify-between items-center">
          <Localization />

          <InIconButton
            aria-label="Logout"
            title="Logout"
            onClick={handleLogout}
            color="secondary"
            variant="text"
          >
            <LogoutIcon />
          </InIconButton>
        </Box>
      </Box>
    </Toolbar>
  );

  const appBar: AppBarProps = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  };

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;
