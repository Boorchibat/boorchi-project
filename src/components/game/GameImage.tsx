import { cn } from "@/lib";
import { ClassValue } from "clsx";
import Image from "next/legacy/image";
import React from "react";

type GameImageProps = {
  backgroundpath: string;
  className?: ClassValue;
};

export const GameImage = (props: GameImageProps) => {
  const { backgroundpath, className } = props;

  const imageURL = backgroundpath;

  const imagePathNotComplete = !backgroundpath;
  if (imagePathNotComplete) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <div className="absolute inset-0 z-10 bg-primary/30" />
      </div>
    );
  }
  return (
    <div className={cn("relative overflow-hidden z-10", className)}>
      <Image
        priority
        src={imageURL}
        alt="poster"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};
