import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Main from "../components/Main";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Main />
    </Layout>
  );
}
