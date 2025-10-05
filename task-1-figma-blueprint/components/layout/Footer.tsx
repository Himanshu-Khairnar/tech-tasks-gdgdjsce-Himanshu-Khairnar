import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube, X } from "lucide-react";

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
    <footer className="bg-white  py-4">
      <div className="flex justify-between items-center py-10 ">
        {" "}
        <div className="flex items-center gap-2">
          {" "}
          <Image src="/Logo.svg" alt="Car Icon" width={32} height={32} />{" "}
          <span className="font-semibold text-lg text-gray-900">
            {" "}
            Car Rental{" "}
          </span>{" "}
        </div>{" "}
        {Icon.map((item, index) => (
          <div key={index} className="flex items-center gap-2 ">
            {" "}
            <Image src={item.src} alt={item.name} width={32} height={32} />{" "}
            <div>
              {" "}
              <h4 className="font-semibold">{item.name}</h4>{" "}
              <p className="text-sm">{item.desc}</p>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column */}
        <div>
          <h3 className="font-semibold mb-2">Faucibus faucibus</h3>
          <p className="text-sm text-gray-600 mb-4">
            pellentesque dictum turpis. Id pellentesque turpis massa a id
            iaculis lorem tincidunt.
          </p>
          <div className="flex gap-4">
            <Facebook size={20} className="text-gray-700 hover:text-primary" />
            <Instagram size={20} className="text-gray-700 hover:text-primary" />
            <X size={20} className="text-gray-700 hover:text-primary" />
            <Youtube size={20} className="text-gray-700 hover:text-primary" />
          </div>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">Useful links</h4>
          <ul className="space-y-1">
            {links.useful.map((link) => (
              <li
                key={link}
                className="text-sm text-gray-600 hover:text-primary cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Vehicles</h4>
          <ul className="space-y-1">
            {links.vehicles.map((vehicle) => (
              <li
                key={vehicle}
                className="text-sm text-gray-600 hover:text-primary cursor-pointer"
              >
                {vehicle}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Download App</h4>
          <div className="flex flex-col justify-center gap-4">
            <Image
              src="/App Store.svg"
              alt="App Store"
              width={140}
              height={45}
              className="cursor-pointer"
            />
            <Image
              src="/Google Play.svg"
              alt="Play Store"
              width={140}
              height={45}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
