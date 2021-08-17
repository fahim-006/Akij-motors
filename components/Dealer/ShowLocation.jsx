import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./Dealer.module.scss";

const ShowLocation = ({ data, header }) => {
  return (
    <div>
      <div>
        <Typography
          variant="h5"
          color="initial"
          style={{ color: "#13488e", fontSize: "30px", fontWeight: "bold" }}
        >
          {header}
        </Typography>
      </div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        {data?.map((el) => (
          <Grid key={Math.random().toString(36)} item md sm={2} xs={4}>
            <Typography
              variant="subtitle1"
              color="initial"
              style={{
                fontSize: "18px",
                fontWeight: "medium",
                marginTop: "15px",
              }}
              className={styles.listname}
            >
              {el}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShowLocation;
