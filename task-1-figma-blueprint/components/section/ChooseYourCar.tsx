import React from "react";
import Card from "../shared/Card";
import { MoveRight } from "lucide-react";
export default function ChooseYourCar({ title }: { title: string }) {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="text-[42px] md:text-[50px] font-bold text-gray-900">
          {title}
        </h2>

        <button className="flex items-center gap-2 text-base font-semibold  hover:underline">
          View All <MoveRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:garid-cols-2 md:grid-cols-3  gap-6">
        {Array.from({ length: 6 }, (_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}
