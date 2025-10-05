"use client";

import { useState } from "react";

export default function BookYourCarForm() {
  const [formData, setFormData] = useState({
    carType: "",
    rentalPlace: "",
    returnPlace: "",
    rentalDate: "",
    returnDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-white text-black p-6  w-full max-w-sm mx-auto ">

      <form onSubmit={handleSubmit} className="space-y-3">
        <select
          name="carType"
          value={formData.carType}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-none rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
          className="w-full bg-gray-50 border border-none rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
          className="w-full bg-gray-50 border border-none rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Place of return</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
        </select>

        <div className="relative">
          <input
            type="date"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-none rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="relative">
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="w-full bg-gray-50 border-none rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition-colors"
        >
          Book now
        </button>
      </form>
    </div>
  );
}
