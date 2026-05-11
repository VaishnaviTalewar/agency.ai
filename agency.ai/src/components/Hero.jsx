import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-16 sm:py-20 lg:py-28 px-4 sm:px-12 lg:px-24 xl:px-40
      text-center w-full overflow-hidden
      bg-white dark:bg-black text-gray-700 dark:text-white"
    >
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 p-1.5 pr-4 rounded-full"
      >
        <img className="w-20" src={assets.group_profile} alt="group" />
        <p className="text-xs font-medium">Trusted by 10k people</p>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-[90%] sm:max-w-lg pb-1"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
        className="relative flex justify-center items-center w-full mt-2"
      >
        {/* Blue Background Image */}
        <img
          src={assets.bgImage1}
          alt="bg"
          className="absolute top-[-200px] right-[-200px] w-[700px] dark:hidden z-0"
        />

        {/* Main Image */}
        <img
          src={assets.hero_img}
          className="w-full max-w-6xl relative z-10 rounded-xl"
          alt="hero"
        />
      </motion.div>
    </div>
  );
};

export default Hero;