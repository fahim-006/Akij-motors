import { Container } from '@material-ui/core';
import { multiCard } from '../../../DUMYY_DATA/multicard';
import MultiCardCard from '../../../UI/MultiCardCard/MultiCardCard';
import classes from './MultiCard.module.scss';

const MultiCard = () => {
  return (
    <Container>
      <section className={classes.multi__card}>
        {multiCard.map((card, idx) => {
          return (
            <MultiCardCard
              key={idx}
              title={card.title}
              image={card.image}
              subtitle={card.subtitle}
              description={card.description}
            />
          );
        })}
      </section>
    </Container>
  );
};

export default MultiCard;
