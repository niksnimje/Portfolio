"use client";

import { useState } from "react";
import Loader from "@/Comman/Loader";

export default function LoaderWrapper({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
      {children}
    </>
  );
}
