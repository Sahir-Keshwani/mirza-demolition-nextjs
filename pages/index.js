import Image from "next/image";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


import { Roboto_Serif } from "next/font/google";
const mainFont = Roboto_Serif({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={`${mainFont.className}`}>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
