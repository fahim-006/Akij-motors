import Head from 'next/head';
import Layout from '../../components/Layout';
import Dealer from '../../components/Dealer/Dealer';

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Akij Motors | Dealer</title>
      </Head>
      <div>
        <Dealer />
      </div>
    </Layout>
  );
};

export default index;
