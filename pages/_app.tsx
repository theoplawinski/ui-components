import "../styles/index.scss";
import type { AppProps } from "next/app";
import Head from "../components/Head/Head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
