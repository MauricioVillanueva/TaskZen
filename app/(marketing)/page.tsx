"use client";

import localFont from "next/font/local";
import { Poppins, Roboto } from "next/font/google";
import Spline from "@splinetool/react-spline";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { PulseBeams } from "@/components/ui/pulseBeam";
import { BackgroundGradientAnimation } from "@/components/ui/backgroundGradient";
import { HeroScrollDemo } from "@/components/ui/heroScrollDemo";
import { HeroSection } from "@/components/ui/heroSection";

import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Lenis from "../../node_modules/lenis";

const headingFont = localFont({ src: "../../public/fonts/font.woff2" });

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const MarketingPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="flex items-center justify-center flex-col relative z-10 gap-y-[40px] overflow-x-hidden">
      <div
        className={cn(
          "flex items-center justify-center flex-col text-white",
          headingFont.className
        )}
      >
        <div className="text-3xl md:text-6xl text-center mb-2 flex items-center">
          <h1>From Ideas to</h1>&nbsp;
          <h1 className="text-[#FC4F24]">Done</h1> &nbsp;{" "}
          <img className="w-auto h-24" src="/Check.png" />
        </div>
        <div className="text-3xl md:text-6xl px-4 rounded-md w-fit flex">
          <h1>Tazk's Makes It</h1>&nbsp;{" "}
          <h1 className="text-[#FC4F24] underline">Happen.</h1>
        </div>
      </div>

      <HeroSection />
      <div className="w-auto h-[1080px] flex items-center justify-center overflow-visible">
        <BackgroundGradientAnimation />
        <div className="absolute z-10 w-full">
          <PulseBeams />
        </div>
        <div className="absolute z-20 w-full">
          <Spline scene="https://prod.spline.design/xCXMzigFrR4lX1JG/scene.splinecode" />
        </div>
      </div>
      <HeroScrollDemo />

      <div
        className={cn(
          "w-[900px] h-auto pb-20 flex flex-col items-center justify-center text-white gap-y-10",
          roboto.className
        )}
      >
        <h2 className="font-bold text-[60px]">
          What you need, when you need it
        </h2>
        <h4 className="text-[26px] font-normal text-[#B7B7B7] text-center w-[800px]">
          Effortlessly manage tasks and tools in one place, minimizing
          distractions and maximizing productivity.
        </h4>
      </div>
      <div
        className="w-full h-auto flex justify-center items-center gap-x-[16vw] overflow-hidden"
        ref={ref}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="bg-transparent p-6 rounded-[40px] w-auto bg-opacity-50"
        >
          <div className="w-auto h-auto bg-slate-300/[0.2] rounded-[20px] overflow-x-hidden">
            <Image width={600} height={10} src="/BoardOne.svg" alt="BoardOne" />
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col text-white w-[540px] gap-y-4"
        >
          <h2
            className={cn(
              "font-bold text-[45px] leading-[50px]",
              roboto.className
            )}
          >
            Increased Efficiency And Productivity
          </h2>
          <h4 className={cn("font-medium text-[20px]", roboto.className)}>
            Use the Roadmap to bring everyone together on the same page and help
            keep them there.
          </h4>
        </motion.div>
      </div>
      <div
        className="w-full h-auto flex justify-center items-center gap-x-[16vw]"
        ref={ref2}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
          className="flex flex-col text-white w-[540px] gap-y-4"
        >
          <h2
            className={cn(
              "font-bold text-[45px] leading-[50px]",
              roboto.className
            )}
          >
            Keep up to date with all the changes made
          </h2>
          <h4 className={cn("font-medium text-[20px]", roboto.className)}>
            Always keep in mind the progress of your project and that of your
            colleagues.
          </h4>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
          className="bg-transparent p-6 rounded-[40px] w-auto bg-opacity-50"
        >
          <div className="w-auto h-auto bg-slate-300/[0.2] rounded-[20px] overflow-x-hidden">
            <Image width={600} height={10} src="/BoardTwo.svg" alt="BoardTwo" />
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[440px] bg-[#F5F9FC] flex justify-center items-center my-20 gap-x-[16vw]">
        <div className="w-[520px] h-auto flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-3">
            <h2 className={cn("font-bold text-[45px]", roboto.className)}>
              Try it for free now
            </h2>
            <p className={cn("font-normal text-[20px]", roboto.className)}>
              See how powerful our app to managed your task. Makes your life
              easy, daily planning and helps to achieve your goal and organize
              everything that matters to you.
            </p>
          </div>
          <div className="flex gap-x-6">
            <Image
              width={140}
              height={40}
              src="/GooglePlay.png"
              alt="GooglePlay"
            />
            <Image width={140} height={40} src="/AppStore.png" alt="Appstore" />
          </div>
        </div>
        <img
          src="/MobileApp.png"
          alt="Mobile App"
          className="h-[580px] w-[580px]"
        />
      </div>
    </div>
  );
};

export default MarketingPage;
