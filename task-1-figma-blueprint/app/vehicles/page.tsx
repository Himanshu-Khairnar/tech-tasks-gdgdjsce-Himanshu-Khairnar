"use client";
import Card from "@/components/shared/Card";
import Image from "next/image";
import React, { useState } from "react";
import CompanyLogo from "@/components/shared/CompanyLogo";
import { carList } from "@/constant/data";

export default function Page() {
  const list = [
    { name: "All Vehicles" },
    { name: "Sedan", img: "/vehicles/sedan.svg" },
    { name: "Cabriolet", img: "/vehicles/cabriolet.svg" },
    { name: "Pickup", img: "/vehicles/pickup.svg" },
    { name: "Suv", img: "/vehicles/suv.svg" },
    { name: "Minivan", img: "/vehicles/minivan.svg" },
  ];

  const [selectedType, setSelectedType] = useState("All Vehicles");

  const filteredCars =
    selectedType === "All Vehicles"
      ? carList
      : carList.filter(
          (car) => car.type?.toLowerCase() === selectedType.toLowerCase()
        );

  return (
    <div className="page-enter">
      <div className="flex flex-col gap-8 items-center text-center px-4">
        <h1 className="text-[36px] md:text-[45px] font-[700]">Select a vehicle group</h1>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
          {list.map((item) => (
            <li
              key={item.name}
              onClick={() => setSelectedType(item.name)}
              className={`flex items-center gap-2 py-2 px-4 rounded-full cursor-pointer transition text-sm md:text-base ${
                selectedType === item.name
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {item.img && (
                <Image src={item.img} alt={item.name} height={24} width={24} />
              )}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {filteredCars.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      <CompanyLogo />
    </div>
  );
}
