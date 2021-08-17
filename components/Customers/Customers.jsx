import React from 'react';
import Image from 'next/image';
import Card from '../../UI/Card/Card';
import classes from './Customers.module.css';

const Customers = () => {
  return (
    <div className="container mx-auto">
      <div className={classes.car__wrapper}>
        <h1 className={classes.headline}>Clients</h1>
        <Card>
          <div className={classes.card__item}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
              <Image
                key={i}
                width="100%"
                height="100px"
                src={`/brand/brand-${item}.png`}
                alt="partner"
                objectFit="contain"
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Customers;
