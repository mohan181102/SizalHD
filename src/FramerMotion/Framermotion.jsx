import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Framermotion = ({ children, width = "100%" }) => {
  const ref = useRef(null);
  const Inview = useInView(ref, { once: true });
  const maincontroll = useAnimation();

  useEffect(() => {
    if (Inview) {
      maincontroll.start("visible");
    }
  }, [Inview]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        animate={maincontroll}
        initial="hidden"
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Framermotion;
