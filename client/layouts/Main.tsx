import React from "react";
import Head from "next/head";
import { Model, Notification } from "../components/model";

type MainProps = {
  SEO?: any;
  children: JSX.Element;
};

const Main = ({ SEO, children }: MainProps) => {
  return (
    <>
      <Head>
        <title>Mandalarthu | {SEO.title}</title>
      </Head>
      <div className="w-full h-screen overflow-hidden">{children}</div>
      <Notification />
      <Model />
    </>
  );
};

export default Main;
