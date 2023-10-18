import { motion } from "framer-motion";
import { useState } from "react";
// import { styles } from '../styles'
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { heart } from "../assets";
import { movies } from "../constants";

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} mx-auto relative z-0  w-[500%]`}
        // style={{ marginLeft: "-20%" }}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

const MovieCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 40,
          scale: 1,
          speed: 450,
        }}
        className="text-grayscale-50 p-5 rounded-lg md:w-[280px] w-[90%] hover:shadow-md hover:shadow-gray-400 border border-gray-900 md:border-none hover:border-none m-auto"
        // style={{ marginTop: "" }}
      >
        <div className="relative w-full h-[250px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={githubIcon}
                alt="github"
                className="w-15 h-15 object-contain"
                />
            </div>
          </div> */}
        </div>

        <div className="mt-3 h-[200px]">
          <h3 className="text-white font-bold text-[18px] ">{name}</h3>
          <p className="mt-2 text-secondary text-xs leading-[18px] text-gray-200">
            {description}
          </p>
        </div>
        <div className="mt-2 flex flex-wrap gap-1"></div>
        <div className="mt-3 flex justify-between items-center">
          <div className="flex m-3">
            <div className=" flex justify-center items-center">
              <span
                className="inline-flex relative justify-center items-center shrink-0 cursor-pointer"
                onClick={handleLike}
              >
                🔥
              </span>
              <span className="text-white text-xs">{like}</span>
            </div>

            <div className=" flex justify-center items-center ml-1">
              <span
                className="inline-flex relative justify-center items-center shrink-0 cursor-pointer"
                onClick={() => {
                  setUnlike(unlike + 1);
                }}
              >
                😡
              </span>
              <span className="text-white text-xs">{unlike}</span>
            </div>
          </div>

          <a
            type="buttton"
            className="shadow-md m-3 py-1 px-4 bg-tertiary rounded-lg text-sm bg-red-900/50"
            href=""
            target="_blank"
          >
            Comment
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <>
      <div id="movies" className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className=""></motion.p>
      </div>

      <div className="mt-20 w-full flex flex-wrap justify-center gap-10 md:gap-5 md:gap-y-10 ">
        {movies.map((movies, index) => (
          <MovieCard key={`movies-${index}`} index={index} {...movies} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
