"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a11fda35-c9fe-4d91-b5ff-7c341dd9d4e2");
  }, []);

  return null;
};