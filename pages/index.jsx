import Head from "next/head";
import { useLayoutEffect } from "react";
import Hero from "../components/Hero";
import Work from "../components/Work";

const Home = () => {
  useLayoutEffect(() => {
    document.documentElement.className = "latte";
  }, []);

  return (
    <div>
      <Head>
        <title>MAH.codes Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <Hero />
        <Work />
      </main>
    </div>
  );
};

export default Home;
