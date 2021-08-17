import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderBottom from '../components/HeaderBottom';
import HeaderTop from '../components/HeaderTop';
import Navigation from '../components/Navigation';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import Layout from '../components/Layout';

export default function privacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Akij Motors | privacy</title>
      </Head>

      <main>
        <PrivacyPolicy />
      </main>
    </Layout>
  );
}
