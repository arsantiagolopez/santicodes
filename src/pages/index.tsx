import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Landing } from "../components/Landing";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>What We're Building - Santi Codes</title>
      </Head>
      <Layout>
        <Landing />
      </Layout>
    </>
  );
};
export default Home;
