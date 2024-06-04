"use client";
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins, Roboto } from "next/font/google";
import Spline from "@splinetool/react-spline";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PulseBeams } from "@/components/ui/pulseBeam";

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
  return (
    <div className="flex items-center justify-center flex-col relative z-10 gap-y-10">
      <div
        className={cn(
          "flex items-center justify-center flex-col text-white",
          headingFont.className
        )}
      >
        <div className="text-3xl md:text-6xl text-center mb-6 flex items-center">
          <h1>From Ideas to</h1>&nbsp;
          <h1 className="text-[#FC4F24]">Done</h1> &nbsp;{" "}
          <img className="w-auto h-24" src="/Check.png" />
        </div>
        <div className="text-3xl md:text-6xl px-4 p-2 rounded-md w-fit flex">
          <h1>Tazk's Makes It</h1>&nbsp;{" "}
          <h1 className="text-[#FC4F24] underline">Happen.</h1>
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Plan projects, build workflows and manage resources with powerful
        features your whole team can use.
      </div>
      <Button
        className="mt-6 bg-[#FC4F24] hover:bg-[#b83b1c]"
        size="lg"
        asChild
      >
        <Link href="/sign-up">Get Started</Link>
      </Button>
      <div className="w-auto h-[1000px] flex items-center justify-center overflow-visible">
        <div className="absolute z-10 w-full">
          <PulseBeams />
        </div>
        {/* <div className="absolute z-20 w-full">
          <Spline scene="https://prod.spline.design/xCXMzigFrR4lX1JG/scene.splinecode" />
        </div> */}
      </div>
      <div className=" bg-[#F5F7F9] w-3/4 h-[270px] flex flex-col items-center justify-around py-6 rounded-3xl">
        <h2 className={cn("font-semibold text-[60px]", roboto.className)}>
          Trusted by Companies like
        </h2>
        <div className="w-full h-auto flex justify-between items-center px-10">
          <img className="w-auto h-20" src="/Logos/Github.png" />
          <img className="w-auto h-20" src="/Logos/Notion.png" />
          <img className="w-auto h-20" src="/Logos/Calendar.png" />
          <img className="w-auto h-20" src="/Logos/Slack.png" />
          <img className="w-auto h-20" src="/Logos/Outlook.png" />
        </div>
      </div>
      <div
        className={cn(
          "w-[700px] h-auto py-4 flex flex-col items-center justify-center text-white",
          roboto.className
        )}
      >
        <h2 className="font-bold text-[45px]">
          What you need, when you need it
        </h2>
        <h4 className="text-[26px] font-normal text-[#B7B7B7] text-center">
          Effortlessly manage tasks and tools in one place, minimizing
          distractions and maximizing productivity.
        </h4>
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-x-[16vw]">
        <div className="bg-transparent p-6 rounded-[40px] w-auto bg-opacity-50">
          <div className="w-auto h-auto bg-[#2D2E32] rounded-[24px] overflow-hidden">
            <Image width={600} height={10} src="/BoardOne.svg" alt="BoardOne" />
          </div>
        </div>
        <div className="flex flex-col text-white w-[540px] gap-y-4">
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
            keep them there. Use the Roadmap to bring everyone.
          </h4>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-x-[16vw]">
        <div className="flex flex-col text-white w-[540px] gap-y-4">
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
        </div>
        <div className="bg-transparent p-6 rounded-[40px] w-auto bg-opacity-50">
          <div className="w-auto h-auto bg-[#2D2E32] rounded-[32px] overflow-hidden">
            <Image width={600} height={10} src="/BoardTwo.svg" alt="BoardTwo" />
          </div>
        </div>
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
