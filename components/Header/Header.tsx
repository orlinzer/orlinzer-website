import { NextComponentType, NextPage } from "next";
import { Fragment, ReactNode } from "react";

type HeaderProps = {
  subtitle?: string;
};

export const Header: NextPage<HeaderProps> = ({ subtitle }) => {
  return (
    <header>
      <h1>Or Linzer</h1>
      {subtitle &&
        <h2>{subtitle}</h2>
      }
    </header>
  )
}

export default Header;
