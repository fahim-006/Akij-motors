import React from 'react';
import Sidebar from '../../components/HeroSection/Sidebar/Sidebar';
import classes from './SidebarForOtherPage.module.scss';

const SidebarForOtherPage = () => {
  return (
    <ul className={classes.sidebar__otherPages}>
      <li>
      <Sidebar />
      </li>
      
    </ul>
  );
};

export default SidebarForOtherPage;
