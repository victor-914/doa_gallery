import "../styles/globals.css";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "../layouts/RootLayout";
function MyApp({ Component, pageProps: { ...pageProps } }) {
  const getLayout =
    Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);
  return getLayout(<Component {...pageProps} suppressHydrationWarning />);
}

export default MyApp;
