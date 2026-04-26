"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const projectId = "w6x2n5g17v";

export default function ClarityAnalytics() {
  useEffect(() => {
    Clarity.init(projectId);
  }, []);

  return null;
}
