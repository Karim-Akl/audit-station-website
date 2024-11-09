"use client";
import { useState, useRef } from "react";

export const useDebounceSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getSearchValue = (value: string) => {
    setSearchValue(value);

    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      setDebouncedSearchText(value); // Update search text after the debounce delay
    }, 500);
  };

  return { searchValue, getSearchValue, debouncedSearchText };
};
