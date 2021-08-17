import classes from './MissionCard.module.scss';

const MissionCard = (props) => {
  return (
    <div className={classes.mission__card}>
      <h1>{props.title}</h1>
      <div className={classes.underline}></div>
      <p>{props.description}</p>
    </div>
  );
};

export default MissionCard;
