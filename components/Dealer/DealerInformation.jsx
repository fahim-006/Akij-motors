import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { dealer } from "./dealerData";
import SingleDealer from "./SingleDealer";
import styles from "./Dealer.module.scss";

const DealerInformation = () => {
  return (
    <div className={styles.DealerInformation__content}>
      <div>
        <Typography
          variant="h4"
          color="initial"
          className={styles.DealerInformation__title}
        >
          Dealer information
        </Typography>
      </div>
      <div>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          {dealer?.map((data) => (
            <Grid item md={3} sm={4} xs={12} key={data.id}>
              <SingleDealer data={data} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default DealerInformation;
