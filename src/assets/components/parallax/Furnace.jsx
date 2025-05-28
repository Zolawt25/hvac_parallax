import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Furnace = ({ scrollContainerRef }) => {
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
        className="bg-[url('/hvac_animation_imgs/cloud-4.png')] w-[50%] h-[40%] absolute top-0 left-0 bg-contain bg-no-repeat z-10"
        style={{ x: xCloud }}
      />
      <motion.div
        className="bg-[url('/hvac_animation_imgs/cloud-1.png')] w-[50%] h-[40%] absolute top-0 right-2 bg-contain bg-no-repeat z-10"
        style={{ x: xCloud }}
      />

      {/* Content */}
      <motion.div className="flex justify-between px-20 absolute bottom-0 w-full items-end z-20">
        <motion.div className="w-[50%] flex justify-center" style={{ x: xImg }}>
          <img
            src="/hvac_animation_imgs/furnace.png"
            alt=""
            className="w-[50%]"
          />
        </motion.div>
        <motion.div
          className="w-[50%] flex flex-col  justify-center h-[350px]"
          style={{ x: yText }}
        >
          <motion.p className="text-4xl font-semibold text-gray-900 mb-3 w-[80%]">
            Lennox Furnace
          </motion.p>
          <motion.p className="w-[80%]">
            The EL195NE furnace delivers up to 95% AFUE efficiency, meaning it
            converts nearly all of its fuel into usable heat. This high level of
            performance keeps your home warm and comfortable throughout the
            winter while helping to lower your energy bills—making it a smart
            investment in both comfort and savings.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Furnace;
