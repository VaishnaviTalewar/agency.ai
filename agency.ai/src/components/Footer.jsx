import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        mt-20 sm:mt-40
        bg-slate-100 dark:bg-gray-900
        px-4 sm:px-10 lg:px-24 xl:px-40
        pt-12
      "
    >
      {/* Top Section */}
      <div
        className="
          flex flex-col lg:flex-row
          lg:items-start lg:justify-between
          gap-12
        "
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-32 sm:w-44"
          />

          <p className="max-w-md leading-7">
            From strategy to execution, we craft digital solutions
            that move your business forward.
          </p>

          <ul className="flex flex-wrap gap-6">
            <li>
              <a
                href="#hero"
                className="transition-colors hover:text-primary"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="transition-colors hover:text-primary"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#our-work"
                className="transition-colors hover:text-primary"
              >
                Our Work
              </a>
            </li>

            <li>
              <a
                href="#contact-us"
                className="transition-colors hover:text-primary"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-lg text-gray-600 dark:text-gray-400"
        >
          <h3 className="text-lg font-semibold">
            Subscribe to our newsletter
          </h3>

          <p className="mt-2 mb-6 text-sm leading-6">
            The latest news, articles, and resources,
            sent to your inbox weekly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                rounded-md
                border border-gray-300 dark:border-gray-700
                bg-transparent
                p-3
                text-sm
                outline-none
                dark:text-gray-200
                focus:border-primary
              "
            />

            <button
              className="
                rounded-md
                bg-primary
                px-6 py-3
                text-white
                transition-transform duration-300
                hover:scale-105
              "
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="
          flex flex-col sm:flex-row
          items-center justify-between
          gap-5
          pb-6
          text-sm text-gray-500
        "
      >
        <p>© 2026 Agency.ai. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <img
            src={assets.facebook_icon}
            alt="facebook"
            className="cursor-pointer transition-transform hover:scale-110"
          />

          <img
            src={assets.twitter_icon}
            alt="twitter"
            className="cursor-pointer transition-transform hover:scale-110"
          />

          <img
            src={assets.instagram_icon}
            alt="instagram"
            className="cursor-pointer transition-transform hover:scale-110"
          />

          <img
            src={assets.linkedin_icon}
            alt="linkedin"
            className="cursor-pointer transition-transform hover:scale-110"
          />
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;