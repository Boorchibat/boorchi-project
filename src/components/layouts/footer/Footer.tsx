import React from "react";
import { HeaderImage } from "../header/HeaderImage";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="z-10">
      <div className="flex items-center justify-evenly w-full max-w-screen px-5 lg:px-0 p-5 bg-black z-10">
        <HeaderImage />
        <div className="flex gap-x-5 font-bold bg-white p-6 rounded-md">
          <div className="bg-red-100 p-2 rounded-md">
            <Link href="/">
              <h1>Return to Home</h1>
            </Link>
          </div>
          <div className="bg-green-100 p-2 rounded-md">
            <Link href="/consoles">
              <h1>See Games available on Consoles</h1>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
