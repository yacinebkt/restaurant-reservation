import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Box, List, Typography } from '@mui/material';
import { NavItemType } from '@/types/menu';
import { useTranslation } from 'react-i18next';
import NavItem from './NavItem';

interface Props {
  item: NavItemType;
}

const NavGroup = ({ item }: Props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const menu = useSelector((state: any) => state.app.menu);
  const { drawerOpen } = menu;

  const navCollapse = item.children?.map((menuItem) => {
    if (menuItem.hideChildren) {
      return <NavItem key={menuItem.id} item={menuItem} level={1} />;
    }
    switch (menuItem.type) {
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Navigation ERROR
          </Typography>
        );
    }
  });

  return (
    <List
      subheader={
        item.title &&
        drawerOpen && (
          <Box sx={{ pl: 3, mb: 1 }}>
            <Typography
              variant="caption"
              className="text-[10px] opacity-70"
              color={theme.palette.primary.contrastText}
            >
              {t(item.title as string)}
            </Typography>
          </Box>
        )
      }
      sx={{ mt: drawerOpen && item.title ? 1.5 : 0, py: 0, zIndex: 0 }}
      className="flex flex-col gap-1"
    >
      {navCollapse}
    </List>
  );
};

export default NavGroup;
