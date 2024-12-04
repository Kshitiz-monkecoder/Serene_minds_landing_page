import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import userPng from "../assets/undraw_Profile_pic_re_iwgo-Photoroom.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    text: `"Can't believe it's me, I mean just after speaking to the Dr, I felt so calm and relaxed. He was very patient and understanding. I'm definitely getting more sessions."`,
    author: "Anonymous",
    avatar: userPng, // Replace with your image path
  },
  {
    id: 2,
    text: `"The experience was amazing! I felt heard and understood. Highly recommend their services."`,
    author: "John Doe",
    avatar: userPng, // Replace with your image path
  },
  {
    id: 3,
    text: `"I loved every bit of the session. Can't wait for my next appointment!"`,
    author: "Jane Smith",
    avatar: userPng, // Replace with your image path
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isInView, setIsInView] = useState(false); // State for scroll detection
  const sectionRef = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // IntersectionObserver to detect when the testimonials section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Trigger animation when in view
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white w-full mt-16 pb-14 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full text-center px-4">
        <div className="border-[#242b3f84] border-t-2 py-6 relative">
          {/* Testimonial Card */}
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col mt-5 items-center"
          >
            <motion.img
              src={testimonials[current].avatar}
              alt="Avatar"
              className="w-32 rounded-full mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              className="text-gray-700 text-lg italic max-w-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {testimonials[current].text}
            </motion.p>
            <motion.p
              className="mt-4 font-semibold"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              — {testimonials[current].author}
            </motion.p>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <MdArrowBackIos className="w-9 h-9 text-[#1a2238]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <MdArrowForwardIos className="w-9 h-9 text-[#1a2238]" />
          </button>
        </div>

        {/* Indicators */}
        <motion.div
          className="flex justify-center items-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </motion.div>

        {/* See More Button */}
        <motion.button
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          See more
        </motion.button>
      </div>
    </div>
  );
}

export default Testimonials;
