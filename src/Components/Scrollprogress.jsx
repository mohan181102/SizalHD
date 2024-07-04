import { useScroll, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Scrollprogress = () => {
  const { scrollYProgress } = useScroll();
  const [widthdata, setwidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let progressvalue = Math.floor((scrollYProgress.current * 100) / 1);
      setwidth(progressvalue);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        let progressvalue = Math.floor((scrollYProgress.current * 100) / 1);
        setwidth(progressvalue);
      });
  }, [widthdata, setwidth]);

  return (
    <div
      className={` w-full bg-white fixed p-0 transition-all m-0 top-0 h-[4px] right-0`}
    >
      <motion.div
        style={{ width: `${widthdata}%` }}
        className={` bg-[#40d4cf] fixed p-0 transition-all m-0 top-0 h-[4px]`}
      ></motion.div>
    </div>
  );
};

export default Scrollprogress;
