import { useRef, useState } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 h-full"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      {/* Glow Effect */}
      <div
        className={`pointer-events-none absolute z-0 w-[300px] h-[300px] rounded-full blur-3xl 
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
        transition-opacity duration-300 ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{
          left: position.x - 150,
          top: position.y - 150,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex items-start gap-8 p-8 m-[2px] rounded-[10px] bg-white dark:bg-gray-900 h-[calc(100%-4px)]">
        
        {/* Left Side */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full min-w-20 h-20 flex items-center justify-center">
          <img
            src={service.icon}
            className="w-10 h-10"
            alt={service.title}
          />
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800 dark:text-white">
            {service.title}
          </h3>

          <p className="text-sm mt-3 leading-7 text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;