import React from "react";
import { Skeleton } from "../ui";

const HomeSkeleton = () => {
  return (
    <div className="pt-[59px] lg:pt-[83px]">
      <Skeleton className="h-[246px] lg:h-150" />

      <div className="w-full h-screen">
        <div className="py-5 lg:hidden space-y-4">
          <div className="flex justify-between">
            <div className="space-y-1">
              <Skeleton className="h-[18px] w-[101px] rounded-full" />
              <Skeleton className="h-[30px] w-[101px] rounded-full" />
            </div>

            <Skeleton className="h-[30px] w-[101px] rounded-full" />
          </div>

          <div className="space-y-1 pb-2">
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-full rounded-full" />
            <Skeleton className="h-5 w-[318px] rounded-full" />
            <Skeleton className="h-5 w-[249px] rounded-full" />
          </div>

          <Skeleton className="h-10 w-[169px] rounded-full" />
        </div>

        <div className="space-y-8 lg:space-y-13 my-8 lg:my-13">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-8">
              <div className="flex justify-between">
                <Skeleton className="h-8 w-[145px] lg:w-[250px] rounded-full" />
                <Skeleton className="h-9 w-[125px] lg:w-[165px] rounded-full" />
              </div>

              <div className="flex items-center flex-wrap gap-5 lg:gap-8">
                {Array.from({ length: 10 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="w-[157.5px] lg:w-[229.73px] h-[309.1px] lg:h-[439px]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
