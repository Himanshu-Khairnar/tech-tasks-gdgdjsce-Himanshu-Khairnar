"use client";
import Image from "next/image";
import Download from "../shared/Download";

export default function AboutUsDownloadSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center md:justify-between bg-primary text-white rounded-3xl overflow-hidden mt-12 p-8 md:p-16">
      <div className="absolute inset-0 opacity-70">
        <Image
          src="/HomePage/grip2.svg"
          alt="Grip texture"
          width={1000}
          height={500}
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex justify-center md:justify-start mb-8 md:mb-0">
        <Image
          src="/aboutus/phone.svg"
          alt="App preview"
          width={250}
          height={500}
          className="drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-lg space-y-4">
        <p className="uppercase text-sm tracking-widest text-white/70">
          Download our app
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Download our app
        </h2>
        <p className="text-white/80">
          Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
          semper diam rutrum dictumst ut donec. Nulla nam eget urna fusce
          vulputate at risus.
        </p>
        <Download />
      </div>
    </section>
  );
}
