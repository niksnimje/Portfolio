"use client";

import { useState, useEffect } from "react";
import Loader from "@/Comman/Loader";

export default function LoaderWrapper({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (showLoader) {
      // Loader visible → scroll OFF
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }

    // cleanup (safety)
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [showLoader]);

  return (
    <>
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
      {children}
    </>
  );
}
