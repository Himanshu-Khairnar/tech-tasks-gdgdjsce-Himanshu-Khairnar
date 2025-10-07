import Image from "next/image";
import React from "react";
import { Car, Fuel, Snowflake, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Points from "../shared/Points";
const carFeatures = [
  {
    id: 1,
    icon: "settings", // optional - replace with lucide-react or any icon import
    title: "Gear Box",
    value: "Automatic",
  },
  {
    id: 2,
    icon: "fuel",
    title: "Fuel",
    value: "Petrol",
  },
  {
    id: 3,
    icon: "door",
    title: "Doors",
    value: "2",
  },
  {
    id: 4,
    icon: "air-conditioner",
    title: "Air Conditioner",
    value: "Yes",
  },
  {
    id: 5,
    icon: "user",
    title: "Seats",
    value: "5",
  },
  {
    id: 6,
    icon: "route",
    title: "Distance",
    value: "500 km",
  },
];

export default function DetailSection() {
  return (
    <div className="flex">
      <div className="space-y-6 ">
        <h1 className="text-[35px] font-[700]">BMW</h1>

        <div className="flex items-end space-x-1">
          <span className="text-4xl font-bold bg-[#6C63FF]  text-transparent bg-clip-text">
            $25
          </span>
          <span className="text-gray-500 text-sm">/ day</span>
        </div>

        <div className="space-y-4">
          <Image
            src="/Vehicles/car1.svg"
            alt="Car Image"
            width={600}
            height={400}
          />
          <Image
            src="/Vehicles/MorePhoto.svg"
            alt="Car Image"
            width={600}
            height={400}
          />
        </div>
      </div>

      <div className="space-y-10">
        <h1 className="text-[20px] font-[700]">Technical Specification</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {carFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start bg-gray-100 p-4 rounded-xl text-sm"
            >
              <div className="mb-2">
                {feature.icon === "settings" && <Settings size={24} />}
                {feature.icon === "fuel" && <Fuel size={24} />}
                {feature.icon === "door" && <Car size={24} />}
                {feature.icon === "air-conditioner" && <Snowflake size={24} />}
                {feature.icon === "user" && <Car size={24} />}
                {feature.icon === "route" && <Car size={24} />}
              </div>
              <span className="  font-semibold">{feature.title}</span>
              <span className=" text-gray-600  ">{feature.value}</span>
            </div>
          ))}
        </div>
        <Button className="w-[240px] h-[50px]">Rent a Car</Button>

        <div>
          <h1>Car Equiments</h1>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <Points key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
