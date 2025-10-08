"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative bg-primary rounded-2xl py-12 sm:py-16 px-6 sm:px-10 md:px-16 overflow-hidden mt-10 text-white">
      <div className="absolute inset-0 opacity-70">
        <Image
          src="/HomePage/grip2.svg"
          alt="Grip texture"
          width={600}
          height={600}
          className=" w-[50%] h-[50%] "
        />
      </div>

      <div className="absolute right-5 bottom-0 hidden md:block opacity-40">
        <Image
          src="/HomePage/car(3).svg"
          alt="Car silhouette"
          width={350}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-2xl  text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Enjoy every mile with <br className="hidden sm:block" /> adorable companionship.
        </h1>

        <p className="text-white/80 mb-8 text-sm sm:text-base">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
          bibendum ullamcorper in. Diam tincidunt tincidunt erat.
        </p>

        <div className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto md:mx-0">
          <Input
            type="text"
            placeholder="Enter city"
            className="border-none text-gray-700 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 px-4 w-full"
          />
          <Button
            variant="secondary"
            className="w-full sm:w-[35%] mt-3 sm:mt-0 font-semibold"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
