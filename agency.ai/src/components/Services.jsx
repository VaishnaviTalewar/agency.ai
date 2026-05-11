import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesDataArray = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage, and grow your business online.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description:
        "We help you execute strategic marketing plans that build brand awareness and deliver measurable results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "We create compelling, SEO-friendly, and engaging content that connects with your audience and strengthens your brand voice.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We create impactful social media strategies that boost engagement, grow your audience, and strengthen your online presence.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative overflow-hidden flex flex-col items-center gap-7 
      px-4 sm:px-12 xl:px-40 
      pt-16 pb-8 sm:pt-20 sm:pb-12 
      text-gray-700 dark:text-white"
    >
      {/* Background Glow */}
      <img
        src={assets.bgImage2}
        alt="background"
        className="absolute top-10 left-[-120px] w-[700px] opacity-90 z-0 dark:hidden"
      />

      {/* Section Title */}
      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl relative z-10">
        {servicesDataArray.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;