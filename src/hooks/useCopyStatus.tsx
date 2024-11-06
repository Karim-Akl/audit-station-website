"use client";

import { useEffect, useState } from "react";

const useCopyStatus = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return { isCopied, setIsCopied };
};

export default useCopyStatus;
