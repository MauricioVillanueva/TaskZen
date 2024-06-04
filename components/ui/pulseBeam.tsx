"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
};

const grad2 = {
  initial: {
    x1: "100%",
    x2: "0%",
    y1: "0%",
    y2: "0%",
  },
  animate: {
    x1: ["100%", "50%", "20%"],
    x2: ["100%", "0%", "0%"],
    y1: ["0%", "0%", "80%"],
    y2: ["0%", "20%", "60%"],
  },
};

// const grad2 = {
//   initial: {
//     x1: "0%",
//     x2: "0%",
//     y1: "80%",
//     y2: "100%",
//   },
//   animate: {
//     x1: ["20%", "100%", "100%"],
//     x2: ["0%", "90%", "90%"],
//     y1: ["80%", "80%", "-20%"],
//     y2: ["100%", "100%", "0%"],
//   },
// };

const grad3 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const grad4 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%",
  },
};

const grad5 = {
  initial: {
    x1: "0%",
    x2: "100%",
    y1: "0%",
    y2: "100%",
  },
  animate: {
    x1: ["1%", "0%", "40%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
};

const grad6 = {
  initial: {
    x1: "100%",
    x2: "0%",
    y1: "0%",
    y2: "100%",
  },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
};

const grad7 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%",
  },
};

const grad8 = {
  initial: {
    x1: "100%",
    x2: "0%",
    y1: "0%",
    y2: "100%",
  },
  animate: {
    x1: ["0%", "0%", "0%"],
    x2: ["0%", "0%", "20%"],
    y1: ["0%", "0%", "160%"],
    y2: ["0%", "20%", "200%"],
  },
};


export const PulseBeams = () => {
  return (
    <div className="flex h-[60rem] w-full relative items-center justify-center antialiased overflow-hidden">
      {/* Core SVGs component */}
      <div className="absolute inset-0 flex items-center justify-center w-full">
        <SVGs />
      </div>
    </div>
  );
};

export const SVGs = () => {
  return (
    <svg
      height="60rem"
      width="1280"
      viewBox="0 0 1280 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
      {/* <path
        d="M469 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="var(--slate-800)"
      />
      <path
        d="M568 200H841C846.523 200 851 195.523 851 190V40"
        stroke="var(--slate-800)"
      />
      <path
        d="M668 200H941C951.523 200 951 195.523 951 190V40"
        stroke="var(--slate-800)"
      />
      <path
        d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="var(--slate-800)"
      />
      <path
        d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="var(--slate-800)"
      />
      <path
        d="M380 168V17C380 11.4772 384.477 7 390 7H414"
        stroke="var(--slate-800)"
      /> */}

      {/* Gradient Beams */}

      <path
        d="M469 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="url(#grad1)"
      />

      <path
        d="M768 200H1041C1046.523 200 1051 195.523 1051 190V40"
        stroke="url(#grad2)"
      />

      <path
        d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="url(#grad3)"
      />

      <path
        d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="url(#grad4)"
      />

      <path
        d="M414 168V17C414 11.4772 409.523 7 404 7H380"
        stroke="url(#grad5)"
      />

      <path
        d="M640 168V-67C640 -72.5 644.477 -75 650 -75H674"
        stroke="url(#grad6)"
      />

      <path
        d="M811 220.5H1263.5C1273.5 220.5 1273.5 224.977 1273.5 230.5V398.5"
        stroke="url(#grad7)"
      />

      <path
         d="M373 180H20C13 180 10 175 10 170V20"
         stroke="url(#grad8)"
      />
      

      <defs>
        <motion.linearGradient
          variants={grad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad2"
        >
          <InvertedGradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad3}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad4}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad4"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad5}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad5"
        >
          <InvertedGradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad6}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad6"
        >
          <InvertedGradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad7}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad7"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad8}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad8"
        >
          <InvertedGradientColors />
        </motion.linearGradient>
      </defs>
      <circle
        cx="1273"
        cy="1"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="950"
        cy="54rem"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="150"
        cy="54rem"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="10"
        cy="57.5rem"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="390"
        cy="1"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="770"
        cy="1"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="1273"
        cy="57.5rem"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
      cx="10"
      cy="1"
      r="6.5"
      fill="var(--slate-700)"
      stroke="var(--slate-600)"
    />
    </svg>
  );
};
const GradientColors = () => {
  return (
    <>
      <stop stopColor="#18CCFC" stopOpacity="0"></stop>
      <stop stopColor="#18CCFC"></stop>
      <stop offset="0.325" stopColor="#6344F5"></stop>
      <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
    </>
  );
};

const InvertedGradientColors = () => {
  return (
    <>
      <stop offset="0" stopColor="#AE48FF" stopOpacity="0"></stop>
      <stop offset="0.675" stopColor="#6344F5"></stop>
      <stop offset="1" stopColor="#18CCFC"></stop>
      <stop offset="1" stopColor="#18CCFC" stopOpacity="0"></stop>
    </>
  );
};
