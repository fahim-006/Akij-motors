import classes from './HeroSection.module.scss';
import HeroSlider from './HeroSlider/HeroSlider';
import Sidebar from './Sidebar/Sidebar';

const HeroSection = () => {
  return (
    <div className="container w-full mx-auto">
      <section className={classes.wrapper}>
        <div className={classes.left__side}>
          <Sidebar />
        </div>
        <div className={classes.right__side}>
          <HeroSlider />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
