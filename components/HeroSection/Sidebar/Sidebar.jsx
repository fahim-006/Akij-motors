import classes from './Sidebar.module.scss'
import { sideBarData } from '../../../sidebardata';
import SubMenu from './SubMenu';

const Sidebar = () => { 
  return (
    <>
    {sideBarData.map((menu, index) => (
   
      
           <SubMenu item={menu} key={index} />        
   
     
          ))}
   </>
  );
};

export default Sidebar;