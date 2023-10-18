import React from "react";
import { marvelred } from "../assets";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div id="about" className="w-full relative">
      <img
        src={marvelred}
        alt=""
        className="w-full h-[400px] object-cover opacity-40 relative"
      />

      <div className="absolute font-brush underline -rotate-45 top-20 h-1/2 text-gray-300/80">
        <SectionTitle title="ABOUT" />
      </div>
      <div className="absolute inset-0 text-center flex items-center justify-center text-3xl font-mova w-[90%]">
        <h1>List of most priced MARVEL Movies of all time</h1>
      </div>
    </div>
  );
};

export default About;
