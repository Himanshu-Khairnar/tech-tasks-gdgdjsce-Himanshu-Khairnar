import Image from "next/image";
import React from "react";
import { Fuel, Snowflake, Settings, User, Route, DoorOpen } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Points from "../shared/Points";
import { carList } from "@/constant/data";

export default function DetailSection({ carId }: { carId: string | null }) {
  const car = carList.find((item) => item.id === Number(carId));
  const carEquipments = [
    "ABS",
    "Airbags",
    "Bluetooth",
    "Cruise Control",
    "Parking Sensors",
    "Rearview Camera",
  ];
  if (!car) return <p>Car not found</p>;

  const carFeatures = [
    { id: 1, icon: <Settings size={22} />, title: "Gear Box", value: car.transmission },
    { id: 2, icon: <Fuel size={22} />, title: "Fuel", value: car.fuel },
    { id: 3, icon: <DoorOpen size={22} />, title: "Doors", value: car.doors },
    { id: 4, icon: <Snowflake size={22} />, title: "Air Conditioner", value: "Yes" },
    { id: 5, icon: <User size={22} />, title: "Seats", value: car.seats },
    { id: 6, icon: <Route size={22} />, title: "Distance", value: car.distance },
  ];

  const handleSubmit = () => {
    toast.success("Booking Successful 🎉", {
      description: "Car has been rented successfully!",
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 ">
      <div className="space-y-6 flex-1">
        <h1 className="text-[30px] md:text-[35px] font-bold">{car.name}</h1>

        <div className="flex items-end space-x-1">
          <span className="text-4xl font-bold bg-primary text-transparent bg-clip-text">
            ${car.price}
          </span>
          <span className="text-gray-500 text-sm">/ day</span>
        </div>

        <div className="space-y-4">
          <Image
            src={car.image}
            alt={car.name}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full"
          />
          <Image
            src="/Vehicles/MorePhoto.svg"
            alt="Car Gallery"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full"
          />
        </div>
      </div>

      <div className="space-y-10 flex-1">
        <h1 className="text-[20px] font-bold">Technical Specification</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {carFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start bg-gray-50 hover:bg-gray-100 hover:shadow-lg p-4 rounded-xl text-sm"
            >
              <div className="mb-2 text-primary">{feature.icon}</div>
              <span className="font-semibold">{feature.title}</span>
              <span className="text-gray-600">{feature.value}</span>
            </div>
          ))}
        </div>

        <Button className="w-full md:w-[240px] h-[50px]" onClick={handleSubmit}>
          Rent a Car
        </Button>

        <div>
          <h1 className="text-lg font-semibold">Car Equipments</h1>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {carEquipments.map((item, index) => (
              <Points key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
