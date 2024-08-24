import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { NavItemType } from '@/types/menu';

const icons = {
  LocalMallOutlinedIcon,
  PeopleAltOutlinedIcon,
  AssessmentOutlinedIcon,
};

const main: NavItemType = {
  id: 'group-pages',
  title: 'Main',
  type: 'group',
  children: [
    {
      id: 'reservations',
      title: 'Reservations',
      type: 'item',
      url: '/',
      icon: icons.LocalMallOutlinedIcon,
      target: false,
    },

    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.PeopleAltOutlinedIcon,
      target: false,
    },

    {
      id: 'Analytics',
      title: 'Analytics',
      type: 'item',
      url: '/analytics',
      icon: icons.AssessmentOutlinedIcon,
      target: false,
    },
  ],
};

export default main;
