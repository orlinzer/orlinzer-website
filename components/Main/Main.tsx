import { NextComponentType, NextPage } from "next";
import { Fragment, ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export const Main: NextPage<MainProps> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Main;
