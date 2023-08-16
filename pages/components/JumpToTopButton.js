import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { motion } from "framer-motion";

//! navigation API
// checks if the app is running in browser or not
const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
// the actual function which makes the window scroll
function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}



const JumpToTopButton = () => {
    const [backToTop, setBackToTop] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
          setBackToTop(true);
        } else {
          setBackToTop(false);
        }
      })

    }, []);
  return (
    <div>
      {backToTop && (
      <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
        className="fixed bottom-10 right-10  bg-amber-500"
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp size={40} className=" text-3xl " />
      </motion.button>
      )}
    </div>
  )
}

export default JumpToTopButton
