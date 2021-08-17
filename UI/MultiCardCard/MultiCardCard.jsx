import classes from './MultiCardCard.module.scss';

const MultiCardCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <h1>{props.title}</h1>
        <p>
          <span>{props.subtitle}</span> {props.description}
        </p>
      </div>
      <div className={classes.imageBox}>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default MultiCardCard;
