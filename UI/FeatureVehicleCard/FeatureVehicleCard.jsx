import Link from 'next/link';
import classes from './FeatureVehicleCard.module.css';

const FeatureVehicleCard = (props) => {
  return (
    <div className={classes.featured__card}>
      <div className={classes.img__box}>
        <img src={props.img} alt="featured image" />
      </div>
      <div className={classes.featured__card__title}>
        <Link href={props.url}>{props.title}</Link>
      </div>
    </div>
  );
};

export default FeatureVehicleCard;
