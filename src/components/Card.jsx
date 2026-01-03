import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const Card = ({ style, text, image, containerRef, className }) => {
  return image && !text ? (
    <motion.img
      className={twMerge("absolute w-15 cursor-grab", className)}
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className={twMerge(
        "absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab",
        className
      )}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
