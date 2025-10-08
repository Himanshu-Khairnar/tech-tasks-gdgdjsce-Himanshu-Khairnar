import React from "react";
import Download from "../shared/Download";
import Image from "next/image";

export default function Mobile() {
  return (
    <section className="bg-white flex flex-col-reverse md:flex-row justify-between items-center gap-10 p-6 sm:p-10 rounded-2xl mt-10 text-center md:text-left">
      <div className="flex flex-col gap-6 flex-1 items-center md:items-start">
        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold leading-tight">
          Download mobile app
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl">
          Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
          turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet
          cras hendrerit enim condimentum. Condimentum interdum risus bibendum
          urna.
        </p>
        <Download className="justify-center md:justify-start" />
      </div>

      <div className="flex justify-center flex-1">
        <Image
          src="/HomePage/Mobile.svg"
          alt="Mobile App"
          width={300}
          height={600}
          className="w-[220px] sm:w-[280px] md:w-[320px] h-auto"
        />
      </div>
    </section>
  );
}
