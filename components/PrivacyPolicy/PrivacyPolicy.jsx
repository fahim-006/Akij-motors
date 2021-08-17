import privacyList from '../../DUMYY_DATA/privacy-policy';
import PrivacyPolicyCard from '../../UI/PrivacyPolicyCard/PrivacyPolicyCard';
import classes from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto">
      <div className={classes.privacy__policy}>
        {privacyList.map((privacy, i) => {
          return (
            <PrivacyPolicyCard
              key={i}
              topic={privacy.topic}
              description={privacy.description}
              headline={privacy.headline}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
