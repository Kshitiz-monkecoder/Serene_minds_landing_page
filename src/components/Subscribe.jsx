import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Subscribe = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when in view
        } else {
          setIsInView(false); // Reset animation when out of view
        }
      },
      {
        threshold: 0.5, // When 50% of the component is in the viewport
      }
    );

    const element = document.getElementById("subscribe-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      id="subscribe-section"
      className="bg-gray-900 px-52 py-48 flex items-center justify-center"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          className="text-white text-5xl font-extrabold leading-tight md:text-5xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Ready to Transform Your Practice ?
        </motion.h1>
        <motion.p className="text-white text-lg leading-tight mt-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}>
        Sign up today and see the difference Serene <span className="text-blue-500 font-medium">
          MINDS</span> can make for
        your mental health practice.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started For Free →
          </motion.button>
          <motion.button
            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Features →
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Subscribe;
