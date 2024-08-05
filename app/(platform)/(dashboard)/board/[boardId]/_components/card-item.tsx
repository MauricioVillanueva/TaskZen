"use client";

import { Card } from "@prisma/client";
import { Draggable } from "@hello-pangea/dnd";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import { useCardModal } from "@/hooks/use-card-modal";
import Image from "next/image";

interface CardItemProps {
  data: Card;
  index: number;
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "800", "1000"],
});

export const CardItem = ({ data, index }: CardItemProps) => {
  const cardModal = useCardModal();

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <section
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          onClick={() => cardModal.onOpen(data.id)}
          className="border-2 border-transparent hover:border-white p-4 text-sm text-white bg-[#272727] rounded-lg shadow-sm flex flex-col gap-y-3"
        >
          <section className="flex w-full h-auto gap-x-2">
            <div className="flex items-center justify-start gap-x-2 gap-y-2 flex-wrap font-semibold text-xs">
              <div className="bg-[#fcc9ac] text-[#FF5C00] py-1 px-2 rounded-md w-fit h-auto">
                BackEnd
              </div>
              <div className="bg-[#CDF4DD] text-[#188544] py-1 px-2 rounded-md w-fit h-auto">
                Research
              </div>
              <div className="bg-[#aff4ff] text-[#2C62B4] py-1 px-2 rounded-md w-fit h-auto ">
                API
              </div>
              <div className="bg-[#f9c5fc] text-[#FF00B8] py-1 px-2 rounded-md w-fit h-auto">
                Initial Design
              </div>
            </div>
            <div className="w-auto h-auto">
              <Image
                src="/../Priority/Highest.webp"
                alt="Highest"
                width={36}
                height={36}
              />
            </div>
          </section>
          <div className="flex flex-col">
            <h2 className={cn("font-medium text-xl", dmSans.className)}>
              {data.title}
            </h2>
            <p className={cn("text-[#828282] font-normal", dmSans.className)}>
              {data.description}
            </p>
          </div>
          <section className="w-full h-auto flex gap-x-3">
            <div className="w-auto h-auto flex gap-x-1 justify-center items-center">
              <Image
                src="/../FileIcon/Figma.svg"
                alt="Figma"
                width={20}
                height={20}
              />
              Figma
            </div>
            <div className="w-auto h-auto flex gap-x-1 justify-center items-center">
              <Image
                src="/../FileIcon/GDocs.svg"
                alt="GDocs"
                width={12}
                height={12}
              />
              Docs
            </div>
            <div className="w-auto h-auto flex gap-x-1 justify-center items-center">
              <Image
                src="/../FileIcon/GDrive.svg"
                alt="GDrive"
                width={18}
                height={18}
              />
              Folder
            </div>
          </section>
          <section className="w-full h-auto flex gap-x-3">
            <div className="w-auto h-auto flex gap-x-1 justify-center items-center">
              <Image
                src="/../FileIcon/Link.svg"
                alt="Link"
                width={24}
                height={24}
              />
              URL label
            </div>
            <div className="w-auto h-auto flex gap-x-1 justify-center items-center">
              <Image
                src="/../FileIcon/Link.svg"
                alt="Link"
                width={24}
                height={24}
              />
              URL label
            </div>
          </section>
          <section className="w-full h-auto">
            <h2 className="text-[#828282]">Notes:</h2>
            <p className="">Type here...</p>
          </section>
          <div className="w-full bg-white h-[1px]" />
          <section className="h-auto w-full flex justify-between items-center pt-3">
            <div className="w-auto h-auto flex gap-x-2 items-center justify-center">
              <Image
                src="/../FileIcon/User.png"
                alt="User"
                width={24}
                height={24}
              />
              Kaden Smith
            </div>
            <div className="flex items-center gap-x-2 justify-center text-[#828282]">
              <Image
                src="/../FileIcon/Calendar.svg"
                alt="Calendar"
                width={24}
                height={24}
              />
              DD MM
            </div>
          </section>
        </section>
      )}
    </Draggable>
  );
};
