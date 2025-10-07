import React from "react";
import Card from "../shared/Card";
import { MoveRight } from "lucide-react";
import { carList } from "@/constant/data";
import Link from "next/link";
export default function ChooseYourCar({ title }: { title: string }) {
  return (
    <div className="space-y-8 ">
      <div className="flex items-center justify-between">
        <h2 className="text-[42px] md:text-[50px] font-bold text-gray-900">
          {title}
        </h2>

        <Link href={'/vehicles'} className="flex items-center gap-2 text-base font-semibold  hover:underline">
          View All <MoveRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {carList.filter(item => item.id < 7).map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
