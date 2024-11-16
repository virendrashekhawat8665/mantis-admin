import dashboard from './dashboard';
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = (): { items: NavItemType[] } => {

  const menuItems: { items: NavItemType[] } = {
    items: [dashboard]
    
  };

  return menuItems;
};

export default menuItems;
