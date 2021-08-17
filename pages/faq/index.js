import Head from 'next/head';
import Layout from '../../components/Layout';
import FaqHeader from '../../components/faq/FaqHeader';
import FaqQuestion from '../../components/faq/FaqQuestion';

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Akij Motors | Faq</title>
      </Head>
      <div style={{ zIndex: '-1' }}>
        <FaqHeader />
        <FaqQuestion />
      </div>
    </Layout>
  );
};

export default index;
