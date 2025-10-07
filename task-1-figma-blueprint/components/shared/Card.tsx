"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Fuel, Snowflake, Settings } from "lucide-react";

interface Car {
  id: number;
  name: string;
  type: string;
  price: number;
  fuel: string;
  seats: number;
  doors: number;
  distance: string;
  transmission: string;
  image: string;
}
export default function CarCard({item}: {item: Car}) {
  return (
    <Card className="w-[310px]  rounded-xl h-[400px] border-none bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all duration-200" >
      <CardContent className="p-4">
        <div className="w-full flex justify-center mb-3">
          <Image
            src={item.image as string}
            alt="Mercedes"
            width={220}
            height={100}
            className="object-contain opacity-80"
          />
        </div>

        <div className="flex justify-between items-center mb-2 mt-10 py-3">
          <div>
            <h3 className="font-semibold text-gray-900">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.type}</p>
          </div>
          <div className="text-right ">
            <p className="text-primary font-bold text-lg">${item.price}</p>
            <p className="text-gray-400 text-xs">per day</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-700 text-sm mt-4">
          <div className="flex items-center gap-1">
            <Settings size={16} className="text-gray-700" />
            <span>{item.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel size={16} className="text-gray-700" />
            <span>PB 95</span>
          </div>
          <div className="flex items-center gap-1">
            <Snowflake size={16} className="text-gray-700" />
            <span>Air Conditioner</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
         <Link href={`/detail?id=${item.id}`} passHref className="w-full">
        <Button >
          View Details
        </Button>
      </Link>
      </CardFooter>
    </Card>
  );
}
