"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef} id="experience">
      <div className="flex flex-col gap-2">
        <h2 className="text-heading">Work Experience</h2>
        <p className="subtext">
          5+ years delivering full-stack solutions, mobile apps, and enterprise systems for international clients across Singapore, Vietnam, the United States, and Bangladesh.
        </p>
      </div>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-8"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-36 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight shadow-lg border border-white/10">
                <div className="w-3.5 h-3.5 rounded-full bg-lavender/80 shadow-[0_0_10px_#7a57db]" />
              </div>
              <div className="flex-col hidden gap-1.5 md:flex md:pl-16 text-neutral-300">
                <span className="text-sm font-semibold tracking-wide uppercase text-lavender">
                  {item.date}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <h4 className="text-base font-medium text-neutral-400">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lavender transition-colors inline-flex items-center gap-1"
                    >
                      {item.job}
                      <img src="assets/arrow-up.svg" className="w-3.5 h-3.5 inline opacity-70" alt="external link" />
                    </a>
                  ) : (
                    item.job
                  )}
                </h4>
                {item.location && (
                  <p className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                    📍 {item.location}
                  </p>
                )}
              </div>
            </div>

            <div className="relative w-full pl-16 pr-4 md:pl-4">
              <div className="block mb-4 text-left md:hidden">
                <span className="text-xs font-semibold uppercase text-lavender tracking-wider">
                  {item.date}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {item.title}
                </h3>
                <h4 className="text-sm font-medium text-neutral-300">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lavender hover:underline"
                    >
                      {item.job}
                    </a>
                  ) : (
                    item.job
                  )}
                </h4>
                {item.location && (
                  <p className="text-xs text-neutral-400 mt-0.5">
                    📍 {item.location}
                  </p>
                )}
              </div>
              <ul className="space-y-3">
                {item.contents.map((content, idx) => (
                  <li
                    className="flex items-start gap-2.5 font-normal text-sm md:text-base text-neutral-300 leading-relaxed"
                    key={idx}
                  >
                    <span className="text-lavender text-sm mt-1">▹</span>
                    <span>{content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
