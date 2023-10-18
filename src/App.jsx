import React from "react";
import Movies from "./pages/Movies";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { darkspider } from "./assets";
import { motion } from "framer-motion";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-white">
      <div>
        <Navbar />
      </div>
      <div className="relative">
        <div className="mt-[80px]">
          <Hero />
        </div>
        <motion.div
          className="absolute w-[38%] hover:w-[30%] transition duration-1000 transition-all z-20 hidden md:block justify-start items-center flex inset-x-[60%] top-[17%]"
          whileHover={{ scale: 0.8, rotate: 45 }}
          whileTap={{ scale: 0.6, rotate: -240, borderRadius: "100%" }}
        >
          <img src={darkspider} alt="" className="object-contain w-full" />
        </motion.div>

        <div>
          <Movies />
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
