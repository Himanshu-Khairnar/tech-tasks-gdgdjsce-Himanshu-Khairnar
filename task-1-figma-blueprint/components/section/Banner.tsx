"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Banner() {
  const facts = [
    { img: "/HomePage/car(7).svg", value: "540+", label: "Cars" },
    { img: "/HomePage/customers.svg", value: "20k+", label: "Customers" },
    { img: "/HomePage/calendar.svg", value: "25+", label: "Years" },
    { img: "/HomePage/speedometer.svg", value: "20m+", label: "Miles" },
  ];

  return (
    <section className="relative bg-primary py-16 px-6 md:px-16 rounded-2xl text-center mt-10 overflow-hidden">
      <div className="absolute -left-3 top-2/5 -translate-y-1/2 w-[700px] opacity-70 rotate-[20deg]">
        <Image
          src="/HomePage/grip2.svg"
          alt="Grip texture"
          width={600}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center opacity-20 ">
        <Image
          src="/HomePage/BlurCarBanner.svg"
          alt="Car background"
          width={700}
          height={300}
          className="object-contain "
        />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Facts In Numbers
      </h2>
      <p className="text-white/80 max-w-2xl mx-auto mb-10 text-sm md:text-base">
        Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
        bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
        fermentum
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {facts.map((fact, index) => (
          <Card
            key={index}
            className="flex items-center justify-center rounded-2xl shadow-lg h-[80px] w-[180px] bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
          >
            <CardContent className="flex items-center gap-4 p-4 ">
              <div className="bg-secondary hover:bg-secondary/5 p-3 rounded-xl flex items-center justify-center">
                <Image src={fact.img} alt={fact.label} width={24} height={24} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg">{fact.value}</h3>
                <p className="text-gray-500 text-sm">{fact.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
