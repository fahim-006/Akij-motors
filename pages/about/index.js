import Head from 'next/head';
import AboutUsHero from '../../components/AboutUs/AboutUsHero/AboutUsHero';
import Milestone from '../../components/AboutUs/Milestone/Milestone';
import MissionSection from '../../components/AboutUs/MissionSection/MissionSection';
import MultiCard from '../../components/AboutUs/MultiCard/MultiCard';
import OwnerSpeech from '../../components/AboutUs/OwnerSpeech/OwnerSpeech';
import Teams from '../../components/AboutUs/Teams/Teams';
import Customers from '../../components/Customers/Customers';
import Layout from '../../components/Layout';
import Partners from '../../components/Partners/Partners';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Akij motors | about us</title>
      </Head>

      <main>
        <AboutUsHero />
        <MissionSection />
        <MultiCard />
        {/* teams */}
        {/* <Teams /> */}

        {/* director */}
        {/* <Teams /> */}

        {/* advisor */}
        {/* <Teams /> */}

        {/* Owner speech */}
        <OwnerSpeech />

        {/* milestone */}
        {/* <Milestone /> */}

        {/* Client  */}
        <Customers />
        {/* partners */}
        <Partners />
      </main>
    </Layout>
  );
};

export default About;
