import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="transition items-center justify-center gap-x-2 hidden md:flex">
        <Image src="/TazkWhite.svg" alt="Logo" height={40} width={40} />
        <p className={cn("text-2xl text-white/85 transition-colors duration-200 hover:text-white", headingFont.className)}>Tazk</p>
      </div>
    </Link>
  );
};
