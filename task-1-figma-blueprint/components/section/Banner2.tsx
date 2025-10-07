"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroBanner() {
  return (
    <section className="relative bg-primary rounded-2xl py-16 px-8 md:px-16 overflow-hidden mt-10 text-white">
      <div className="absolute inset-0 opacity-80">
        <Image
          src="/HomePage/grip2.svg"
          alt="Grip texture"
          width={600}
            height={600}
        />
      </div>

      <div className="absolute right-10 bottom-0 hidden md:block opacity-40">
        <Image
          src="/HomePage/car(3).svg"
          alt="Car silhouette"
          width={350}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Enjoy every mile with <br /> adorable companionship.
        </h1>

        <p className="text-white/80 mb-8 text-sm md:text-base">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in.
          Diam tincidunt tincidunt erat
        </p>

        <div className="flex items-center bg-white p-2 rounded-lg shadow-lg overflow-hidden w-full max-w-md">
          <Input
            type="text"
            placeholder="City"
            className="border-none text-gray-700 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 px-4"
          />
          <Button variant={'secondary'} className="w-[30%] ">
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}
