"use client";
import React from "react";
import { ContainerScroll } from "./brandsContainer";
import Image from "next/image";
import { InfiniteMovingCardsDemo } from "./infiniteDemo";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
            Trusted by <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Companies like
              </span>
            </h1>
          </>
        }
      >
        <InfiniteMovingCardsDemo/>
      </ContainerScroll>
    </div>
  );
}
