"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <nav className="flex items-center justify-between  py-[28px]   bg-white">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/Logo.svg" alt="Car Icon" width={32} height={32} />
        <span className="font-semibold text-lg text-gray-900">Car Rental</span>
      </Link>

      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex gap-2">
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

      <Link
        href="tel:+9962471680"
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
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
    </nav>
  );
}
