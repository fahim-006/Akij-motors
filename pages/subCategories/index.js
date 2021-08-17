import Head from 'next/head';
import HeaderTop from '../../components/HeaderTop';
import Navigation from '../../components/Navigation';
import HeaderBottom from '../../components/HeaderBottom';
import HeroSection from '../../components/HeroSection/HeroSection';
import SubCategories from '../../components/subCategories/SubCategories.jsx';
import Footer from '../../components/Footer';

const index = () => {
  return (
    <>
      <Head>
        <title>Akij Motors | Sub Categories</title>
      </Head>
      <div>
        <HeaderTop />
        <Navigation />
        <HeaderBottom />
        <HeroSection />
        <SubCategories />
        <Footer />
      </div>
    </>
  );
};

export default index;
