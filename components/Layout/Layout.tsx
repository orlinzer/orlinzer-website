import { NextComponentType, NextPage } from "next";
import Head from "next/head";
import { Fragment, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

import styles from "./Layout.module.css";

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

      <div className={styles.Layout}>
        <Header
          subtitle={subtitle}
        />

        <Main>{children}</Main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
