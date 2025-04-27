"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResultList } from "./SearchResultList";

type SearchBarForOtherPageProps = {
  isMobile: boolean;
};

export const SearchBarForOtherPage = ({
  isMobile,
}: SearchBarForOtherPageProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchInputRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const removeSearchValue = () => setSearchValue("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        removeSearchValue();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchInputRef}>
      <SearchInput
        searchValue={searchValue}
        handleChange={handleChange}
        isMobile={isMobile}
      />

      {searchValue && (
        <SearchResultList
          searchValue={searchValue}
          removeSearchValue={removeSearchValue}
        />
      )}
    </div>
  );
};
