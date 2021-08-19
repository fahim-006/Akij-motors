import { Height } from '@material-ui/icons';
import React, { useState } from 'react';
import { sideBarData } from '../sidebardata';
import classes from './Dropdown.module.scss';;
import SubMenu from './HeroSection/Sidebar/SubMenu';

function Dropdown() {
  return (
    <>
    <div
       style={{height: "508px"}} 
        className={classes.dropdownamenu}>
        {sideBarData.map((item, index) => {
          return (
          
             
                <SubMenu item={item} key={index} />
             
            
          );
        })}
      </div>
    </>
  );
}

export default Dropdown;