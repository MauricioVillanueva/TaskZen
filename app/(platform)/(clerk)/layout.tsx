import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-black w-full h-auto flex items-center justify-between top-10 fixed px-[10vw] z-[999]">
        <Logo />
        <Button
          size="sm"
          className="bg-[#181818] hover:bg-white/[0.15]"
          asChild
        >
          <Link href="/" className="hover:font-bold">
            Close
          </Link>
        </Button>
      </div>
      <div className="h-full flex items-center justify-center bg-black gap-x-[60px]">
        <div className="w-[340px] h-auto flex flex-col items-start text-white gap-y-4">
          <div className="transition items-center justify-center gap-x-2 hidden md:flex">
            <Image src="/TazkWhite.svg" alt="Logo" height={80} width={80} />
            <p className={cn("text-5xl", headingFont.className)}>Tazk</p>
          </div>
          <div className="w-auto h-auto pl-4 flex flex-col gap-y-4">
            <h1 className="text-4xl font-semibold">Wellcome to Tazk.</h1>
            <p className="text-lg">
              Sign-up or login to manage your project, task, and productivity.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default ClerkLayout;
