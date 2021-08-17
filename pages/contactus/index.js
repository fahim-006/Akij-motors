import Head from 'next/head';
import Layout from '../../components/Layout';
import Contact from '../../components/ContactUs/Contact';

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Akij Motors | Contact us</title>
      </Head>

      <div>
        <Contact />
      </div>
    </Layout>
  );
};

export default index;
