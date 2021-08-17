import { Container } from '@material-ui/core';
import classes from './OwnerSpeech.module.scss';

const OwnerSpeech = () => {
  return (
    <Container>
      <div className={classes.owner__info}>
        <h1>Owner Speech of Akiz Groups</h1>

        <div className={classes.content}>
          <div className={classes.imageBox}>
            <img
              src="https://www.akij.net/img/Founder-image.jpg"
              alt="owner image"
            />

            <div className={classes.person}>
              <h2>SK. Akij Uddin</h2>
              <p>founder</p>
            </div>
          </div>

          <div className={classes.details}>
            <p>
              AKIJ Motors solely believes in total customer satisfaction with
              &quot;Trust & Mutual Benefit&quot;. With this particular view, the
              Akij Motors introduces a One Stop Automobile Solution in
              Bangladesh and proudly announces the affiliation with some of
              world&quot;s renowned automobile & garage equipment manufacturers.
              We are working with those manufacturing companies whose products
              are exported to many countries of the world. They are also
              involved in assembling & manufacturing some of the world famous
              brands. These products achieved & established an important
              position in the automobile & related service markets across the
              continent.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OwnerSpeech;
