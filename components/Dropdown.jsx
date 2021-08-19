import { Height } from '@material-ui/icons';
import React, { useState } from 'react';
import { sideBarData } from '../sidebardata';
import classes from './Dropdown.module.scss';;
import SubMenu from './HeroSection/Sidebar/SubMenu';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        style={{}}
        onClick={handleClick}
        className={classes.click ? classes.dropdownamenuclicked : classes.dropdownamenu}>
        {sideBarData.map((item, index) => {
          return (
            <li  key={index} >
             
                <SubMenu item={item} key={index} />
             
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;