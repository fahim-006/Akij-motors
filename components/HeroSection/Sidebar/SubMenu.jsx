import React, { useState } from 'react';
import classes from './Sidebar.module.scss';

const SubMenu = ({ item }) => {
  const [subMenu1, setsubMenu] = useState(false);

  const showsubMenu = (trueOrFalse) =>{  
    setsubMenu(trueOrFalse); 
  } 

  return (
  
    <div className={classes.sidebar} onMouseLeave={()=>showsubMenu(false)}>
     
        <a className={classes.sidebarLink} onMouseOver={()=>showsubMenu(true) && item.subMenu} >      
        {item.name}
        {item.iconOpen}
        </a>    
     
      {subMenu1 &&
        item.subMenu.map((item, index) => {
          return (
            <div className={classes.dropdownLink} to={item.url} key={index}>
              {item.name}
        </div>
         );
        })}
   </div>
   
  
  );
};

export default SubMenu;