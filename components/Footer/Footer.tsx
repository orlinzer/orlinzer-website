import { NextComponentType, NextPage } from "next";
import { Fragment, ReactNode } from "react";

import styles from './Footer.module.css';

export const Footer: NextPage = () => {
  return (
    <footer className={styles.Footer}>
      Created By Or Linzer
    </footer>
  )
}

export default Footer;
