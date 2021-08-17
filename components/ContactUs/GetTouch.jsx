import React from 'react';
import styles from './Contact.module.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
const GetTouch = () => {
  return (
    <div className={styles.GetTouch__wrapper}>
      <Container>
        <div className={styles.GetTouch__header}>
          <Typography variant="h4" color="initial">
            Get In Touch
          </Typography>
        </div>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          // alignItems="center"
          // alignContent="center"
        >
          <Grid item md={4} sm={6} xs={12} className={styles.GetTouch__box}>
            <div className={styles.GetTouch__icon}>
              <LocationOnIcon style={{ fontSize: '40px' }} />
            </div>
            <Typography
              variant="h4"
              color="initial"
              className={styles.GetTouch__title}
            >
              ADDRESS
            </Typography>
            <Typography
              variant="subtitle1"
              color="initial"
              className={styles.GetTouch__details}
            >
              AKIJ Center, 97 Shaheed <br />
              Tajuddin Ahmed Sharoni, <br />
              Satrastar More, Tejgaon I/A, <br />
              Dhaka-1208, Bangladesh
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} className={styles.GetTouch__box}>
            <div className={styles.GetTouch__icon}>
              <PhoneIcon style={{ fontSize: '40px' }} />
            </div>
            <Typography
              variant="h4"
              color="initial"
              className={styles.GetTouch__title}
            >
              PHONE
            </Typography>
            <Typography
              variant="subtitle1"
              color="initial"
              className={styles.GetTouch__details}
            >
              +880 960166274,
              <br />
              +880 9601654174, <br />
              +880 9608412274, <br />
              +880 8452112274
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} className={styles.GetTouch__box}>
            <div className={styles.GetTouch__icon}>
              <EmailIcon style={{ fontSize: '40px' }} />
            </div>
            <Typography
              variant="h4"
              color="initial"
              className={styles.GetTouch__title}
            >
              EMAIL
            </Typography>
            <Typography
              variant="subtitle1"
              color="initial"
              className={styles.GetTouch__details}
            >
              sales@akijmotors.com
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GetTouch;
