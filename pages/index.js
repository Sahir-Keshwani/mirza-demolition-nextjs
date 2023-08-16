import Image from "next/image";
import Head from "next/head";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import JumpToTopButton from "./components/JumpToTopButton";


import { Roboto_Serif } from "next/font/google";
const mainFont = Roboto_Serif({ subsets: ["latin"], weight: "400" });


export default function Home() {

  return (
    <div className={`${mainFont.className}`}>
      <Head>
        <title>Mirza Demolition</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Nav />
      <Header />
      <Main />
      <Footer />
      <JumpToTopButton />
    </div>
  );
}
