"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";

export function Logo() {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <Image 
          src="/WhatsApp Image 2025-03-22 at 08.22.16.jpeg" 
          alt="IMPERIUM LINGUISTICS Logo" 
          width={40} 
          height={40} 
          className="mr-2"
        />
      ) : (
        <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
      )}
      <span className="font-bold text-lg">IMPERIUM LINGUISTICS</span>
    </div>
  );
}
