import { SearchBar } from "@/components/search";
import React from "react";
import { HeaderImage } from "./HeaderImage";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center sm:justify-evenly justify-center bg-black w-full max-w-screen px-5 lg:px-0 p-2 z-30">
        <div><HeaderImage/></div>
        <div className="bg-white rounded-md z-10 hidden sm:block"><SearchBar isMobile={false} /></div>
        <div>theme</div>
      </div>
    </header>
  );
};
