import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="rounded-2xl fixed top-6 left-1/2 transform -translate-x-1/2 w-[510px] h-14 px-4 shadow-sm backdrop-blur-md bg-slate-300/[0.1] flex items-center z-[999]">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button
            size="sm"
            className="bg-slate-300/[0.1] hover:bg-white/[0.15]"
            asChild
          >
            <Link href="/sign-in" className="hover:font-bold">
              LogIn
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-slate-300/[0.1] hover:bg-white/[0.15]"
            asChild
          >
            <Link href="/sign-up" className="hover:font-bold">
              Get Tazk for free
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
