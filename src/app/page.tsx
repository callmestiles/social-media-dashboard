"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 justify-between items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
          Social Media Dashboard
        </h1>
        <p className="text-base font-medium leading-normal tracking-normal text-gray-500">
          Total Followers: 23,004
        </p>
      </div>
      <div className="flex justify-between md:justify-start items-center space-x-4 w-full md:w-auto">
        <p className="text-base font-semibold text-gray-500 md:text-foreground">
          Dark Mode
        </p>
        <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
      </div>
    </div>
  );
}
