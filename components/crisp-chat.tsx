"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9e856e8e-86fa-4848-a64e-76b4c4379a16");
  }, []);

  return null;
};
