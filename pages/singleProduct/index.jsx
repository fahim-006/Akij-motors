import Head from "next/head";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/SingleProduct/ProductHeader";
import Specification from "../../components/SingleProduct/Specification";
import RelatedProducts from "../../components/SingleProduct/RelatedProducts";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>
          Akij Motors Single product - Best Motor Company in Bangladesh
        </title>
      </Head>
      <div>
        <ProductHeader />
        <Specification />
        <RelatedProducts />
      </div>
    </Layout>
  );
};

export default index;
