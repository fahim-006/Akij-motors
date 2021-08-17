import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { CardContent, Card, Typography, Button } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import styles from "./Product.module.scss";
import Image from "next/image";
import PhoneIcon from "@material-ui/icons/Phone";
import { productData } from "./productData";
import { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
const ProductHeader = () => {
  const [image, setImage] = useState(productData[0]?.image[0]);

  const handleClick = (id) => {
    setImage(productData[0]?.image[id]);
  };
  return (
    <div className={styles.product__wrapper}>
      <Container>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item md={8} sm={8} xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid
                    item
                    md={6}
                    sm={12}
                    xs={12}
                    className={styles.left__Side__wrapper}
                  >
                    <Image
                      src={image}
                      alt="product"
                      height={600}
                      width={600}
                      loading="lazy"
                    />
                  </Grid>
                  <Hidden mdUp>
                    <Grid container spacing={2}>
                      {productData[0]?.image?.map((el, i) => (
                        <Grid key={i} item md={2} sm={2} xs={6}>
                          <div className={styles.bottom__image__wrapper}>
                            <Image
                              src={el}
                              alt="product"
                              height={80}
                              width={80}
                              onClick={() => handleClick(i)}
                              loading="lazy"
                              objectFit="contain"
                            />
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </Hidden>
                  <Grid
                    item
                    md={6}
                    sm={12}
                    xs={12}
                    className={styles.left__Side__info}
                  >
                    <Typography
                      variant="h5"
                      color="initial"
                      className={styles.left__Side__info_title}
                    >
                      {productData[0]?.title}
                    </Typography>

                    <div className={styles.left__Side__info_subtitle}>
                      <Typography variant="subtitle1" color="initial">
                        {productData[0]?.description}
                      </Typography>
                    </div>

                    <div className={styles.left__Side__button}>
                      <Button variant="contained" color="default" fullWidth>
                        Ask for query
                      </Button>
                    </div>

                    <div className={styles.left__Side__phone_wrapper}>
                      <Typography
                        variant="h6"
                        color="initial"
                        className={styles.left__Side__phone_title}
                      >
                        For more information
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        className={styles.left__Side__phone_number}
                      >
                        <span>
                          <PhoneIcon />
                        </span>
                        {productData[0]?.phone}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Hidden smDown>
                  <Grid container spacing={2}>
                    {productData[0]?.image?.map((el, i) => (
                      <Grid key={i} item md={2} sm={2} xs={6}>
                        <div className={styles.bottom__image__wrapper}>
                          <Image
                            src={el}
                            alt="product"
                            height={80}
                            width={80}
                            onClick={() => handleClick(i)}
                            loading="lazy"
                            objectFit="contain"
                          />
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </Hidden>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <div className={styles.right__side__bar}>
              <Typography
                variant="h6"
                color="initial"
                className={styles.right__side__bar__title}
              >
                <span>
                  <VerifiedUserIcon />{" "}
                </span>
                Conditional Warranty
              </Typography>
              <Typography variant="subtitle2" color="initial">
                6-month warranty for Battery, Motor and Controller
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductHeader;
