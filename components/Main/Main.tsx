import { NextComponentType, NextPage } from "next";
import { Fragment, ReactNode } from "react";

import styles from './Main.module.css';

type MainProps = {
  children: ReactNode;
};

export const Main: NextPage<MainProps> = ({ children }) => {
  return (
    <main className={styles.Main}>
      {children}
    </main>
  )
}

export default Main;
