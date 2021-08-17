import { Container, Typography, Grid } from "@material-ui/core";
import React from "react";
import { productDatas } from "./productData";
import styles from "./RelatedProducts.module.scss";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <div className={styles.RelatedProducts__wrapper}>
      <Container>
        <Typography variant="h5" color="initial">
          Related Products
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          {productDatas?.map((el) => (
            <Grid
              item
              md
              sm={3}
              xs={6}
              key={el.id}
              style={{ marginTop: "30px" }}
            >
              <ProductCard data={el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RelatedProducts;
