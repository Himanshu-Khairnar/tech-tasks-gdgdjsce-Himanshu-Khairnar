"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between py-5   relative">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/Logo.svg" alt="Car Icon" width={32} height={32} />
        <span className="font-semibold text-lg text-gray-900">Car Rental</span>
      </Link>

      <div className="hidden md:flex">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex gap-3">
            {["Home", "Vehicles", "Detail", "About us", "Contact us"].map(
              (item, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      href={`/${item === "Home" ? "" : item.replace(" ", "").toLowerCase()}`}
                    >
                      {item}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Link
        href="tel:+9962471680"
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
      >
        <div className="flex items-center justify-center bg-[#6C63FF] text-white rounded-full p-2">
          <Phone size={16} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs text-gray-500">Need help?</span>
          <span className="text-sm font-semibold text-gray-900">
            +996 247-1680
          </span>
        </div>
      </Link>

      <Button
        className="md:hidden p-2 text-gray transition-all ease-in" variant={'ghost'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col items-start p-4 space-y-3 md:hidden z-50">
          {["Home", "Vehicles", "Detail", "About us", "Contact us"].map(
            (item, i) => (
              <Link
                key={i}
                href={`/${item === "Home" ? "" : item.replace(" ", "").toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block w-full text-gray-800 font-medium hover:text-[#6C63FF]"
              >
                {item}
              </Link>
            )
          )}
          <hr className="w-full border-gray-200" />
          <Link
            href="tel:+9962471680"
            className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent transition-colors"
          >
            <div className="flex items-center justify-center bg-[#6C63FF] text-white rounded-full p-2">
              <Phone size={16} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500">Need help?</span>
              <span className="text-sm font-semibold text-gray-900">
                +996 247-1680
              </span>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
