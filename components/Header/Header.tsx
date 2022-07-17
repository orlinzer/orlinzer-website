import { NextComponentType, NextPage } from "next";
import Link from "next/link";
import { Fragment, ReactNode } from "react";

import styles from './Header.module.css';

type HeaderProps = {
  subtitle?: string;
};

export const Header: NextPage<HeaderProps> = ({ subtitle }) => {
  return (
    <header className={styles.Header}>
      <Link href="/"><h1>Or Linzer</h1></Link>
      {subtitle &&
        <h2>{subtitle}</h2>
      }
    </header>
  )
}

export default Header;
