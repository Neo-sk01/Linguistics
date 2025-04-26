"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function Logo() {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center">
      <Image 
        src="/noBG.png" 
        alt="IMPERIUM LINGUISTICS Logo" 
        width={72} 
        height={72} 
        className="mr-2"
      />
      <span className="font-bold text-lg">IMPERIUM LINGUISTICS</span>
    </div>
  );
}
