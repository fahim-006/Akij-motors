import React from 'react';
import Sidebar from '../../components/HeroSection/Sidebar/Sidebar';
import classes from './SidebarForOtherPage.module.scss';

const SidebarForOtherPage = () => {
  return (
    <div className={classes.sidebar__otherPages}>
      <Sidebar />
    </div>
  );
};

export default SidebarForOtherPage;
