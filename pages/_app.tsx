import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/src/Common/Header";
import Footer from "@/src/Common/Footer";
import { CookieProvider } from "@/src/Common/Cookie";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookieProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CookieProvider>
    </>
  );
}
