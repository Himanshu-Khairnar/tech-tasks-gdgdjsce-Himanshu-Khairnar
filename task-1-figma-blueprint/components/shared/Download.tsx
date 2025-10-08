import Image from "next/image";
import React from "react";

interface DownloadProps {
  className?: string;
}

export default function Download({ className = "" }: DownloadProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center md:justify-start gap-3 ${className}`}
    >
      <Image
        src="/App Store.svg"
        alt="App Store"
        width={150}
        height={45}
        className="cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <Image
        src="/Google Play.svg"
        alt="Google Play"
        width={150}
        height={45}
        className="cursor-pointer hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
