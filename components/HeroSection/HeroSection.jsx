import classes from './HeroSection.module.scss';
import HeroSlider from './HeroSlider/HeroSlider';
import Sidebar from './Sidebar/Sidebar'
import MainMenu from './Sidebar/MainMenu';

const HeroSection = () => {
  return (
    <>
    <center>
     <div className={classes.row}>

    <div  className={classes.left}>
      <MainMenu />
      
      </div>
      
    <div className={classes.right}>
    <HeroSlider/>
    </div>
    

  
</div>
</center>
    </>
  );
};

export default HeroSection;
