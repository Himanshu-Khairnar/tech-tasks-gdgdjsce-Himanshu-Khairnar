import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube, X } from "lucide-react";
import Download from "../shared/Download";
import IconDetail from "../shared/IconDetail";

export default function Footer() {
  const links = {
    useful: ["About us", "Contact us", "Gallery", "Blog", "F.A.Q"],
    vehicles: ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"],
  };

  const Icon: { src: string; name: string; desc: string }[] = [
    { src: "Address.svg", name: "Address", desc: "Oxford Ave. Cary, NC 27511" },
    { src: "Email.svg", name: "Email", desc: "nwiger@yahoo.com" },
    { src: "Phone.svg", name: "Phone", desc: "+537 547-6401" },
  ];

  return (
    <footer className="bg-white py-10  border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 border-gray-200">
        <div className="flex items-center gap-2">
          <Image src="/Logo.svg" alt="Car Icon" width={32} height={32} />
          <span className="font-semibold text-lg text-gray-900">Car Rental</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          {Icon.map((item, index) => (
            <IconDetail key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-10">
        <div>
          <h3 className="font-bold  mb-4 leading-relaxed">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis
            massa a id iaculis lorem tincidunt.
          </h3>
          <div className="flex gap-4 mt-2">
            <Facebook
              size={20}
              className="text-white bg-black p-1 h-6 w-6 rounded-full hover:bg-primary transition"
            />
            <Instagram
              size={20}
              className="text-white bg-black p-1 h-6 w-6 rounded-full hover:bg-primary transition"
            />
            <X
              size={20}
              className="text-white bg-black p-1 h-6 w-6 rounded-full hover:bg-primary transition"
            />
            <Youtube
              size={20}
              className="text-white bg-black p-1 h-6 w-6 rounded-full hover:bg-primary transition"
            />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Useful Links</h4>
          <ul className="space-y-2">
            {links.useful.map((link) => (
              <li
                key={link}
                className="text-sm text-gray-700 hover:text-primary cursor-pointer transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Vehicles</h4>
          <ul className="space-y-2">
            {links.vehicles.map((vehicle) => (
              <li
                key={vehicle}
                className="text-sm text-gray-700 hover:text-primary cursor-pointer transition"
              >
                {vehicle}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Download App</h4>
          <div className="flex flex-col items-start">
            <Download className="flex-col justify-center" />
          </div>
        </div>
      </div>

     
    </footer>
  );
}
