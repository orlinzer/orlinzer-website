import { NextComponentType, NextPage } from "next";
import { Fragment, ReactNode } from "react";

import styles from './Header.module.css';

type HeaderProps = {
  subtitle?: string;
};

export const Header: NextPage<HeaderProps> = ({ subtitle }) => {
  return (
    <header className={styles.Header}>
      <a href="/"><h1>Or Linzer</h1></a>
      {subtitle &&
        <h2>{subtitle}</h2>
      }
    </header>
  )
}

export default Header;
