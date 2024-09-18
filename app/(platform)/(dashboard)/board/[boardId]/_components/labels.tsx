"use client";

import { ElementRef, useRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { JsonValue } from "@prisma/client/runtime/library";

interface Label {
  color: string;
  title: string;
  available: boolean;
}

interface LabelsProps {
  data: JsonValue;
}

const colors: { [key: string]: string } = {
  orange: "bg-LabOrange text-TLabOrange",
  green: "bg-LabGreen text-TLabGreen",
  blue: "bg-LabBlue text-TLabBlue",
  pink: "bg-LabPink text-TLabPink",
  red: "bg-LabRed text-TLabRed",
};

const isLabelArray = (data: unknown): data is Label[] => {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "color" in item &&
        "title" in item &&
        "available" in item
    )
  );
};

export const Labels = ({ data }: LabelsProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);
  const [isEditing, setIsEditing] = useState(false);

  const labels = isLabelArray(data) ? (data as Label[]) : [];

  console.log(labels);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Button
          variant="gray"
          className="w-full justify-start bg-[#383838] text-white hover:bg-[#505050]"
          size="inline"
        >
          <Tag className="h-4 w-4 mr-2" />
          Labels
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="px-0 py-3 pb-4 bg-[#272727] border-stone-500"
        side="bottom"
        align="start"
      >
        <div className="text-sm font-medium text-center text-[#B6C2CF] pb-4">
          Labels
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-[#B6C2CF]"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <div className="h-auto w-auto gap-y-4 flex flex-col font-semibold">
          {labels &&
            labels.map((label: { color: string }, index: number) => {
              const colorClasses =
                colors[label.color] || "bg-gray-500 text-gray-700";
              return (
                <div className="w-full h-[26px] flex items-center pl-4 pr-3 gap-x-3">
                  <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black" />
                  <div
                    className={`w-full h-auto ${colorClasses} items-center text-start  rounded-sm py-1 px-2`}
                  >
                    {label.color}
                  </div>
                </div>
              );
            })}
          {/* <div className="w-full h-[26px] flex items-center pl-4 pr-3 gap-x-3">
            <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black" />
            <div className="w-full h-auto bg-LabOrange text-TLabOrange items-center text-start  rounded-sm py-1 px-2">
            {labels && labels[0].color}
            </div>
          </div>
          <div className="w-full h-[26px] flex items-center pl-4 pr-3 gap-x-3">
            <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black" />
            <div className="w-full h-auto bg-LabGreen text-TLabGreen items-center text-start  rounded-sm py-1 px-2">
              Text
            </div>
          </div>
          <div className="w-full h-[26px] flex items-center pl-4 pr-3 gap-x-3">
            <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black" />
            <div className="w-full h-auto bg-LabBlue text-TLabBlue items-center text-start  rounded-sm py-1 px-2">
              {" "}
              Text{" "}
            </div>
          </div>
          <div className="w-full h-[26px] flex items-center pl-4 pr-3 gap-x-3">
            <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black" />
            <div className="w-full h-auto bg-LabPink text-TLabPink items-center text-start  rounded-sm py-1 px-2">
              Text
            </div>
          </div>
          <div className="w-full h-[26px] flex items-center pl-4 pr-3 gap-x-3">
            <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black" />
            <div className="w-full h-auto bg-LabRed text-TLabRed items-center text-start  rounded-sm py-1 px-2">
              Text
            </div>
          </div> */}
        </div>
      </PopoverContent>
    </Popover>
  );
};
