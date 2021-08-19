import { sideBarData } from '../../../sidebardata';
import SubMenu from './SubMenu';

const Sidebar = () => { 
  return (
    <div>      
      {sideBarData.map((menu, index) => (
              <SubMenu item={menu} key={index} />        
      ))}
    </div>
  );
};

export default Sidebar;