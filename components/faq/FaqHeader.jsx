import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Faq.module.scss";

const FaqHeader = () => {
  return (
    <div className={styles.faq__wrapper}>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          className={styles.faq__content}
        >
          <div className={styles.faq__info}>
            <Typography variant="h4" color="initial">
              FAQ
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Frequently asked Questions for all things about Akij Motors
            </Typography>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default FaqHeader;
