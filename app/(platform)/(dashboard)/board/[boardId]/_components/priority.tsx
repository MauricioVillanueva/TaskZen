"use client";

import { ElementRef, useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListOrdered, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Priority = () => {
  const closeRef = useRef<ElementRef<"button">>(null);

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Button variant="gray" className="w-full justify-start bg-[#383838] text-white hover:bg-[#505050]" size="inline">
          <ListOrdered className="h-4 w-4 mr-2" />
          Priority
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="px-0 py-3 bg-[#09090B] border-[#27272A]"
        side="bottom"
        align="start"
      >
        <div className="text-sm font-medium text-center text-[#B6C2CF] pb-4">
          Priority
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-[#B6C2CF]"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <section className="px-2">
          <Select>
            <SelectTrigger className="w-full pl-[20px]">
              <SelectValue placeholder="Select Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Critical" className="flex flex-row w-full">
                <Image
                  src="/../Priority/Highest.webp"
                  alt="Critical"
                  width={16}
                  height={16}
                  className="inline mr-2"
                />
                Critical
              </SelectItem>
              <SelectItem value="High" className="flex flex-row w-full">
                <Image
                  src="/../Priority/High.webp"
                  alt="High"
                  width={16}
                  height={16}
                  className="inline mr-2"
                />
                High
              </SelectItem>
              <SelectItem value="Medium" className="flex flex-row w-full">
                <Image
                  src="/../Priority/Medium.webp"
                  alt="Medium"
                  width={16}
                  height={16}
                  className="inline mr-2"
                />
                Medium
              </SelectItem>
              <SelectItem value="Moderate" className="flex flex-row w-full">
              <Image
                  src="/../Priority/Low.webp"
                  alt="Low"
                  width={16}
                  height={16}
                  className="inline mr-2"
                />
                Moderate
              </SelectItem>
              <SelectItem value="Low" className="flex flex-row w-full">
              <Image
                  src="/../Priority/Lowest.webp"
                  alt="Lowest"
                  width={16}
                  height={16}
                  className="inline mr-2"
                />
                Low
              </SelectItem>
            </SelectContent>
          </Select>
        </section>
      </PopoverContent>
    </Popover>
  );
};
