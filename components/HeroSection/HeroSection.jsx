import classes from './HeroSection.module.scss';
import HeroSlider from './HeroSlider/HeroSlider';
import Sidebar from './Sidebar/Sidebar'
import { Slider } from '@material-ui/core';

const HeroSection = () => {
  return (
    <>
    <center>
     <div className={classes.row} style={{paddingLeft: "60px",paddingRight: "60px"}}>

    <div className={classes.hide}>
      <Sidebar/>
    </div>
    <HeroSlider/>

  
</div>
</center>
    </>
  );
};

export default HeroSection;
