import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full h-auto hidden lg:block">
      <div className="w-full h-auto bg-[#0E0E0E] px-[60px] py-[44px] flex flex-col items-center justify-center gap-y-10">
        <div className="w-full h-auto flex justify-between items-center">
          <div className="w-[320px] text-white font-poppins font-semibold text-[24px]">
            Join our newsletter to keep up to date with us!
          </div>
          <div className="gap-x-4 w-auto h-auto flex items-center justify-around">
            <div className="py-[10px] w-[360px] h-auto rounded-full border-[#484848] border-[1px] gap-x-2 flex justify-start items-center px-4">
              <Image
                className="w-6 h-auto"
                width={24}
                height={12}
                src="/Footer/Email.webp"
                alt="Email"
              />
              <input
                className="text-white bg-transparent border-none outline-none font-poppins text-[14px] font-normal"
                placeholder="Enter your email"
              />
            </div>
            <button className="w-auto h-auto font-poppins font-medium text-white text-sm py-[12px] px-[28px] rounded-full transition-all duration-500 bg-gradient-to-br to-red-800 via-red-500 from-[#FC4F24] bg-size-200 hover:bg-right-bottom">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full h-[0px] border border-white border-opacity-30"></div>
        <div className="w-full h-auto flex justify-between items-center">
          <div className="w-[380px] h-auto flex flex-col justify-center items-start font-poppins gap-y-[16px]">
            <Image width={60} height={12} src="/Footer/Tazk.png" alt="Logo" />
            <div className="self-stretch text-white text-2xl font-semibold">
            Experience the future of task management with Tazk
            </div>
            <div className="text-white text-base font-normal">Tazk, 2023.</div>
            <div className="text-white text-base font-normal">
              Designed/Developed by Mauricio Villanueva
            </div>
          </div>
          <div className="w-auto h-auto flex gap-x-[64px]">
            <div className="w-auto h-auto flex flex-col text-white gap-y-[16px]">
              <h3 className="font-poppins text-sm font-medium gap-y-[18px]">
                Platform
              </h3>
              <div className="flex flex-col font-poppins gap-y-[18px]">
                <Link href="/ContactUs">Contact Us</Link>
                <Link href="/AboutUs">About Us</Link>
              </div>
            </div>
            <div className="w-auto h-auto flex flex-col text-white gap-y-[16px]">
              <h3 className="font-poppins text-sm font-medium gap-y-[18px]">
                Company
              </h3>
              <div className="flex flex-col font-poppins gap-y-[18px]">
                <Link
                  href="https://mawi.onrender.com/"
                  target="_blank"
                  className="flex gap-x-[9px]"
                >
                  <Image
                    width={24}
                    height={12}
                    src="/Footer/Website.webp"
                    alt="Website"
                  />
                  Portfolio
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mauriciogonzalovillanueva/"
                  target="_blank"
                  className="flex gap-x-[9px]"
                >
                  <Image
                    width={24}
                    height={12}
                    src="/Footer/LinkedIn.webp"
                    alt="LinkedIn"
                  />
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className="w-auto h-auto flex flex-col text-white gap-y-[16px]">
              <h3 className="font-poppins text-sm font-medium gap-y-[18px]">
                Resources
              </h3>
              <div className="flex flex-col font-poppins gap-y-[18px]">
                <Link
                  href="https://github.com/MauricioVillanueva/NEOGN"
                  target="_blank"
                  className="flex gap-x-[9px]"
                >
                  <Image
                    width={24}
                    height={12}
                    src="/Footer/Github.webp"
                    alt="Github"
                  />
                  Github
                </Link>
                <Link
                  href="https://www.figma.com/file/XW5R5igJ6SnnQeCgmzqFES/NEOGN?type=design&node-id=686%3A3753&mode=design&t=8hvpPLrwQRtukL2F-1"
                  target="_blank"
                  className="flex gap-x-[9px]"
                >
                  <Image
                    width={24}
                    height={12}
                    src="/Footer/Figma.webp"
                    alt="Figma"
                  />
                  Figma
                </Link>
              </div>
            </div>
            <div className="w-auto h-auto flex flex-col text-white gap-y-[16px]">
              <h3 className="font-poppins text-sm font-medium gap-y-[18px]">
                Get the app
              </h3>
              <div className="flex flex-col font-poppins gap-y-[18px]">
                <Link href="/ContactUs" className="flex gap-x-[9px]">
                  <Image
                    width={24}
                    height={12}
                    src="/Footer/Playstore.webp"
                    alt="Playstore"
                  />
                  PlayStore
                </Link>
                <Link href="/AboutUs" className="flex gap-x-[9px]">
                  <Image
                    width={24}
                    height={12}
                    src="/Footer/AppStore.webp"
                    alt="Appstore"
                  />{" "}
                  Appstore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-20 py-6 bg-[#FC4F24] justify-between items-center inline-flex font-poppins">
        <div className="text-white text-sm font-normal">
          © 2023 NEOGN Inc. All rights reserved.
        </div>
        <div className="justify-start items-start gap-8 flex">
          <div className="text-white text-sm font-normal">Terms of Service</div>
          <div className="text-white text-sm font-normal">Privacy Policy</div>
          <div className="text-white text-sm font-normal">Cookies</div>
        </div>
      </div>
    </div>
  );
};
