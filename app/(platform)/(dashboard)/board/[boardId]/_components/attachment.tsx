"use client";

import { ElementRef, useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Link2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Attachment = () => {
  const closeRef = useRef<ElementRef<"button">>(null);

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Button variant="gray" className="w-full justify-start bg-[#383838] text-white hover:bg-[#505050]" size="inline">
          <Link2 className="h-4 w-4 mr-2" />
          Attachment
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="px-0 py-3 bg-[#272727] border-stone-500"
        side="bottom"
        align="start"
      >
        <div className="text-sm font-medium text-center text-[#B6C2CF] pb-4">
          Attachment
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-[#B6C2CF]"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};
