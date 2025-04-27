import { SearchBar } from "@/components/search";
import React from "react";
import { HeaderImage } from "./HeaderImage";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-evenly w-full max-w-screen bg-black px-5 lg:px-0 p-2">
        <div><HeaderImage/></div>
        <div className="bg-white rounded-md"><SearchBar isMobile={false} /></div>
        <div>theme</div>
      </div>
    </header>
  );
};
