import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./TermsConditions.module.scss";

const TermsHeader = () => {
  return (
    <div className={styles.terms__wrapper}>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          className={styles.terms__content}
        >
          <div className={styles.faq__info}>
            <Typography variant="h4" color="initial">
              Terms & Conditions
            </Typography>
            <Typography variant="subtitle1" color="initial">
              THE TERMS AND CONDITIONS OF AKIJ Motors
            </Typography>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default TermsHeader;
