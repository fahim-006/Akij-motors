import {
  CardContent,
  Card,
  CardMedia,
  Typography,
  Divider,
} from '@material-ui/core';
import React from 'react';
import styles from './Dealer.module.scss';
import PhoneIcon from '@material-ui/icons/Phone';
import PinDropIcon from '@material-ui/icons/PinDrop';
const SingleDealer = ({ data }) => {
  return (
    <Card className={styles.dealer__card}>
      <div className={styles.dealer__image}>
        <CardMedia
          component="img"
          image={data?.image}
          height={150}
          alt={data?.title}
          loading="lazy"
          objectFit="contain"
          layout="fill"
        />
        <div className={styles.dealer__image_overtext}>
          <Typography
            variant="subtitle1"
            color="initial"
            className={styles.dealer__image_text}
          >
            {data?.title}
          </Typography>
        </div>
      </div>
      <CardContent className={styles.dealer__info}>
        <Typography variant="subtitle1" color="initial">
          <span>
            {' '}
            <PhoneIcon />{' '}
          </span>{' '}
          {data?.phone1}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent className={styles.dealer__address}>
        <Typography variant="subtitle1" color="initial">
          <span>
            {' '}
            <PinDropIcon />{' '}
          </span>{' '}
          {data?.address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleDealer;
