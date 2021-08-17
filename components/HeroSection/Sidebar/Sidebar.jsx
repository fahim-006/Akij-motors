import { useState } from 'react';
import Link from 'next/link';
// import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { sideBarData } from '../../../sidebardata';
import classes from './Sidebar.module.scss';
import SubMenu
 from './SubMenu';

const Sidebar = () => {
  
  return (
   <>
      {sideBarData.map((menu, index) => (
        <>
               <SubMenu item={menu} key={index} />        
        </>
      ))}
    </>
  );
};

export default Sidebar;