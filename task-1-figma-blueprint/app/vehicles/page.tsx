import Card from "@/components/shared/Card";
import Image from "next/image";
import React from "react";
import CompanyLogo from "@/components/shared/CompanyLogo";
const list = [
  {
    name: "All Vehicles",
  },
  {
    name: "Sedan",
    img: "/vehicles/sedan.svg",
  },
  {
    name: "Cabriolet",
    img: "/vehicles/cabriolet.svg",
  },
  {
    name: "Pickup",
    img: "/vehicles/pickup.svg",
  },
  {
    name: "Suv",
    img: "/vehicles/suv.svg",
  },
  {
    name: "Minivan",
    img: "/vehicles/minivan.svg",
  },
];

export default function page() {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-[45px] font-[700]">Select a vehicle group</h1>

        <div>
          <ul className="flex gap-12">
            {list.map((item) => (
              <li
                key={item.name}
                className="flex gap-2 bg-gray-100 py-1.5 px-3 rounded-2xl"
              >
                {item.img && <Image src={item.img} alt={item.name} height={24} width={24} />}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:garid-cols-2 md:grid-cols-3  gap-6">
          {Array.from({ length: 9 }, (_, index) => (
            <Card key={index} />
          ))}
        </div>

      </div>
      <CompanyLogo />
    </div>
  );
}
