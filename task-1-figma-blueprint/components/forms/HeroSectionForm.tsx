"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
export default function HeroSectionForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    carType: "",
    rentalPlace: "",
    returnPlace: "",
    rentalDate: "",
    returnDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking Successful 🎉", {
      description: "Car has been rented successfully!",
      duration: 3000,
    });

    setFormData({
      carType: "",
      rentalPlace: "",
      returnPlace: "",
      rentalDate: "",
      returnDate: "",
    });
    console.log("Form Data:", formData);
  };

  return (
  <div
    className={cn(
      "rounded-2xl w-full max-w-sm mx-auto p-6 backdrop-blur-sm transition-colors z-10",
      className
    )}
  >
    <div className="rounded-2xl w-full sm:w-80 mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Book your car
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <select
          name="carType"
          value={formData.carType}
          onChange={handleChange}
          className="w-full bg-white/10 [&_*]:text-black dark:bg-black/20 dark:text-white border-none rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400"
        >
          <option value="">Car type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
        </select>

        <select
          name="rentalPlace"
          value={formData.rentalPlace}
          onChange={handleChange}
          className="w-full bg-white/10 dark:bg-black/20 [&_*]:text-black dark:text-white border-none rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Place of rental</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
        </select>

        <select
          name="returnPlace"
          value={formData.returnPlace}
          onChange={handleChange}
          className="w-full bg-white/10 dark:bg-black/20 [&_*]:text-black dark:text-white border-none rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Place of return</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
        </select>

        <input
          type="date"
          name="rentalDate"
          value={formData.rentalDate}
          onChange={handleChange}
          className="w-full bg-white/10 dark:bg-black/20 [&_*]:text-white dark:text-white border-none rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          className="w-full bg-white/10 dark:bg-black/20 dark:text-white border-none rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <Button
          type="submit"
          variant="secondary"
          className="w-full font-semibold hover:bg-yellow-400 hover:text-black transition"
        >
          Book Your Ride
        </Button>
      </form>
    </div>
  </div>
);

}
