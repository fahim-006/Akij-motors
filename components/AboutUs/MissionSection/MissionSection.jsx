import { Container } from '@material-ui/core';
import { missions } from '../../../DUMYY_DATA/missions';
import MissionCard from '../../../UI/MissionCard/MissionCard';
import classes from './MissionSection.module.scss';

const MissionSection = () => {
  return (
    <Container>
      <section className={classes.mission}>
        {missions.map((mission) => {
          return (
            <MissionCard
              key={mission.id}
              title={mission.title}
              description={mission.description}
            />
          );
        })}
      </section>
    </Container>
  );
};

export default MissionSection;
