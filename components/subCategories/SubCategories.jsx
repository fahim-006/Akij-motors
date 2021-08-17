import React from "react";
import styles from "./SubCategories.module.scss";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SingleCard from "./SingleCard";
import { subCategoriesData, productData } from "./subData";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const SubCategories = () => {
  const [show, setShow] = useState(false);

  const viewAll = () => {
    setShow(true);
  };
  return (
    <div className={styles.subCategories__wrapper}>
      <Container>
        <div className={styles.subCategories__content}>
          <Typography
            variant="h4"
            color="initial"
            className={styles.subCategories__title}
          >
            Sub Categories
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            {subCategoriesData?.map((data) => (
              <Grid item md sm={4} xs={6} key={data.id}>
                <SingleCard data={data} />
              </Grid>
            ))}
          </Grid>

          {/* Product item  */}

          <Typography
            variant="h4"
            color="initial"
            className={styles.subCategories__title}
          >
            Products
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
          >
            {!show ? (
              <>
                {productData?.slice(0, 8)?.map((data) => (
                  <Grid item lg={3} md={3} sm={4} xs={6} key={data.id}>
                    <SingleCard data={data} />
                  </Grid>
                ))}
              </>
            ) : (
              <>
                {productData?.map((data) => (
                  <Grid item lg={3} md={3} sm={4} xs={6} key={data.id}>
                    <SingleCard data={data} />
                  </Grid>
                ))}
              </>
            )}
            {!show && (
              <div className={styles.subCategories__button} onClick={viewAll}>
                <Button variant="contained" color="primary">
                  VIEW ALL
                </Button>
              </div>
            )}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default SubCategories;
