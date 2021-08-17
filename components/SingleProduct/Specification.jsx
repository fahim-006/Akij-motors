import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { featureData, specificationData } from "./productData";
import styles from "./Specification.module.scss";

const Specification = () => {
  return (
    <Container>
      <div className={styles.Specification__wrapper}>
        <div className={styles.Specification__title}>
          <Typography variant="h4" color="initial">
            Specification
          </Typography>
        </div>
        <Grid container spacing={1} justifyContent="center">
          <Grid item md={7} sm={7} xs={12}>
            <List dense={true} className={styles.Specification__list_wrapper}>
              {specificationData?.map((el) => (
                <ListItem
                  key={el.id}
                  className={styles.Specification__itemList}
                  style={{ backgroundColor: `${el.color}` }}
                >
                  <ListItemText
                    primary={el.name}
                    className={styles.Specification__list}
                    style={{
                      width: "80%",
                    }}
                  />
                  <ListItemText
                    primary={el.value}
                    className={styles.Specification__list}
                    style={{
                      width: "20%",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item md={5} sm={5} xs={12}>
            <div className={styles.Specification__wrapper}>
              <Typography
                variant="h6"
                color="initial"
                className={styles.Specification__title}
              >
                Features -
              </Typography>
              <div className={styles.Specification__list}>
                {featureData?.map((el, i) => (
                  <li key={i} className={styles.Specification__itemList}>
                    {el}
                  </li>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={styles.akij__text}>
        <Typography
          variant="subtitle1"
          color="initial"
          className={styles.akij__title}
        >
          AKIJ Motors, one of the biggest auto mobile companies in Bangladesh.
          It has been working since 2016 with trust & reputation. Akij Motors
          solely believes in total customer satisfaction with Trust & Mutual
          Benefit. The mission is to become an enterprise which fulfills its
          customers needs and aspirations for the automobile with innovative
          technologies & services. Our vision is mobility and powerful
          Bangladesh, powered by Akij Motors & Car for all (সবার জন্য গাড়ী).
        </Typography>

        <br />
        <br />
        <Typography
          variant="subtitle1"
          color="initial"
          className={styles.akij__subtitle}
        >
          *Please be informed AKil Motors has every rights to change the content
          without any prior notice
        </Typography>

        <br />
        <br />
      </div>
    </Container>
  );
};

export default Specification;
