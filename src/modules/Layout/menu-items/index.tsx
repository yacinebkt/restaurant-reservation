import { NavItemType } from '@/types/menu';
import main from './main';

const menuItems: { items: NavItemType[]; settings?: NavItemType[] } = {
  items: [main],
  // add more groups her like settings / non auth pages / apps
};

export default menuItems;
