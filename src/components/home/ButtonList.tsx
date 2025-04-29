import React from "react";
import { Button } from "../ui";
import Link from "next/link";

export const ButtonList = () => {
  return (
    <div className="hidden sm:flex flex-col items-center static z-10 2xl:hidden">
      <Link className="bg-gray-50" href={"/"}>
        <Button className="w-[300px] h-[140px] rounded-none text-[25px]">Home</Button>
      </Link>
      <Link className="bg-gray-50" href={"/console"}>
        <Button className="w-[300px] h-[140px] rounded-none text-[25px]">Consoles</Button>
      </Link>
      <Link className="bg-gray-50" href={"/xbox"}>
        <Button className="w-[300px] h-[140px] rounded-none text-[25px] ">Xbox</Button>
      </Link>
      <Link className="bg-gray-50" href={"/pc"}>
        <Button className="w-[300px] h-[140px] rounded-none text-[25px]">PC</Button>
      </Link>
      <Link className="bg-gray-50" href={"/ps4"}>
        <Button className="w-[300px] h-[140px] rounded-none text-[25px] ">PS4</Button>
      </Link>
    </div>
  );
};
