"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infiniteMoving";

export const InfiniteMovingCardsDemo = () => {
  return (
    <div className="h-auto w-full rounded-md flex flex-col antialiased bg-gray-100 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={brands} direction="right" speed="slow" />
    </div>
  );
};

const brands = [
  {
    brand: "/Logos/Github.png",
  },
  {
    brand: "/Logos/Notion.png",
  },
  {
    brand: "/Logos/Calendar.png",
  },
  {
    brand: "/Logos/Slack.png",
  },
  {
    brand: "/Logos/Outlook.png",
  },
  {
    brand: "/Logos/Twitch.png",
  },
];
