import classes from './HeroSection.module.scss';
import HeroSlider from './HeroSlider/HeroSlider';
import HeaderBottom from '../HeaderBottom';

const HeroSection = () => {
  return (
    <>
    
    <div className={classes.wrapper}>
      
     
        <div className={classes.left__side}>
          
        </div>
        <div className={classes.right__side}>
          <HeroSlider />
        </div>
     
    </div>
    </>
  );
};

export default HeroSection;
