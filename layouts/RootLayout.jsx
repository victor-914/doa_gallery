import React from "react";
import Nav from "../components/navBar/Nav";
import Head from "next/head";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import { Loader } from "../utils/Loader";
import Breadcrumbs from "nextjs-breadcrumbs";

function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-Resource</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="En" />
      </Helmet>
      <ToastContainer />
      <Nav />
      <Loader />
      <Breadcrumbs
        rootLabel=""
        omitIndexList={[3]}
        activeItemClassName="brActive"
        useDefaultStyle={true}
        containerStyle={{
          width: "95%",
          margin: "auto",
          height: "auto",
          paddingTop: "11vh",
        }}
        listStyle={{
          display: "flex",
          marginLeft: "5px",
          padding: "5px",
          textTransform: "uppercase",
          fontSize: "12px",
        }}
        activeItemStyle={{
          padding: "5px",
          color: "#096c3a",
          fontWeight: "800",
        }}
        inactiveItemStyle={{
          padding: "5px",
        }}
        transformLabel={(title) => title}
      />
      {children}
      {/* <Footer/> */}
    </div>
  );
}

export default RootLayout;
