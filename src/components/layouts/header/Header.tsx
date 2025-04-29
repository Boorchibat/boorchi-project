import { SearchBar } from "@/components/search";
import React from "react";
import { HeaderImage } from "./HeaderImage";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-evenly bg-black w-full max-w-screen px-5 lg:px-0 p-2 ">
        <div><HeaderImage/></div>
        <div className="bg-white rounded-md z-10"><SearchBar isMobile={false} /></div>
        <div>theme</div>
      </div>
    </header>
  );
};
