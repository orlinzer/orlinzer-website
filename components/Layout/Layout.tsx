import { NextComponentType, NextPage } from "next";
import Head from "next/head";
import { Fragment, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

type LayoutProps = {
  children?: ReactNode;
  subtitle?: string;
};

export const Layout: NextPage<LayoutProps> = ({ children, subtitle }) => {
  return (
    <Fragment>
      <Head>
        <title>Or Linzer</title>
        <meta name="description" content="Example app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        subtitle={subtitle}
      />

      <Main>{children}</Main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
