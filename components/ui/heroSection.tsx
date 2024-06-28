import { FlipWords } from "./flipWords";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const HeroSection = () => {
  const words = [
    "Plan projects",
    "Build workflows",
    "Manage resources",
    "Collaborate effectively",
  ];
  return (
    <div className="h-auto flex flex-col gap-y-4 justify-center items-center px-4 w-[800px]">
      <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 text-center">
        Empower your team with powerful features to
        <FlipWords words={words} />
      </div>
      <Button
          className="my-6 bg-[#EDEDED] hover:bg-[#CCCCCC] text-base text-black w-auto"
          size="lg"
          asChild
        >
          <Link
            href="/sign-up"
            className={cn("font-medium ", textFont.className)}
          >
            Get Started
          </Link>
        </Button>
    </div>
  );
};
