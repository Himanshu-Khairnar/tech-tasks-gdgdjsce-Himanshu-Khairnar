"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Download from "../shared/Download";

export default function AboutUsDownloadSection() {
  return (
    <section className="relative h-[400px] flex flex-col md:flex-row items-center justify-center md:justify-between bg-primary text-white  rounded-3xl   min-w-[300px] mt-50 ">
      <div className="absolute inset-0 left-20 opacity-80">
        <Image
          src="/HomePage/grip2.svg"
          alt="Grip texture"
          height={500}
          width={1000}
          className=" object-center"
        />
      </div>

      <div className="relative z-10 bottom-20 left-20 flex justify-center md:justify-start">
        <Image
          src="/aboutus/phone.svg"
          alt="App preview"
          width={250}
          height={500}
          className="drop-shadow-2xl"
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 max-w-lg px-5 relative z-10 left-1">
        <p className="uppercase text-sm tracking-widest opacity-80">
          Download our app
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
          Download our app
        </h2>
        <p className="text-white/80 mb-6">
          Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
          semper diam rutrum dictumst ut donec. Nulla nam eget urna fusce
          vulputate at risus.
        </p>
        <Download />
      </div>
     
    </section>
  );
}
