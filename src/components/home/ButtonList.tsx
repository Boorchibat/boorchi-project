import React from "react";
import { Button } from "../ui";
import Link from "next/link";

export const ButtonList = () => {
  return (
    <div className="flex flex-col items-center static">
      <Link className="bg-gray-50" href={"/"}>
        <Button className="w-[300px] h-[140px] rounded-xl ">Home</Button>
      </Link>
      <Link className="bg-gray-50" href={"/console"}>
        <Button className="w-[300px] h-[140px]">Consoles</Button>
      </Link>
      <Link className="bg-gray-50" href={"/xbox"}>
        <Button className="w-[300px] h-[140px]">Xbox</Button>
      </Link>
      <Link className="bg-gray-50" href={"/pc"}>
        <Button className="w-[300px] h-[140px]">PC</Button>
      </Link>
      <Link className="bg-gray-50" href={"/ps4"}>
        <Button className="w-[300px] h-[140px]">PS4</Button>
      </Link>
    </div>
  );
};
