import { Container } from '@material-ui/core';
import classes from './AboutUsHero.module.scss';

const AboutUsHero = () => {
  return (
    <section className={classes.about__us}>
      <Container>
        <h1 className={classes.title}>About Us</h1>
      </Container>
    </section>
  );
};

export default AboutUsHero;
