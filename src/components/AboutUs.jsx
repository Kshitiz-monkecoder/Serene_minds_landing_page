import { motion } from "framer-motion";
import AboutUsImg from "../assets/undraw_Portfolio_update_re_jqnp-Photoroom.png";

function AboutUs() {
  return (
    <div className="bg-[#1a2238] min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row items-center max-w-6xl text-white gap-8">
        {/* Left Section */}
        <motion.div
          className="hidden lg:block relative w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={AboutUsImg} alt="Illustration" className="w-full h-auto" />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="uppercase text-blue-400 text-sm font-bold tracking-wide mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-blue-500 mr-1">■ </span>
            Sit amet gogo
          </motion.div>

          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.h1>

          <motion.p
            className="text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            quidem error incidunt a doloremque voluptatem porro inventore
            voluptate quo deleniti animi laboriosam.{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Possimus ullam velit rem itaque consectetur, in distinctio?
            </a>{" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            repellendus quia quos obcaecati nihil. Laudantium non accusantium,
            voluptate eum nesciunt at suscipit quis est soluta?
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
