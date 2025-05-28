import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Ac = ({ scrollContainerRef }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yCloud = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const xCloud = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // move right
  const xImg = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // move right

  return (
    <div className="h-full w-full relative overflow-hidden" ref={sectionRef}>
      {/* Clouds */}
      <motion.div
        className="bg-[url('/hvac_animation_imgs/cloud-1.png')] w-[50%] h-[40%] absolute top-0 left-0 bg-contain bg-no-repeat z-10"
        style={{ x: xCloud }}
      />
      <motion.div
        className="bg-[url('/hvac_animation_imgs/cloud-3.png')] w-[50%] h-[40%] absolute top-0 right-2 bg-contain bg-no-repeat z-10"
        style={{ x: xCloud }}
      />

      {/* Content */}
      <motion.div className="flex justify-between px-20 absolute bottom-0 w-full items-end z-20">
        <motion.div className="w-[50%] flex justify-center" style={{ x: xImg }}>
          <img src="/hvac_animation_imgs/ac.png" alt="" className="w-[50%]" />
        </motion.div>
        <motion.div
          className="w-[50%] flex flex-col justify-center h-[350px]"
          style={{ x: yText }}
        >
          <motion.p className="text-4xl font-semibold text-gray-900 mb-3">
            Goodman Air Conditioner
          </motion.p>
          <motion.p className="w-[80%]">
            Looking for reliable, energy-efficient cooling for your home? The
            Goodman GLXS3B delivers powerful performance, built-in durability,
            and smart design features that make it a top choice for homeowners
            who want value without compromise.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Ac;
