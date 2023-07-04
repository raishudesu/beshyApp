import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function CopyModal({ open }) {
  const [ref, inView] = useInView();
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  if (!open) return null;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.2 }}
      className="text-white absolute w-full h-screen"
    >
      <div className="flex justify-center ">
        <div className="p-4 bg-gray-400 rounded-lg">
          <h1>Text copied to clipboard.</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default CopyModal;
