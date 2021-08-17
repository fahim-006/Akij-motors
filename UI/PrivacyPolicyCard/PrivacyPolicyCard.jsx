import { MdSecurity } from 'react-icons/md';
import classes from './PrivacyPolicyCard.module.css';

const PrivacyPolicyCard = (props) => {
  return (
    <div>
      <h1 className={classes.headline}>{props.headline}</h1>
      <div className="flex items-center ">
        {props.topic && <MdSecurity />}
        <p className={classes.topic}>{props.topic}</p>
      </div>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default PrivacyPolicyCard;
