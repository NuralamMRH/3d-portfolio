import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [
    "AI-Powered",
    "Scalable",
    "Full-Stack",
    "High-Performance",
    "Modern",
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-16 md:mt-32 text-center md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 text-xs font-medium rounded-full border border-lavender/30 bg-midnight/80 text-neutral-300 w-fit backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
          <span>Full-Stack Developer · AI Engineer · IT Consultant</span>
        </motion.div>

        <motion.h1
          className="text-4xl lg:text-5xl font-bold tracking-tight text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-lavender">MD Nuralam</span>
        </motion.h1>

        <div className="flex flex-col items-start mt-2">
          <motion.p
            className="text-4xl lg:text-5xl font-semibold text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Engineering <br /> Production-Grade
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
            className="my-1"
          >
            <FlipWords
              words={words}
              className="font-black text-transparent bg-clip-text bg-gradient-to-r from-lavender via-royal to-mint text-7xl lg:text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl lg:text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Web & Mobile Platforms
          </motion.p>
        </div>

        <motion.p
          className="max-w-xl mt-4 text-base text-neutral-400"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          5+ years building secure systems, AI/ML pipelines, and mobile apps for clients in Singapore, Vietnam, the US, and Bangladesh. Founder of{" "}
          <a
            href="https://www.rancoded.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender hover:underline font-medium"
          >
            RANCODED
          </a>
          .
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.0 }}
          className="flex items-center gap-4 mt-6"
        >
          <a
            href="#work"
            className="px-6 py-3 text-sm font-medium text-white transition-all duration-200 rounded-full bg-gradient-to-r from-royal to-lavender hover:shadow-[0_0_20px_rgba(122,87,219,0.5)] hover:-translate-y-0.5 cursor-pointer"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-neutral-300 transition-all duration-200 border rounded-full border-white/20 bg-midnight/60 hover:text-white hover:border-white/40 hover:-translate-y-0.5 cursor-pointer backdrop-blur-md"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden px-4">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border border-lavender/30 bg-midnight/80 text-neutral-300 mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
          <span>Full-Stack · AI · IT Consultant</span>
        </motion.div>

        <motion.p
          className="text-3xl font-bold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m MD Nuralam
        </motion.p>
        <div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-lavender text-6xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Web & Mobile Apps
          </motion.p>
        </div>

        <motion.p
          className="text-sm text-neutral-400 max-w-sm mx-auto"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          5+ years building secure applications & AI solutions for global clients. Founder of RANCODED.
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.0 }}
          className="flex items-center justify-center gap-3 pt-2"
        >
          <a
            href="#work"
            className="px-5 py-2.5 text-xs font-medium text-white rounded-full bg-gradient-to-r from-royal to-lavender cursor-pointer"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-medium text-neutral-300 border border-white/20 rounded-full bg-midnight/80 cursor-pointer"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
