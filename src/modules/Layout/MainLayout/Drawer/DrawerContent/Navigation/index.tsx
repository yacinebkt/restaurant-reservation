import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import NavGroup from './NavGroup';
import menuItem from '../../../../menu-items';

const Navigation = () => {
  const menu = useSelector((state: any) => state.app.menu);
  const { drawerOpen } = menu;

  const navGroups = menuItem?.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Navigation Error
          </Typography>
        );
    }
  });
  return (
    <Box
      sx={{
        pt: drawerOpen ? 0 : 3,
        '& > ul:first-of-type': { mt: 0 },
        px: drawerOpen ? '10px' : 0,
      }}
    >
      {navGroups}
    </Box>
  );
};

export default Navigation;
