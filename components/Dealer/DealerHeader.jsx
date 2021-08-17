import styles from "./Dealer.module.scss";
import Typography from "@material-ui/core/Typography";

const DealerHeader = () => {
  return (
    <div className={styles.dealer__wrapper}>
      <Typography variant="h4" color="initial">
        Dealer
      </Typography>
    </div>
  );
};

export default DealerHeader;
