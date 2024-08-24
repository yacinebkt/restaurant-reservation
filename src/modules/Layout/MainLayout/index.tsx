import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { openDrawer } from '@/store/app/reducers/menu';
import Drawer from './Drawer';
import Header from './Header';
import useLayoutConfig from '@/hooks/useLayoutConfig';

const MainLayout = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));

  const { container, miniDrawer } = useLayoutConfig();
  const dispatch = useDispatch();

  const menu = useSelector((state: any) => state.app.menu);
  const { drawerOpen } = menu;

  // drawer toggler
  const [open, setOpen] = useState(!miniDrawer || drawerOpen);

  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  // set media wise responsive drawer
  useEffect(() => {
    if (!miniDrawer) {
      setOpen(!matchDownLG);
      dispatch(openDrawer({ drawerOpen: !matchDownLG }));
    }
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
  }, [drawerOpen]);

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, [pathname]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ width: 'calc(100% - 200px)', flexGrow: 1 }}>
        <Toolbar />
        {container && (
          <Box
            maxWidth="2000px"
            sx={{
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column',
              px : 4,
              py : 1,
              mb : 4
            }}
            className="mt-3"
          >
            <Outlet />
          </Box>
        )}
        {!container && (
          <Box
            sx={{
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column',
            }}
            className="mt-4"
          >
            <Outlet />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
