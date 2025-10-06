import Image from "next/image";
import React from "react";

export default function Download({className}: {className?: string}) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Image
        src="/App Store.svg"
        alt="App Store"
        width={140}
        height={45}
        className="cursor-pointer"
      />
      <Image
        src="/Google Play.svg"
        alt="Play Store"
        width={140}
        height={45}
        className="cursor-pointer"
      />
    </div>
  );
}
