import { forwardRef, useEffect, ForwardRefExoticComponent, RefAttributes } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { LinkTarget, NavItemType } from '@/types/menu';
import { Link, useLocation, useParams } from 'react-router-dom';
import { activeItem } from '@/store/app/reducers/menu';
import { useTranslation } from 'react-i18next';
import { isObjectNotEmpty } from '@/helpers/data.helper';

interface Props {
  item: NavItemType;
  level: number;
}

const NavItem = ({ item, level }: Props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const menu = useSelector((state: any) => state.app.menu);
  const { drawerOpen, openItem } = menu;

  let listItemProps: {
    component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
    href?: string;
    target?: LinkTarget;
  } = {
    component: forwardRef((props, ref) => <Link to={item.url!} {...props} ref={ref}></Link>),
  };

  const Icon = item.icon!;
  const itemIcon = item.icon ? (
    <Icon style={{ fontSize: drawerOpen ? '1.4rem' : '1.25rem' }} />
  ) : (
    false
  );

  const isSelected = openItem.findIndex((id: any) => id === item.id) > -1;

  const { pathname } = useLocation();
  const params = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (pathname === item.url) {
      dispatch(activeItem({ openItem: [item.id] }));
      return;
    } else if (
      pathname.split('/').slice(0, -1).join('/') === item.url &&
      isObjectNotEmpty(params)
    ) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
  }, [pathname]);

  return (
    <ListItemButton
      {...listItemProps}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: drawerOpen ? `` : 1.5,
        py: 0.75,
        borderRadius: '10px',
        ...(!drawerOpen && {
          '&:hover': {
            bgcolor: 'transparent',
          },
          '&.Mui-selected': {
            '&:hover': {
              bgcolor: 'transparent',
            },
            bgcolor: 'transparent',
          },
        }),
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            ...(!drawerOpen && {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? 'secondary.light' : 'secondary.lighter',
              },
            }),
          }}
          className={` ${isSelected ? 'text-primary' : 'text-black900'} `}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <>
              <Typography
                variant="body2"
                className={`text-black900  ${isSelected ? `text-primary` : ''} `}
              >
                {t(item.title as string)}
              </Typography>
            </>
          }
        />
      )}
    </ListItemButton>
  );
};

export default NavItem;
